import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

type Props = { imageSrc: string; imageAlt: string };

export function About({ imageSrc, imageAlt }: Props) {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-[#e9dfe4] bg-white shadow-xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 80vw, 400px"
              unoptimized
            />
          </div>
          <div className="animate-fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Meet your mentor</p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase leading-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              {site.aboutTitle}
            </h2>
            <p className="mt-3 text-base font-semibold text-[#7a4254] sm:text-lg">{site.aboutSubtitle}</p>
            <div className="prose-compact mt-6 space-y-4">
              {site.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[var(--accent-hover)]"
            >
              Work with Precious
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
