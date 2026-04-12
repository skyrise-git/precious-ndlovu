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
  const aspectClasses = [
    "aspect-[4/5]",
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-[5/4]",
    "aspect-[3/4]",
    "aspect-[4/3]",
  ] as const;

  return (
    <section id="about-gallery" className="scroll-mt-20 bg-[#fef9f7] py-16">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Life &amp; Journey
          </p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase leading-tight text-gray-900 sm:text-4xl">
            The Foundation Behind the Work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
            A snapshot of life beyond the desk, sharing the people, places, and moments that
            inspire Precious every day.
          </p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallerySlots.map((slotId, index) => (
            <div
              key={slotId}
              className="hover-lift group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-[#eadfe4] bg-white shadow-sm"
            >
              <div className={`relative w-full overflow-hidden ${aspectClasses[index]}`}>
                <Image
                  src={media[slotId]}
                  alt={mediaSlots[slotId].alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
