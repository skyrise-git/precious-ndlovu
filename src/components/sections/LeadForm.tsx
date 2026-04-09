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
      className="w-full rounded-full bg-amber-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 disabled:opacity-60 sm:w-auto sm:px-10"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export function LeadForm() {
  const [state, formAction] = useFormState(submitContact, null);

  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <Container>
        <div className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-50">
            {site.contact.title}
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400">{site.contact.subtitle}</p>

          {state?.ok ? (
            <p
              className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200"
              role="status"
            >
              {state.message}
            </p>
          ) : (
            <form action={formAction} className="mt-10 space-y-6">
              {state?.ok === false ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
                  {state.message}
                </p>
              ) : null}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-stone-300 bg-card px-4 py-2.5 text-stone-900 shadow-sm outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
                  autoComplete="name"
                />
                {state?.fieldErrors?.name?.[0] ? (
                  <p className="mt-1 text-sm text-red-600">{state.fieldErrors.name[0]}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-stone-300 bg-card px-4 py-2.5 text-stone-900 shadow-sm outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
                  autoComplete="email"
                />
                {state?.fieldErrors?.email?.[0] ? (
                  <p className="mt-1 text-sm text-red-600">{state.fieldErrors.email[0]}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Phone <span className="text-stone-400">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-stone-300 bg-card px-4 py-2.5 text-stone-900 shadow-sm outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
                  autoComplete="tel"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-stone-300 bg-card px-4 py-2.5 text-stone-900 shadow-sm outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
                  placeholder="What are you hoping to achieve?"
                />
                {state?.fieldErrors?.message?.[0] ? (
                  <p className="mt-1 text-sm text-red-600">{state.fieldErrors.message[0]}</p>
                ) : null}
              </div>

              <SubmitButton />
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
