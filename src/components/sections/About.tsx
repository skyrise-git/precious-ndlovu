import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

type Props = { imageSrc: string; imageAlt: string };

export function About({ imageSrc, imageAlt }: Props) {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl shadow-xl ring-4 ring-red-100 dark:ring-red-900/30">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 80vw, 400px"
              unoptimized
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-black uppercase text-gray-900 dark:text-gray-50 sm:text-4xl">
              {site.aboutTitle}
            </h2>
            <p className="mt-2 text-lg font-semibold italic text-red-600 dark:text-red-400">
              {site.aboutSubtitle}
            </p>
            <div className="prose-compact mt-6 space-y-4">
              {site.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {Object.entries(site.socialLinks).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white transition hover:bg-red-700"
                  aria-label={name}
                >
                  {name[0].toUpperCase()}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-md bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
            >
              Partner with Precious
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
