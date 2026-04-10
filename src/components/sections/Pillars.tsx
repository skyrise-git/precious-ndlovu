import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-20 bg-gray-50 py-20 dark:bg-gray-900/30">
      <Container>
        <SectionHeading
          eyebrow="Become my partner today"
          title="Unleash your wealth and seize the ultimate business opportunity"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {site.pillars.map((p, i) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:border-red-700"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <span className="text-2xl font-black text-red-600">
                  {["💡", "📈", "🤝"][i]}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-gray-900 dark:text-gray-50">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
