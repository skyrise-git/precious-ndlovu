import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

type Props = { imageSrc: string; imageAlt: string };

export function Hero({ imageSrc, imageAlt }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_80%_60%,rgba(255,200,150,0.12),transparent)]" />
      <Container className="relative grid items-end gap-8 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="animate-fade-up z-10">
          <h1 className="font-display text-5xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
            {site.fullName}
          </h1>
          <p className="mt-3 text-lg font-bold uppercase tracking-widest text-yellow-300 sm:text-xl">
            {site.heroSubtitle}
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-red-100">
            {site.heroLead}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-md bg-white px-8 py-3.5 text-sm font-black uppercase tracking-wider text-red-700 shadow-lg transition hover:bg-yellow-50 hover:shadow-xl active:scale-[0.98]"
          >
            Partner with Precious
          </a>
        </div>
        <div className="animate-fade-up-delay-2 relative mx-auto aspect-[3/4] w-full max-w-sm md:max-w-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top drop-shadow-2xl"
            sizes="(max-width: 768px) 80vw, 450px"
            priority
            unoptimized
          />
        </div>
      </Container>
    </section>
  );
}
