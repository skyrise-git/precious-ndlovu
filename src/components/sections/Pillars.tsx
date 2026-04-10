import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = ["💡", "📈", "🤝"];

export function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          eyebrow="Partnership"
          title="Become a partner today"
          subtitle="Three ways we work together — tailored to your pace and your goals."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {site.pillars.map((p, i) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-stone-200 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md dark:border-stone-700 dark:hover:border-amber-600/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-violet-100 text-lg dark:from-amber-900/30 dark:to-violet-900/30">
                {icons[i]}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">{p.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-stone-500 dark:text-stone-400">
          Ready to explore a package?{" "}
          <a href="#packages" className="font-semibold text-violet-600 underline underline-offset-4 hover:text-violet-700 dark:text-violet-400">
            See all options below
          </a>
        </p>
      </Container>
    </section>
  );
}
