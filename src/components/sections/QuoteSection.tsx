import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function QuoteSection() {
  return (
    <section className="border-y border-stone-200/60 bg-gradient-to-r from-amber-50/60 via-card to-violet-50/40 py-16 dark:border-stone-800 dark:from-stone-900/50 dark:via-card dark:to-violet-950/20">
      <Container>
        <blockquote className="relative mx-auto max-w-3xl text-center">
          <span
            className="font-display text-7xl leading-none text-amber-300/60 dark:text-amber-800/40"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="-mt-10 text-xl font-medium italic leading-relaxed text-stone-700 dark:text-stone-200">
            {site.quote.text}
          </p>
          <footer className="mt-6 text-sm font-bold uppercase tracking-widest text-amber-800 dark:text-amber-300">
            — {site.quote.attribution}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
