import Image from "next/image";
import { memberPackages, mediaSlots, type MediaSlotId } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = { media: Record<MediaSlotId, string> };

export function MemberPackages({ media }: Props) {
  return (
    <section id="packages" className="scroll-mt-20 py-20">
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
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900 ${
                  pkg.recommended
                    ? "border-red-500 ring-2 ring-red-500/30"
                    : "border-gray-200 hover:border-red-300 dark:border-gray-700"
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
                    <span className="absolute right-3 top-3 rounded-md bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                      Best value
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Package {pkg.code}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-gray-900 dark:text-gray-50">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-2xl font-bold text-red-600 dark:text-red-400">
                    {pkg.rv} <span className="text-base font-medium text-gray-500">RV</span>
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {pkg.products.map((line) => (
                      <li key={line}><span className="text-red-500">•</span> {line}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    Upgrade window: <strong className="text-gray-700 dark:text-gray-300">{pkg.upgradeWindow}</strong>
                  </p>
                  <ul className="mt-4 flex-1 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600 dark:border-gray-700/50 dark:text-gray-400">
                    {pkg.highlights.map((h) => (
                      <li key={h}><span className="text-red-600">✓</span> {h}</li>
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
