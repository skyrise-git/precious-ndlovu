import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-red-800 to-red-900 py-20 text-white">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">Testimonials</p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase sm:text-4xl">
            What other leaders say about<br />Precious Ndlovu
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-white p-6 text-gray-800 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="mb-3 flex gap-0.5 text-yellow-500">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-600">&ldquo;{t.text}&rdquo;</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
