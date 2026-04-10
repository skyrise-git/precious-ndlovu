import { site } from "@/content/site";

export function CompensationDisclaimer() {
  return (
    <aside
      className="rounded-xl border border-red-200/60 bg-red-50/80 p-5 text-sm text-gray-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-gray-300"
      role="note"
    >
      <p className="font-black uppercase text-red-700 dark:text-red-400">
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
