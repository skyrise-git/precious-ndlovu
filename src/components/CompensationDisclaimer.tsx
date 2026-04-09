import { site } from "@/content/site";

export function CompensationDisclaimer() {
  return (
    <aside
      className="rounded-xl border border-amber-200/80 bg-amber-50/90 p-4 text-sm text-stone-800 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-stone-200"
      role="note"
    >
      <p className="font-semibold text-amber-900 dark:text-amber-200">
        Important (education only)
      </p>
      <p className="mt-2">
        {site.disclaimerShort} Figures and percentages are summaries and must be
        verified against official Revoobit compensation materials. Past results do
        not guarantee future results.
      </p>
    </aside>
  );
}
