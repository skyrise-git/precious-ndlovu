"use client";

import type { MemberPackage } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ShopCheckoutForm } from "@/components/cart/ShopCheckoutForm";
import { useCart } from "@/components/cart/CartProvider";

type Props = { packages: MemberPackage[] };

export function ShopPageClient({ packages: memberPackages }: Props) {
  const { lines, setQuantity, addToCart, removeLine } = useCart();

  return (
    <div className="py-12 md:py-16">
      <Container>
        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">Shop</p>
          <h1 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">Member packages</h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Select packages and quantities, then enter your details for cash on delivery.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-gray-900">Your cart</h2>
            <ul className="space-y-4">
              {memberPackages.map((pkg) => {
                const qty = lines[pkg.id] ?? 0;
                return (
                  <li
                    key={pkg.id}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#eadfe4] bg-white p-4 shadow-sm"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Package {pkg.code}
                      </p>
                      <p className="font-display text-lg font-bold text-gray-900">{pkg.name}</p>
                      <p className="text-sm text-[var(--accent)]">
                        {pkg.rv} RV <span className="text-gray-500">per unit</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => (qty <= 1 ? removeLine(pkg.id) : setQuantity(pkg.id, qty - 1))}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#eadfe4] text-lg font-bold text-gray-700 transition hover:bg-[#fdf7f8]"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="min-w-[2rem] text-center font-semibold text-gray-900">{qty}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(pkg.id, 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#eadfe4] text-lg font-bold text-gray-700 transition hover:bg-[#fdf7f8]"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <ShopCheckoutForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
