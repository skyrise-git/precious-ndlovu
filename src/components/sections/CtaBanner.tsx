import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section className="border-y border-[#e7dde2] bg-[#fff9f6] py-5">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-base font-bold uppercase tracking-wide text-[#5d3342] sm:text-lg">
          {site.ctaBanner.text}
        </p>
        <a
          href={site.ctaBanner.buttonHref}
          className="inline-flex rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[var(--accent-hover)]"
        >
          {site.ctaBanner.buttonLabel}
        </a>
      </Container>
    </section>
  );
}
