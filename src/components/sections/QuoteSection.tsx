import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function QuoteSection() {
  return (
    <section className="border-y border-gray-200/60 bg-white py-16 dark:border-gray-700 dark:bg-gray-900">
      <Container>
        <blockquote className="relative mx-auto max-w-3xl text-center">
          <span
            className="font-display text-7xl leading-none text-red-200 dark:text-red-900/40"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="-mt-10 text-xl font-medium italic leading-relaxed text-gray-700 dark:text-gray-200">
            {site.quote.text}
          </p>
          <footer className="mt-6 text-sm font-black uppercase tracking-widest text-red-600 dark:text-red-400">
            — {site.quote.attribution}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
