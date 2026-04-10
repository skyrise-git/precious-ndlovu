import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { MobileCta } from "@/components/MobileCta";
import { About } from "@/components/sections/About";
import { Compensation } from "@/components/sections/Compensation";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Events } from "@/components/sections/Events";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { LeadForm } from "@/components/sections/LeadForm";
import { MemberPackages } from "@/components/sections/MemberPackages";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { Pillars } from "@/components/sections/Pillars";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { mediaSlots } from "@/content/site";
import { resolveMediaMap } from "@/lib/media";

export const dynamic = "force-dynamic";

export default async function Home() {
  const media = await resolveMediaMap();

  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero imageSrc={media.personHero} imageAlt={mediaSlots.personHero.alt} />
        <CtaBanner />
        <About imageSrc={media.personAbout} imageAlt={mediaSlots.personAbout.alt} />
        <QuoteSection />
        <Pillars />
        <MemberPackages media={media} />
        <Compensation />
        <PhotoGallery />
        <Testimonials />
        <Events />
        <FinalCta />
        <LeadForm />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
