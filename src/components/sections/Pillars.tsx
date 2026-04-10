import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-20 bg-[#fef9f7] py-20">
      <Container>
        <SectionHeading
          eyebrow="Become my partner today"
          title="Unleash your wealth and seize the ultimate business opportunity"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {site.pillars.map((p, i) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-[#eadfe4] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f7e9ed] text-xl text-[var(--accent)]">
                {["💡", "📈", "🤝"][i]}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase leading-snug text-gray-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
