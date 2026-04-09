import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

type Props = {
  imageSrc: string;
  imageAlt: string;
};

export function Hero({ imageSrc, imageAlt }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200/80 bg-gradient-to-b from-amber-50/50 to-background dark:from-stone-900/50 dark:border-stone-800">
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            {site.taglineShort}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
            {site.fullName}
          </h1>
          <p className="mt-6 text-lg text-stone-600 dark:text-stone-300">{site.heroLead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#packages"
              className="inline-flex rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
            >
              View packages
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-stone-300 bg-card px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-amber-400 dark:border-stone-600 dark:text-stone-100"
            >
              Send a message
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden rounded-2xl shadow-xl ring-1 ring-stone-200/80 dark:ring-stone-700">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
            priority
            unoptimized
          />
        </div>
      </Container>
    </section>
  );
}
