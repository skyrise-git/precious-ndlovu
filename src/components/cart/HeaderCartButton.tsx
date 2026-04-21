"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/components/cart/CartProvider";

export function HeaderCartButton() {
  const { lines } = useCart();
  const count = Object.values(lines).reduce((sum, n) => sum + n, 0);

  if (count < 1) {
    return null;
  }

  const label = count > 99 ? "99+" : String(count);

  return (
    <Link
      href="/shop"
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-[var(--accent)] shadow-sm transition hover:bg-[var(--accent)] hover:text-white"
      aria-label={`Shopping cart, ${count} item${count === 1 ? "" : "s"}. Go to checkout.`}
    >
      <FiShoppingCart className="h-5 w-5" aria-hidden />
      <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[10px] font-bold leading-none text-white">
        {label}
      </span>
    </Link>
  );
}
