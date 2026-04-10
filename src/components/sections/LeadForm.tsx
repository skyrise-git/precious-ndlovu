"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact } from "@/app/actions/contact";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-red-600 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-red-700 disabled:opacity-60 sm:w-auto sm:px-12"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100";

export function LeadForm() {
  const [state, formAction] = useFormState(submitContact, null);

  return (
    <section id="contact" className="scroll-mt-20 bg-gray-50 py-20 dark:bg-gray-900/30">
      <Container>
        <div className="mx-auto max-w-xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-red-600">
            Get in touch
          </p>
          <h2 className="font-display text-3xl font-black uppercase text-gray-900 dark:text-gray-50">
            {site.contact.title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{site.contact.subtitle}</p>

          {state?.ok ? (
            <p className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 font-medium text-emerald-900" role="status">
              {state.message}
            </p>
          ) : (
            <form action={formAction} className="mt-10 space-y-5">
              {state?.ok === false ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-900">
                  {state.message}
                </p>
              ) : null}

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
                <input id="name" name="name" required className={inputClass} autoComplete="name" />
                {state?.fieldErrors?.name?.[0] ? <p className="mt-1 text-sm text-red-600">{state.fieldErrors.name[0]}</p> : null}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
                <input id="email" name="email" type="email" required className={inputClass} autoComplete="email" />
                {state?.fieldErrors?.email?.[0] ? <p className="mt-1 text-sm text-red-600">{state.fieldErrors.email[0]}</p> : null}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Phone <span className="text-gray-400">(optional)</span>
                </label>
                <input id="phone" name="phone" type="tel" className={inputClass} autoComplete="tel" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" required rows={5} className={inputClass} placeholder="What are you hoping to achieve?" />
                {state?.fieldErrors?.message?.[0] ? <p className="mt-1 text-sm text-red-600">{state.fieldErrors.message[0]}</p> : null}
              </div>

              <SubmitButton />
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
