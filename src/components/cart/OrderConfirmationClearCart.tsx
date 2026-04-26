"use client";

import { useEffect, useRef } from "react";
import { useCart } from "@/components/cart/CartProvider";

/** Clears the client cart once after a successful order redirect. */
export function OrderConfirmationClearCart() {
  const { clearCart } = useCart();
  const didRun = useRef(false);

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;
    clearCart();
  }, [clearCart]);

  return null;
}
