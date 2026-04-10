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
    <div className="mb-10 max-w-3xl text-center mx-auto">
      {eyebrow ? (
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
