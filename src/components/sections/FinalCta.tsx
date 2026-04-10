import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  const c = site.finalCta;
  return (
    <section className="bg-gradient-to-br from-[#2d1822] via-[#4c1f30] to-[#7b2538] py-24 text-white">
      <Container className="text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#e6cc8d]">Your next step</p>
        <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">{c.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{c.body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={c.primaryHref}
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-black uppercase tracking-wider text-[#602437] shadow-lg transition hover:bg-[#f9e9cc]"
          >
            {c.primaryLabel}
          </a>
          <a
            href={c.secondaryHref}
            className="inline-flex rounded-full border border-white/40 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
          >
            {c.secondaryLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
