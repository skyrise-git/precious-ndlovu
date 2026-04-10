"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is too short."),
  surname: z.string().min(2, "Surname is too short."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(5, "Enter a valid phone number."),
  country: z.string().min(2, "Enter your country."),
  city: z.string().min(2, "Enter your town or city."),
  gender: z.enum(["male", "female"], { message: "Please select your gender." }),
  describes: z.string().min(1, "Please select what best describes you."),
  goals: z.string().min(10, "Please tell us more about your goals (10+ characters)."),
  investment: z.string().min(1, "Please select your investment level."),
  startWhen: z.string().min(1, "Please select when you want to start."),
  experience: z.string().min(1, "Please select your experience level."),
});

export type ContactState =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> }
  | null;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = Object.fromEntries(formData.entries());

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const d = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL;

  const body = [
    `Name: ${d.name} ${d.surname}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone}`,
    `Location: ${d.city}, ${d.country}`,
    `Gender: ${d.gender}`,
    `Describes: ${d.describes}`,
    `Investment level: ${d.investment}`,
    `Start: ${d.startWhen}`,
    `Experience: ${d.experience}`,
    "",
    `Goals: ${d.goals}`,
  ].join("\n");

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
        subject: `New partner lead: ${d.name} ${d.surname}`,
        reply_to: d.email,
        text: body,
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error("Resend error", t);
      return { ok: false, message: "Could not send right now. Please try again later." };
    }
  } else {
    console.info("[contact] (no RESEND) New lead:", d);
  }

  return {
    ok: true,
    message: "Thank you! Precious will review your details and be in touch soon. 🎉",
  };
}
