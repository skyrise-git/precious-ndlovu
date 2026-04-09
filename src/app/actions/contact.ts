"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is too short."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().optional(),
  message: z.string().min(10, "Please add a bit more detail (10+ characters)."),
});

export type ContactState =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> }
  | null;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const parsed = schema.safeParse({
    name: raw.name,
    email: raw.email,
    phone: raw.phone === "" ? undefined : raw.phone,
    message: raw.message,
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      ok: false,
      message: "Please fix the fields below.",
      fieldErrors,
    };
  }

  const { name, email, phone, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL;

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
        subject: `New lead: ${name}`,
        reply_to: email,
        text: [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : "", "", message]
          .filter(Boolean)
          .join("\n"),
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error("Resend error", t);
      return { ok: false, message: "Could not send right now. Please try again later." };
    }
  } else {
    console.info("[contact] (no RESEND) New lead:", { name, email, phone, message });
  }

  return {
    ok: true,
    message: "Thank you — your message was sent. Precious will get back to you soon.",
  };
}
