import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-[#25161d] to-[#341d27] py-20 text-white">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e6cc8d]">Testimonials</p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase sm:text-4xl">
            What leaders say about Precious
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.testimonials.map((t, index) => (
            <article
              key={t.name}
              className="hover-lift animate-fade-up rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
              style={{ animationDelay: `${Math.min(index * 80, 320)}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-white/70">{t.role}</p>
                </div>
              </div>
              <div className="mb-3 text-[#f0d8a5]">★★★★★</div>
              <p className="text-sm leading-relaxed text-white/85">&ldquo;{t.text}&rdquo;</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
