"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact } from "@/app/actions/contact";
import { Container } from "@/components/ui/Container";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-red-600 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition hover:bg-red-700 disabled:opacity-60"
    >
      {pending ? "Submitting…" : "Yes, I'm ready to join 💰"}
    </button>
  );
}

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100";

const labelClass = "block text-sm font-bold text-gray-700 dark:text-gray-300";

const describesOptions = [
  "I need an opportunity to invest",
  "I want to change my financial situation",
  "I need to enter into the network marketing business",
  "I want to live a healthy lifestyle",
  "I want to belong to a supportive community",
];

const investmentOptions = [
  "R1,250",
  "R2,160",
  "R10,800",
  "R21,600 and more",
];

const startOptions = ["Today", "Next week", "This month"];

const experienceOptions = [
  "Yes I have done it before",
  "No but I would love to learn",
];

export function LeadForm() {
  const [state, formAction] = useFormState(submitContact, null);

  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Get started
            </p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase text-gray-900 dark:text-gray-50">
              Let me help you get started!
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Please tell me more about yourself so I can help you get started. Fill out the form:
            </p>
          </div>

          {state?.ok ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-8 text-center">
              <p className="text-lg font-bold text-emerald-900">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-10 dark:border-gray-700 dark:bg-gray-900">
              {state?.ok === false ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-900">
                  {state.message}
                </p>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name *</label>
                  <input id="name" name="name" required placeholder="Name" className={inputClass} autoComplete="given-name" />
                  {state?.fieldErrors?.name?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.name[0]}</p>}
                </div>
                <div>
                  <label htmlFor="surname" className={labelClass}>Surname *</label>
                  <input id="surname" name="surname" required placeholder="Surname" className={inputClass} autoComplete="family-name" />
                  {state?.fieldErrors?.surname?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.surname[0]}</p>}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>Email *</label>
                  <input id="email" name="email" type="email" required placeholder="Email" className={inputClass} autoComplete="email" />
                  {state?.fieldErrors?.email?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.email[0]}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="Phone" className={inputClass} autoComplete="tel" />
                  {state?.fieldErrors?.phone?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.phone[0]}</p>}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="country" className={labelClass}>Country *</label>
                  <input id="country" name="country" required placeholder="Country" className={inputClass} autoComplete="country-name" />
                  {state?.fieldErrors?.country?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.country[0]}</p>}
                </div>
                <div>
                  <label htmlFor="city" className={labelClass}>Town/City *</label>
                  <input id="city" name="city" required placeholder="Town/City" className={inputClass} autoComplete="address-level2" />
                  {state?.fieldErrors?.city?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.city[0]}</p>}
                </div>
              </div>

              <fieldset>
                <legend className={labelClass}>Gender *</legend>
                <div className="mt-2 flex gap-6">
                  {["male", "female"].map((g) => (
                    <label key={g} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input type="radio" name="gender" value={g} required className="accent-red-600" />
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </label>
                  ))}
                </div>
                {state?.fieldErrors?.gender?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.gender[0]}</p>}
              </fieldset>

              <fieldset>
                <legend className={labelClass}>What best describes you? *</legend>
                <div className="mt-2 space-y-2">
                  {describesOptions.map((opt) => (
                    <label key={opt} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input type="radio" name="describes" value={opt} required className="mt-0.5 accent-red-600" />
                      {opt}
                    </label>
                  ))}
                </div>
                {state?.fieldErrors?.describes?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.describes[0]}</p>}
              </fieldset>

              <div>
                <label htmlFor="goals" className={labelClass}>
                  Tell me more about your goals in life. What do you want to achieve? *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  className={inputClass}
                  placeholder="Share your dreams and goals…"
                />
                {state?.fieldErrors?.goals?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.goals[0]}</p>}
              </div>

              <fieldset>
                <legend className={labelClass}>How much are you prepared to invest in order to achieve your dreams? *</legend>
                <div className="mt-2 flex flex-wrap gap-4">
                  {investmentOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input type="radio" name="investment" value={opt} required className="accent-red-600" />
                      {opt}
                    </label>
                  ))}
                </div>
                {state?.fieldErrors?.investment?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.investment[0]}</p>}
              </fieldset>

              <fieldset>
                <legend className={labelClass}>When do you want to pay and join my business? *</legend>
                <div className="mt-2 flex flex-wrap gap-4">
                  {startOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input type="radio" name="startWhen" value={opt} required className="accent-red-600" />
                      {opt}
                    </label>
                  ))}
                </div>
                {state?.fieldErrors?.startWhen?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.startWhen[0]}</p>}
              </fieldset>

              <fieldset>
                <legend className={labelClass}>Do you have experience in Network Marketing Business? *</legend>
                <div className="mt-2 flex flex-wrap gap-4">
                  {experienceOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input type="radio" name="experience" value={opt} required className="accent-red-600" />
                      {opt}
                    </label>
                  ))}
                </div>
                {state?.fieldErrors?.experience?.[0] && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.experience[0]}</p>}
              </fieldset>

              <SubmitButton />
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
