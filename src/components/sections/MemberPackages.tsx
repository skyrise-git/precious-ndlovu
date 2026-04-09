import Image from "next/image";
import { site, memberPackages, mediaSlots, type MediaSlotId } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  media: Record<MediaSlotId, string>;
};

export function MemberPackages({ media }: Props) {
  return (
    <section id="packages" className="scroll-mt-20 border-t border-stone-200 bg-stone-50/50 py-20 dark:border-stone-800 dark:bg-stone-950/40">
      <Container>
        <SectionHeading
          eyebrow="Revoobit"
          title={site.packagesIntro.title}
          subtitle={site.packagesIntro.subtitle}
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {memberPackages.map((pkg) => {
            const src = media[pkg.mediaSlot];
            const alt = mediaSlots[pkg.mediaSlot].alt;
            return (
              <article
                key={pkg.id}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition ${
                  pkg.recommended
                    ? "border-amber-400 ring-2 ring-amber-400/30 dark:border-amber-500"
                    : "border-stone-200 dark:border-stone-700"
                }`}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    unoptimized
                  />
                  {pkg.recommended ? (
                    <span className="absolute right-3 top-3 rounded-full bg-amber-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Recommended
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    Package {pkg.code}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-stone-900 dark:text-stone-50">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-amber-800 dark:text-amber-300">
                    {pkg.rv} RV
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-stone-600 dark:text-stone-400">
                    {pkg.products.map((line) => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-stone-500">
                    Upgrade window: <strong className="text-stone-700 dark:text-stone-300">{pkg.upgradeWindow}</strong>
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-stone-200 pt-4 text-sm text-stone-600 dark:border-stone-700 dark:text-stone-400">
                    {pkg.highlights.map((h) => (
                      <li key={h}>✓ {h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
