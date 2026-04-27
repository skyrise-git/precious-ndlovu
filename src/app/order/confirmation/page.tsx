import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FiCheck, FiPhone, FiPackage, FiTruck } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { MobileCta } from "@/components/MobileCta";
import { OrderConfirmationClearCart } from "@/components/cart/OrderConfirmationClearCart";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: `Your order was placed — ${site.fullName}`,
};

type Props = {
  searchParams: Promise<{ orderId?: string }>;
};

export default async function OrderConfirmationPage({ searchParams }: Props) {
  const { orderId } = await searchParams;
  const id = orderId?.trim();
  if (!id) {
    redirect("/shop");
  }

  const settings = await getSiteSettings();

  return (
    <>
      <OrderConfirmationClearCart />
      <TopBar settings={settings} />
      <Header />
      <main className="pb-16 md:pb-0">
        <section className="relative overflow-hidden border-b border-[#eadfe4]">
          <div
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[var(--accent)]/5 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#c9a45d]/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-24 h-px w-[min(100%,40rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#eadfe4] to-transparent"
            aria-hidden
          />

          <div className="relative bg-gradient-to-b from-[#fffdfb] via-[#fcf8f6] to-[#f5ece8] py-20 md:py-28">
            <Container>
              <div className="mx-auto max-w-xl text-center">
                <div
                  className="animate-fade-up mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#f0dfe2] to-[#e8ccd1] shadow-lg shadow-[#9f1f2f]/12 ring-4 ring-white/80"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-md">
                    <FiCheck className="h-8 w-8 stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round" />
                  </span>
                </div>

                <p className="animate-fade-up-delay-1 mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Thank you
                </p>
                <h1 className="animate-fade-up-delay-1 font-display text-3xl font-black uppercase leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-[2.4rem]">
                  Order successfully placed
                </h1>
                <p className="animate-fade-up-delay-2 mx-auto mt-5 max-w-md text-base leading-relaxed text-gray-600">
                  We&apos;re preparing everything on our side. You&apos;ll hear from us soon.
                </p>
              </div>

              <div className="animate-fade-up-delay-2 mx-auto mt-12 max-w-lg">
                <div className="rounded-[1.4rem] bg-gradient-to-br from-white via-[#f8f0f2] to-[#eddee2] p-px shadow-xl shadow-[#2a0f16]/5">
                  <div className="overflow-hidden rounded-[1.35rem] border border-white/60 bg-white/90 backdrop-blur-sm">
                    <div className="bg-gradient-to-r from-[#fdf7f8] to-white px-6 py-5 text-left sm:px-8 sm:py-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Order number</p>
                      <p
                        className="mt-2 break-all font-mono text-base font-semibold leading-snug text-gray-900 sm:text-lg"
                        title={id}
                      >
                        {id}
                      </p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#eadfe4] to-transparent" />
                    <ul className="divide-y divide-[#f0e8eb] text-left">
                      <li className="flex items-start gap-4 px-6 py-4 sm:px-8">
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/8 text-[var(--accent)]">
                          <FiPhone className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900">We&apos;ll be in touch</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-gray-600">
                            Our delivery team will contact you shortly to confirm your order and address.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 px-6 py-4 sm:px-8">
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c9a45d]/12 text-[#8a6d2f]">
                          <FiTruck className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900">Delivery window</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-gray-600">
                            Expect delivery in <strong className="text-gray-800">2–5 business days</strong> after we
                            confirm your order.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 px-6 py-4 sm:px-8">
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                          <FiPackage className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900">Cash on delivery</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-gray-600">
                            Pay when your package arrives. Keep your order number handy for the courier.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-center text-sm text-gray-500">
                  A confirmation of this order number is shown above — you can save or screenshot this page.
                </p>
              </div>

              <div className="animate-fade-up-delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/"
                  className="inline-flex min-w-[12rem] items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#9f1f2f]/25 transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-xl"
                >
                  Back to home
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex min-w-[12rem] items-center justify-center rounded-full border-2 border-[var(--accent)]/30 bg-white/80 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--accent)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  Continue shopping
                </Link>
              </div>
            </Container>
          </div>
        </section>
      </main>
      <Footer settings={settings} />
      <MobileCta />
    </>
  );
}
