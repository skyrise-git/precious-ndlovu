import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

type Props = {
  imageSrc: string;
  imageAlt: string;
};

export function About({ imageSrc, imageAlt }: Props) {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200/80 dark:ring-stone-700">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-50">
              {site.aboutTitle}
            </h2>
            <p className="mt-2 text-lg font-medium text-amber-800 dark:text-amber-300">
              {site.aboutSubtitle}
            </p>
            <div className="prose-compact mt-6 space-y-4">
              {site.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
