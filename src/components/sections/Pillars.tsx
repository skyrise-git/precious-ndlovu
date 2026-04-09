import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          eyebrow="Partnership"
          title="Become a partner today"
          subtitle="Three ways we work together—tailored to your pace and your goals."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {site.pillars.map((p, i) => (
            <article
              key={p.title}
              className="rounded-2xl border border-stone-200 bg-card p-8 shadow-sm transition hover:border-amber-300/80 dark:border-stone-700 dark:hover:border-amber-700/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
                {p.title}
              </h3>
              <p className="mt-3 text-stone-600 dark:text-stone-400">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
