"use client";

import { useFormState, useFormStatus } from "react-dom";
import { FaWhatsapp } from "react-icons/fa";
import { submitContact } from "@/app/actions/contact";
import { Container } from "@/components/ui/Container";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-[var(--accent)] py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition hover:bg-[var(--accent-hover)] disabled:opacity-60"
    >
      {pending ? "Submitting..." : "Contact me"}
    </button>
  );
}

const inputClass =
  "mt-1 w-full rounded-xl border border-[#e8dde2] bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20";
const labelClass = "block text-sm font-bold uppercase tracking-[0.08em] text-gray-700";
const radioLabel = "flex items-start gap-2 rounded-lg border border-[#ede3e8] px-3 py-2 text-sm text-gray-700";

const describesOptions = [
  "I need an opportunity to invest",
  "I want to change my financial situation",
  "I need to enter into the network marketing business",
  "I want to live a healthy lifestyle",
  "I want to belong to a supportive community",
];
const investmentOptions = ["R1,250", "R2,160", "R10,800", "R21,600 and more"];
const startOptions = ["Today", "Next week", "This month"];
const experienceOptions = ["Yes I have done it before", "No but I would love to learn"];

type LeadFormProps = { whatsappUrl?: string | null };

export function LeadForm({ whatsappUrl }: LeadFormProps) {
  const [state, formAction] = useFormState(submitContact, null);

  return (
    <section id="contact" className="scroll-mt-20 bg-[#faf5f2] py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Contact me</p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase leading-tight text-gray-900 sm:text-4xl">
              Let me help you get started
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
              Complete this intake form and I will guide your next step personally.
            </p>
            {whatsappUrl ? (
              <p className="mt-4 text-center text-sm text-gray-600">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-bold text-[#128C7E] transition hover:text-[#075E54] hover:underline"
                >
                  <FaWhatsapp className="h-5 w-5 text-[#25D366]" aria-hidden />
                  Message on WhatsApp instead
                </a>
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
              <span className="rounded-full border border-[#eadfe4] bg-white px-3 py-1">Personal details</span>
              <span className="rounded-full border border-[#eadfe4] bg-white px-3 py-1">Goals</span>
              <span className="rounded-full border border-[#eadfe4] bg-white px-3 py-1">Investment readiness</span>
            </div>
          </div>

          {state?.ok ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-8 text-center">
              <p className="text-lg font-bold text-emerald-900">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6 rounded-3xl border border-[#eadfe4] bg-white p-6 shadow-lg sm:p-10">
              {state?.ok === false ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-900">
                  {state.message}
                </p>
              ) : null}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name *</label>
                  <input id="name" name="name" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="surname" className={labelClass}>Surname *</label>
                  <input id="surname" name="surname" required className={inputClass} />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>Email *</label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required className={inputClass} />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="country" className={labelClass}>Country *</label>
                  <input id="country" name="country" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="city" className={labelClass}>Town/City *</label>
                  <input id="city" name="city" required className={inputClass} />
                </div>
              </div>

              <fieldset>
                <legend className={labelClass}>Gender *</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {["male", "female"].map((g) => (
                    <label key={g} className={radioLabel}>
                      <input type="radio" name="gender" value={g} required className="mt-1 accent-[var(--accent)]" />
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className={labelClass}>What best describes you? *</legend>
                <div className="mt-2 space-y-2">
                  {describesOptions.map((opt) => (
                    <label key={opt} className={radioLabel}>
                      <input type="radio" name="describes" value={opt} required className="mt-1 accent-[var(--accent)]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="goals" className={labelClass}>Tell me more about your goals *</label>
                <textarea id="goals" name="goals" required rows={4} className={inputClass} />
              </div>

              <fieldset>
                <legend className={labelClass}>How much are you prepared to invest? *</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {investmentOptions.map((opt) => (
                    <label key={opt} className={radioLabel}>
                      <input type="radio" name="investment" value={opt} required className="mt-1 accent-[var(--accent)]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className={labelClass}>When do you want to join? *</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {startOptions.map((opt) => (
                    <label key={opt} className={radioLabel}>
                      <input type="radio" name="startWhen" value={opt} required className="mt-1 accent-[var(--accent)]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className={labelClass}>Do you have network marketing experience? *</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {experienceOptions.map((opt) => (
                    <label key={opt} className={radioLabel}>
                      <input type="radio" name="experience" value={opt} required className="mt-1 accent-[var(--accent)]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <SubmitButton />
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
