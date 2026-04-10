import Image from "next/image";
import { memberPackages, mediaSlots, type MediaSlotId } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  media: Record<MediaSlotId, string>;
};

export function MemberPackages({ media }: Props) {
  return (
    <section id="packages" className="scroll-mt-20 border-t border-stone-200/60 bg-gradient-to-b from-amber-50/40 to-background py-20 dark:border-stone-800 dark:from-stone-900/40">
      <Container>
        <SectionHeading
          eyebrow="Revoobit"
          title="Choose your starting package"
          subtitle="Pick the tier that fits — then upgrade as you grow. Gold is recommended for full earning potential."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {memberPackages.map((pkg) => {
            const src = media[pkg.mediaSlot];
            const alt = mediaSlots[pkg.mediaSlot].alt;
            return (
              <article
                key={pkg.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  pkg.recommended
                    ? "border-amber-400 ring-2 ring-amber-400/30 dark:border-amber-500"
                    : "border-stone-200 hover:border-violet-300 dark:border-stone-700 dark:hover:border-violet-600/50"
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                    unoptimized
                  />
                  {pkg.recommended ? (
                    <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                      Best value
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
                    Package {pkg.code}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-stone-900 dark:text-stone-50">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-2xl font-bold text-amber-700 dark:text-amber-300">
                    {pkg.rv} <span className="text-base font-medium text-stone-500">RV</span>
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-stone-600 dark:text-stone-400">
                    {pkg.products.map((line) => (
                      <li key={line}>
                        <span className="text-violet-500">•</span> {line}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-stone-500">
                    Upgrade window:{" "}
                    <strong className="text-stone-700 dark:text-stone-300">{pkg.upgradeWindow}</strong>
                  </p>
                  <ul className="mt-4 flex-1 space-y-2 border-t border-stone-100 pt-4 text-sm text-stone-600 dark:border-stone-700/50 dark:text-stone-400">
                    {pkg.highlights.map((h) => (
                      <li key={h}>
                        <span className="text-amber-600">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-10 text-center text-sm text-stone-500 dark:text-stone-400">
          Want to understand earnings?{" "}
          <a href="#compensation" className="font-semibold text-violet-600 underline underline-offset-4 hover:text-violet-700 dark:text-violet-400">
            See the compensation overview
          </a>
        </p>
      </Container>
    </section>
  );
}
