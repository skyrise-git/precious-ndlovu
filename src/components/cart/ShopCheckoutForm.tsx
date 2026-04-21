"use client";

import Link from "next/link";
import { useActionState, useEffect, useMemo } from "react";
import { submitOrder, type OrderState } from "@/app/actions/order";
import { useCart } from "@/components/cart/CartProvider";

const initial: OrderState = null;

function fieldError(
  fieldErrors: Record<string, string[]> | undefined,
  key: string,
): string | undefined {
  return fieldErrors?.[key]?.[0];
}

export function ShopCheckoutForm() {
  const { lines, clearCart } = useCart();
  const [state, formAction, pending] = useActionState(submitOrder, initial);

  const linesJson = useMemo(() => {
    const arr = Object.entries(lines)
      .filter(([, q]) => q > 0)
      .map(([packageId, quantity]) => ({ packageId, quantity }));
    return JSON.stringify(arr);
  }, [lines]);

  useEffect(() => {
    if (state?.ok) {
      clearCart();
    }
  }, [state, clearCart]);

  const hasLines = Object.keys(lines).some((id) => (lines[id] ?? 0) > 0);

  if (state?.ok) {
    return (
      <div className="rounded-2xl border border-[#eadfe4] bg-white p-8 shadow-sm">
        <p className="font-display text-xl font-bold text-[var(--accent)]">{state.message}</p>
        <p className="mt-2 text-sm text-gray-600">
          Reference: <span className="font-mono text-gray-800">{state.orderId}</span>
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full border border-[var(--accent)] px-6 py-2 text-sm font-bold uppercase tracking-wider text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6 rounded-2xl border border-[#eadfe4] bg-white p-6 shadow-sm md:p-8">
      <input type="hidden" name="lines" value={linesJson} readOnly />
      <input type="hidden" name="paymentMethod" value="cash_on_delivery" readOnly />

      <div>
        <h2 className="font-display text-xl font-bold text-gray-900">Your details</h2>
        <p className="mt-1 text-sm text-gray-500">Cash on delivery — pay when you receive your package.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
            aria-invalid={!!fieldError(state?.fieldErrors, "firstName")}
          />
          {fieldError(state?.fieldErrors, "firstName") ? (
            <p className="mt-1 text-xs text-red-600">{fieldError(state?.fieldErrors, "firstName")}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
            aria-invalid={!!fieldError(state?.fieldErrors, "lastName")}
          />
          {fieldError(state?.fieldErrors, "lastName") ? (
            <p className="mt-1 text-xs text-red-600">{fieldError(state?.fieldErrors, "lastName")}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
            aria-invalid={!!fieldError(state?.fieldErrors, "email")}
          />
          {fieldError(state?.fieldErrors, "email") ? (
            <p className="mt-1 text-xs text-red-600">{fieldError(state?.fieldErrors, "email")}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
            aria-invalid={!!fieldError(state?.fieldErrors, "phone")}
          />
          {fieldError(state?.fieldErrors, "phone") ? (
            <p className="mt-1 text-xs text-red-600">{fieldError(state?.fieldErrors, "phone")}</p>
          ) : null}
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-bold text-gray-900">Delivery address</h3>
      </div>

      <div>
        <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
          Street address
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          required
          autoComplete="street-address"
          className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
          aria-invalid={!!fieldError(state?.fieldErrors, "addressLine1")}
        />
        {fieldError(state?.fieldErrors, "addressLine1") ? (
          <p className="mt-1 text-xs text-red-600">{fieldError(state?.fieldErrors, "addressLine1")}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
          Apartment, suite, etc. (optional)
        </label>
        <input
          id="addressLine2"
          name="addressLine2"
          autoComplete="address-line2"
          className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            id="city"
            name="city"
            required
            autoComplete="address-level2"
            className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
            aria-invalid={!!fieldError(state?.fieldErrors, "city")}
          />
          {fieldError(state?.fieldErrors, "city") ? (
            <p className="mt-1 text-xs text-red-600">{fieldError(state?.fieldErrors, "city")}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700">
            Province / region (optional)
          </label>
          <input
            id="region"
            name="region"
            autoComplete="address-level1"
            className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Postal code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            required
            autoComplete="postal-code"
            className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
            aria-invalid={!!fieldError(state?.fieldErrors, "postalCode")}
          />
          {fieldError(state?.fieldErrors, "postalCode") ? (
            <p className="mt-1 text-xs text-red-600">{fieldError(state?.fieldErrors, "postalCode")}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            id="country"
            name="country"
            required
            autoComplete="country-name"
            className="mt-1 w-full rounded-lg border border-[#eadfe4] px-3 py-2 text-gray-900 outline-none ring-[var(--accent)] focus:ring-2"
            aria-invalid={!!fieldError(state?.fieldErrors, "country")}
          />
          {fieldError(state?.fieldErrors, "country") ? (
            <p className="mt-1 text-xs text-red-600">{fieldError(state?.fieldErrors, "country")}</p>
          ) : null}
        </div>
      </div>

      <div className="rounded-xl bg-[#fdf7f8] p-4">
        <p className="text-sm font-semibold text-gray-800">Payment method</p>
        <p className="mt-1 text-sm text-gray-600">Pay cash on delivery when your order arrives.</p>
      </div>

      {state?.ok === false && state.message ? (
        <p className="text-sm text-red-600" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending || !hasLines}
        className="w-full rounded-full bg-[var(--accent)] py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Placing order…" : "Place order"}
      </button>

      {!hasLines ? (
        <p className="text-center text-sm text-gray-500">Add at least one package above to checkout.</p>
      ) : null}
    </form>
  );
}
