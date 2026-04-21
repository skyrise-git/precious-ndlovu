import Image from "next/image";
import { mediaSlots, type MediaSlotId, type MemberPackage } from "@/content/site";
import { BuyNowButton } from "@/components/cart/BuyNowButton";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = { media: Record<MediaSlotId, string>; packages: MemberPackage[] };

export function MemberPackages({ media, packages }: Props) {
  return (
    <section id="packages" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          eyebrow="Revoobit"
          title="Choose your starting package"
          subtitle="Pick the tier that fits and upgrade as you grow. Gold is recommended for full earning potential."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, index) => {
            const src = media[pkg.mediaSlot];
            const alt = mediaSlots[pkg.mediaSlot].alt;
            return (
              <article
                key={pkg.id}
                className={`group hover-lift animate-fade-up flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${
                  pkg.recommended ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/20" : "border-[#eadfe4]"
                }`}
                style={{ animationDelay: `${Math.min(index * 70, 280)}ms` }}
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
                    <span className="absolute right-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Best Value
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Package {pkg.code}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-gray-900">{pkg.name}</h3>
                  <p className="mt-2 text-2xl font-bold text-[var(--accent)]">
                    {pkg.rv} <span className="text-base font-medium text-gray-500">RV</span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-gray-600">
                    {pkg.products.map((line) => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    Upgrade window: <strong className="text-gray-700">{pkg.upgradeWindow}</strong>
                  </p>
                  <ul className="mt-4 flex-1 space-y-2.5 border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-600">
                    {pkg.highlights.map((h) => (
                      <li key={h}>✓ {h}</li>
                    ))}
                  </ul>
                  <BuyNowButton packageId={pkg.id} />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
