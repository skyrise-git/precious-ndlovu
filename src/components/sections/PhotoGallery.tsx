import { Container } from "@/components/ui/Container";

const galleryImages = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
];

export function PhotoGallery() {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Gallery</p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-gray-900">Moments of Growth</h2>
        </div>
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="group mb-4 overflow-hidden rounded-xl border border-[#eadfe4] bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                Leadership Moment {i + 1}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
