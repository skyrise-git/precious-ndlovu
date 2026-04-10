import { Container } from "@/components/ui/Container";

const galleryImages = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
];

export function PhotoGallery() {
  return (
    <section className="py-16">
      <Container>
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="mb-3 overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full object-cover transition duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
