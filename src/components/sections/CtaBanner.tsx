import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-6">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
          {site.ctaBanner.text}
        </p>
        <a
          href={site.ctaBanner.buttonHref}
          className="inline-flex whitespace-nowrap rounded-md border-2 border-white bg-transparent px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-red-700"
        >
          {site.ctaBanner.buttonLabel}
        </a>
      </Container>
    </section>
  );
}
