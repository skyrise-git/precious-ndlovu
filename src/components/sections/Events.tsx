import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Events() {
  return (
    <section id="events" className="scroll-mt-20 bg-white py-20">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Upcoming</p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-gray-900 sm:text-4xl">
            Business Events
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.events.map((ev, index) => (
            <article
              key={ev.title}
              className="hover-lift animate-fade-up group overflow-hidden rounded-2xl border border-[#eadfe4] bg-[#fffaf8] shadow-sm transition hover:shadow-lg"
              style={{ animationDelay: `${Math.min(index * 90, 270)}ms` }}
            >
              <div className="bg-gradient-to-r from-[#63283c] to-[#9f1f2f] px-6 py-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-white/75">Revoobit</p>
                <h3 className="mt-2 font-display text-xl font-bold uppercase">{ev.title}</h3>
              </div>
              <div className="px-6 py-5">
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Date: {ev.date}</p>
                  <p>Location: {ev.location}</p>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex rounded-full bg-[var(--accent)] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[var(--accent-hover)]"
                >
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
