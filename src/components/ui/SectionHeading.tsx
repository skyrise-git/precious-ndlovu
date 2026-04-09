export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-lg text-stone-600 dark:text-stone-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
