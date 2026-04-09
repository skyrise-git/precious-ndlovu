import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  const c = site.finalCta;
  return (
    <section className="border-t border-stone-200 bg-gradient-to-br from-amber-600 to-amber-800 py-20 text-white dark:border-stone-800">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{c.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">{c.body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={c.primaryHref}
            className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-amber-900 shadow-sm transition hover:bg-amber-50"
          >
            {c.primaryLabel}
          </a>
          <a
            href={c.secondaryHref}
            className="inline-flex rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {c.secondaryLabel}
          </a>
        </div>
        <p className="mt-8 text-sm text-amber-200/90">
          Prefer to talk first?{" "}
          <a href="#contact" className="font-semibold underline underline-offset-4">
            Use the form below
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
