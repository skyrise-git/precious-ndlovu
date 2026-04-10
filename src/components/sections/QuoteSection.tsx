import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function QuoteSection() {
  return (
    <section className="border-y border-[#e5dde2] bg-white py-16 dark:border-gray-700 dark:bg-gray-900">
      <Container>
        <blockquote className="relative mx-auto max-w-3xl text-center">
          <span className="font-display text-7xl leading-none text-[#ecd4db]" aria-hidden>
            &ldquo;
          </span>
          <p className="-mt-9 text-lg font-medium italic leading-relaxed text-gray-700 dark:text-gray-200 sm:text-xl">
            {site.quote.text}
          </p>
          <footer className="mt-6 text-sm font-black uppercase tracking-widest text-[var(--accent)]">
            — {site.quote.attribution}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
