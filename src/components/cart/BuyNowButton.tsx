"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";

type Props = { packageId: string; label?: string };

export function BuyNowButton({ packageId, label = "Buy now" }: Props) {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => {
        addToCart(packageId, 1);
        router.push("/shop");
      }}
      className="mt-6 w-full rounded-full bg-[var(--accent)] py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[var(--accent-hover)]"
    >
      {label}
    </button>
  );
}
