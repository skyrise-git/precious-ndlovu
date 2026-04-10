import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Events() {
  return (
    <section id="events" className="scroll-mt-20 bg-gray-100 py-20 dark:bg-gray-900/30">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">Upcoming</p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-gray-900 dark:text-gray-50 sm:text-4xl">
            Business Events
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.events.map((ev) => (
            <article
              key={ev.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-red-200">Revoobit</p>
                <h3 className="mt-2 font-display text-xl font-bold uppercase">{ev.title}</h3>
              </div>
              <div className="px-6 py-5">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span>📅 {ev.date}</span>
                  <span>📍 {ev.location}</span>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex rounded-md bg-red-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
                >
                  More about the event
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
