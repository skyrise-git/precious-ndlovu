import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

type Props = {
  imageSrc: string;
  imageAlt: string;
};

export function Hero({ imageSrc, imageAlt }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200/60 bg-gradient-to-br from-amber-50 via-white to-violet-50/40 dark:from-stone-900 dark:via-stone-950 dark:to-violet-950/20 dark:border-stone-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(180,83,9,0.08),transparent)]" />
      <Container className="relative grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-800 dark:border-amber-800/40 dark:bg-amber-950/40 dark:text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            {site.taglineShort}
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-50">
            {site.fullName}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            {site.heroLead}
          </p>
          <p className="mt-3 text-sm font-medium text-violet-700 dark:text-violet-400">
            Trusted by a growing community of partners across multiple countries.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#packages"
              className="inline-flex rounded-full bg-amber-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/20 transition hover:bg-amber-700 hover:shadow-amber-700/25 active:scale-[0.98]"
            >
              Explore packages
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-stone-800 shadow-sm transition hover:border-violet-400 hover:text-violet-700 dark:border-stone-600 dark:bg-stone-900/50 dark:text-stone-100 dark:hover:border-violet-500"
            >
              Speak with Precious
            </a>
          </div>
        </div>
        <div className="animate-fade-up-delay-2 relative aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden rounded-2xl shadow-2xl ring-1 ring-stone-200/80 dark:ring-stone-700">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-400/20 via-transparent to-violet-400/20 blur-sm" />
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="relative rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
            priority
            unoptimized
          />
        </div>
      </Container>
    </section>
  );
}
