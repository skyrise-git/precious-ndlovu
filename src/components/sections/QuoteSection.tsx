import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function QuoteSection() {
  return (
    <section className="border-y border-stone-200 bg-card py-16 dark:border-stone-800">
      <Container>
        <blockquote className="relative mx-auto max-w-3xl text-center">
          <span
            className="font-display text-6xl leading-none text-amber-200 dark:text-amber-900/40"
            aria-hidden
          >
            “
          </span>
          <p className="-mt-8 text-xl font-medium leading-relaxed text-stone-800 dark:text-stone-100">
            {site.quote.text}
          </p>
          <footer className="mt-6 text-sm font-semibold text-amber-800 dark:text-amber-300">
            — {site.quote.attribution}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
