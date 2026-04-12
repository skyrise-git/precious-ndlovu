import Image from "next/image";
import { mediaSlots, type MediaSlotId } from "@/content/site";
import { Container } from "@/components/ui/Container";

const gallerySlots: MediaSlotId[] = [
  "aboutGallery1",
  "aboutGallery2",
  "aboutGallery3",
  "aboutGallery4",
  "aboutGallery5",
  "aboutGallery6",
];

type Props = { media: Record<MediaSlotId, string> };

export function AboutGallery({ media }: Props) {
  return (
    <section className="bg-[#fef9f7] py-16">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Life &amp; Legacy
          </p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase leading-tight text-gray-900 sm:text-4xl">
            Family, Achievements &amp; Lifestyle
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
            A glimpse into the life Precious has built — family, milestones, and the rewards of
            dedication.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallerySlots.map((slotId) => (
            <div
              key={slotId}
              className="hover-lift group overflow-hidden rounded-2xl border border-[#eadfe4] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={media[slotId]}
                  alt={mediaSlots[slotId].alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              </div>
              <p className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                {mediaSlots[slotId].alt}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
