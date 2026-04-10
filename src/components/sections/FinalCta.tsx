import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  const c = site.finalCta;
  return (
    <section className="bg-gradient-to-br from-red-700 via-red-800 to-red-900 py-24 text-white">
      <Container className="text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-yellow-300">
          Your next step
        </p>
        <h2 className="font-display text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
          {c.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">{c.body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={c.primaryHref}
            className="inline-flex rounded-md bg-white px-8 py-3.5 text-sm font-black uppercase tracking-wider text-red-700 shadow-lg transition hover:bg-yellow-50 hover:shadow-xl active:scale-[0.98]"
          >
            {c.primaryLabel}
          </a>
          <a
            href={c.secondaryHref}
            className="inline-flex rounded-md border-2 border-white/40 px-8 py-3.5 text-sm font-bold uppercase text-white transition hover:bg-white/10"
          >
            {c.secondaryLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
