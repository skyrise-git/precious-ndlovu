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
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
