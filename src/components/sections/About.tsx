import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

type Props = {
  imageSrc: string;
  imageAlt: string;
};

export function About({ imageSrc, imageAlt }: Props) {
  return (
    <section id="about" className="scroll-mt-20 bg-accent-soft/50 py-20 dark:bg-stone-900/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200/60 dark:ring-stone-700">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              About
            </p>
            <h2 className="font-display text-3xl font-bold text-stone-900 dark:text-stone-50">
              {site.aboutTitle}
            </h2>
            <p className="mt-2 text-lg font-medium text-amber-700 dark:text-amber-300">
              {site.aboutSubtitle}
            </p>
            <div className="prose-compact mt-6 space-y-4">
              {site.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Leadership", "Mentorship", "Community", "Wellness"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-violet-800/50 dark:bg-violet-950/40 dark:text-violet-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
