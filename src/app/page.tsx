import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Compensation } from "@/components/sections/Compensation";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { LeadForm } from "@/components/sections/LeadForm";
import { MemberPackages } from "@/components/sections/MemberPackages";
import { Pillars } from "@/components/sections/Pillars";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { mediaSlots } from "@/content/site";
import { resolveMediaMap } from "@/lib/media";

export const dynamic = "force-dynamic";

export default async function Home() {
  const media = await resolveMediaMap();

  return (
    <>
      <Header />
      <main>
        <Hero imageSrc={media.personHero} imageAlt={mediaSlots.personHero.alt} />
        <About imageSrc={media.personAbout} imageAlt={mediaSlots.personAbout.alt} />
        <QuoteSection />
        <Pillars />
        <MemberPackages media={media} />
        <Compensation />
        <FinalCta />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
