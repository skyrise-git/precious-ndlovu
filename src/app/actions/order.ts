"use server";

import { z } from "zod";
import type { MemberPackage } from "@/content/site";
import { getMemberPackages } from "@/lib/packages";
import { prisma } from "@/lib/prisma";

const lineSchema = z.object({
  packageId: z.string(),
  quantity: z.number().int().positive(),
});

const schema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(5, "Enter a valid phone number."),
  addressLine1: z.string().min(3, "Address is required."),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "City is required."),
  region: z.string().optional(),
  postalCode: z.string().min(2, "Postal code is required."),
  country: z.string().min(2, "Country is required."),
  paymentMethod: z.literal("cash_on_delivery"),
  lines: z.array(lineSchema).min(1, "Add at least one package."),
});

export type OrderState =
  | { ok: true; message: string; orderId: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> }
  | null;

export async function submitOrder(
  _prev: OrderState,
  formData: FormData,
): Promise<OrderState> {
  const linesRaw = formData.get("lines");
  let linesParsed: unknown;
  try {
    linesParsed = typeof linesRaw === "string" ? JSON.parse(linesRaw) : [];
  } catch {
    return { ok: false, message: "Invalid order lines." };
  }

  const opt = (key: string) => {
    const v = formData.get(key);
    if (typeof v !== "string") return undefined;
    const t = v.trim();
    return t === "" ? undefined : t;
  };
  const req = (key: string) => {
    const v = formData.get(key);
    return typeof v === "string" ? v.trim() : "";
  };

  const raw = {
    firstName: req("firstName"),
    lastName: req("lastName"),
    email: req("email"),
    phone: req("phone"),
    addressLine1: req("addressLine1"),
    addressLine2: opt("addressLine2"),
    city: req("city"),
    region: opt("region"),
    postalCode: req("postalCode"),
    country: req("country"),
    paymentMethod: "cash_on_delivery" as const,
    lines: linesParsed,
  };

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const d = parsed.data;

  const memberPackages = await getMemberPackages();
  const packageById = new Map<string, MemberPackage>(memberPackages.map((p) => [p.id, p]));

  const orderLinesData = [];
  for (const line of d.lines) {
    const pkg = packageById.get(line.packageId);
    if (!pkg) {
      return { ok: false, message: "Unknown package in order." };
    }
    orderLinesData.push({
      packageId: pkg.id,
      packageCode: pkg.code,
      packageName: pkg.name,
      rvPerUnit: pkg.rv,
      quantity: line.quantity,
    });
  }

  const order = await prisma.order.create({
    data: {
      paymentMethod: d.paymentMethod,
      firstName: d.firstName,
      lastName: d.lastName,
      email: d.email,
      phone: d.phone,
      addressLine1: d.addressLine1,
      addressLine2: d.addressLine2,
      city: d.city,
      region: d.region,
      postalCode: d.postalCode,
      country: d.country,
      lines: { create: orderLinesData },
    },
  });

  const lineText = orderLinesData
    .map(
      (l) =>
        `${l.packageName} (${l.packageCode}) × ${l.quantity} @ ${l.rvPerUnit} RV = ${l.rvPerUnit * l.quantity} RV`,
    )
    .join("\n");

  const body = [
    `Order ID: ${order.id}`,
    `Payment: Cash on delivery`,
    "",
    `Name: ${d.firstName} ${d.lastName}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone}`,
    "",
    `Address:`,
    d.addressLine1,
    d.addressLine2 ?? "",
    `${d.city}, ${d.region ? `${d.region}, ` : ""}${d.postalCode}`,
    d.country,
    "",
    `Lines:`,
    lineText,
  ]
    .filter(Boolean)
    .join("\n");

  const to = process.env.ORDER_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL;

  if (process.env.RESEND_API_KEY && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Precious Ndlovu Site <onboarding@resend.dev>",
        to: [to],
        subject: `New COD order ${order.id}`,
        reply_to: d.email,
        text: body,
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error("Resend order error", t);
    }
  } else {
    console.info("[order] (no RESEND) New order:", order.id, body);
  }

  return {
    ok: true,
    message: "Thank you! Your order is placed. Pay cash on delivery when your package arrives.",
    orderId: order.id,
  };
}
