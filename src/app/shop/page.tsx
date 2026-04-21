import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { MobileCta } from "@/components/MobileCta";
import { ShopPageClient } from "@/app/shop/ShopPageClient";
import { site } from "@/content/site";
import { getMemberPackages } from "@/lib/packages";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shop",
  description: `Order Revoobit member packages — ${site.fullName}`,
};

export default async function ShopPage() {
  const settings = await getSiteSettings();
  const packages = await getMemberPackages();

  return (
    <>
      <TopBar settings={settings} />
      <Header />
      <main className="pb-16 md:pb-0">
        <ShopPageClient packages={packages} />
      </main>
      <Footer settings={settings} />
      <MobileCta />
    </>
  );
}
