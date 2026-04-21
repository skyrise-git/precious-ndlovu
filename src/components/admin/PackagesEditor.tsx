"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { saveMemberPackages } from "@/app/actions/packages";
import type { MemberPackage, PackageId } from "@/content/site";

type Props = { packages: MemberPackage[] };

function linesToText(lines: string[]): string {
  return lines.join("\n");
}

function textToLines(text: string): string[] {
  return text
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function PackagesEditor({ packages: initial }: Props) {
  const router = useRouter();
  const [packages, setPackages] = useState<MemberPackage[]>(initial);

  useEffect(() => {
    setPackages(initial);
  }, [initial]);

  const [state, formAction, pending] = useActionState(saveMemberPackages, null);

  useEffect(() => {
    if (state?.ok) {
      router.refresh();
    }
  }, [state, router]);

  function patch(id: PackageId, patch: Partial<MemberPackage>) {
    setPackages((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900"
    >
      <h2 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-50">
        Member packages
      </h2>
      <p className="mb-6 text-sm text-stone-500">
        Edit names, RV, product lines, upgrade windows, and highlights. Package ids and image slots are fixed so
        the shop and photos stay aligned. Images are set in Site Images below.
      </p>

      <input type="hidden" name="packagesJson" value={JSON.stringify(packages)} readOnly />

      <div className="space-y-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-800"
          >
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-stone-200 pb-2 dark:border-stone-600">
              <p className="font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100">
                {pkg.name}
              </p>
              <span className="text-xs text-stone-500">
                id: <code className="rounded bg-stone-200 px-1 dark:bg-stone-700">{pkg.id}</code> · slot:{" "}
                <code className="rounded bg-stone-200 px-1 dark:bg-stone-700">{pkg.mediaSlot}</code>
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">Code</label>
                <input
                  value={pkg.code}
                  onChange={(e) => patch(pkg.id, { code: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">Display name</label>
                <input
                  value={pkg.name}
                  onChange={(e) => patch(pkg.id, { name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">RV (number)</label>
                <input
                  type="number"
                  min={1}
                  value={pkg.rv}
                  onChange={(e) =>
                    patch(pkg.id, { rv: Number.parseInt(e.target.value, 10) || pkg.rv })
                  }
                  className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Upgrade window
                </label>
                <input
                  value={pkg.upgradeWindow}
                  onChange={(e) => patch(pkg.id, { upgradeWindow: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
                />
              </div>
            </div>

            <label className="mt-4 block text-sm font-medium text-stone-700 dark:text-stone-300">
              Product lines (one per line)
            </label>
            <textarea
              value={linesToText(pkg.products)}
              onChange={(e) => patch(pkg.id, { products: textToLines(e.target.value) })}
              rows={3}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
            />

            <label className="mt-4 block text-sm font-medium text-stone-700 dark:text-stone-300">
              Highlights (one per line)
            </label>
            <textarea
              value={linesToText(pkg.highlights)}
              onChange={(e) => patch(pkg.id, { highlights: textToLines(e.target.value) })}
              rows={4}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
            />

            <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300">
              <input
                type="checkbox"
                checked={pkg.recommended}
                onChange={(e) => patch(pkg.id, { recommended: e.target.checked })}
                className="rounded border-stone-300"
              />
              Mark as &quot;Best value&quot; (recommended)
            </label>
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700 disabled:opacity-50"
      >
        {pending ? "Saving…" : "Save packages"}
      </button>

      {state ? (
        <p
          className={`mt-3 text-sm ${state.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
