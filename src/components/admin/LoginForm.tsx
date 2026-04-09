"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginAction, type LoginFormState } from "@/app/actions/auth";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-amber-600 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
    >
      {pending ? "Signing in…" : "Sign in"}
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState<LoginFormState, FormData>(loginAction, null);

  return (
    <form action={formAction} className="space-y-4">
      {state?.ok === false ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
          {state.message}
        </p>
      ) : null}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
        />
      </div>
      <Submit />
    </form>
  );
}
