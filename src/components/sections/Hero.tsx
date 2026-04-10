import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

type Props = { imageSrc: string; imageAlt: string };

export function Hero({ imageSrc, imageAlt }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--hero-gradient-start)] via-[var(--hero-gradient-mid)] to-[var(--hero-gradient-end)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.13),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(201,164,93,0.2),transparent_42%)]" />
      <Container className="relative grid items-end gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="animate-fade-up">
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            Wealth and Health Coach
          </p>
          <h1 className="font-display text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
            {site.fullName}
          </h1>
          <p className="mt-4 text-base font-semibold uppercase tracking-[0.15em] text-[#f0d8a5] sm:text-lg">
            {site.heroSubtitle}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{site.heroLead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-black uppercase tracking-wider text-[#601f33] shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Partner with Precious
            </a>
            <a
              href="#packages"
              className="rounded-full border border-white/40 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              View Packages
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Global Speaker</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Leadership Mentor</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Crown Ambassador</span>
          </div>
        </div>
        <div className="animate-fade-up-delay-2 relative mx-auto aspect-[3/4] w-full max-w-sm md:max-w-md">
          <div className="animate-float absolute -inset-3 rounded-[2rem] border border-white/20 bg-white/5 blur-sm" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 80vw, 450px"
              priority
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
