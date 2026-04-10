import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  const c = site.finalCta;
  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-gradient-to-br from-amber-600 via-amber-700 to-violet-800 py-24 text-white dark:border-stone-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.15),transparent_70%)]" />
      <Container className="relative text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-200">
          Your next step
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{c.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100/90">{c.body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={c.primaryHref}
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-bold text-amber-900 shadow-lg transition hover:bg-amber-50 hover:shadow-xl active:scale-[0.98]"
          >
            {c.primaryLabel}
          </a>
          <a
            href={c.secondaryHref}
            className="inline-flex rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {c.secondaryLabel}
          </a>
        </div>
        <p className="mt-8 text-sm text-amber-200/80">
          Prefer to talk first?{" "}
          <a href="#contact" className="font-semibold underline underline-offset-4 hover:text-white">
            Use the form below
          </a>
        </p>
      </Container>
    </section>
  );
}
