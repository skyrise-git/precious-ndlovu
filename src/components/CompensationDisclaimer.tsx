import { site } from "@/content/site";

export function CompensationDisclaimer() {
  return (
    <aside
      className="rounded-xl border border-amber-200/60 bg-gradient-to-r from-amber-50/90 to-amber-50/50 p-5 text-sm text-stone-700 dark:border-amber-900/40 dark:from-amber-950/30 dark:to-transparent dark:text-stone-300"
      role="note"
    >
      <p className="font-bold text-amber-900 dark:text-amber-200">
        Important — for education only
      </p>
      <p className="mt-2 leading-relaxed">
        {site.disclaimerShort} Figures and percentages are summaries and must be
        verified against official Revoobit compensation materials. Past results do
        not guarantee future results.
      </p>
    </aside>
  );
}
