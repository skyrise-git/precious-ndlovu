"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "precious-ndlovu-cart-v1";

export type CartLines = Record<string, number>;

type CartContextValue = {
  lines: CartLines;
  addToCart: (packageId: string, quantity?: number) => void;
  setQuantity: (packageId: string, quantity: number) => void;
  removeLine: (packageId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStored(): CartLines {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as CartLines;
  } catch {
    return {};
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLines>({});

  useEffect(() => {
    setLines(readStored());
  }, []);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || e.newValue == null) return;
      try {
        const parsed = JSON.parse(e.newValue) as unknown;
        if (parsed && typeof parsed === "object") {
          setLines(parsed as CartLines);
        }
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore quota */
    }
  }, [lines]);

  const addToCart = useCallback((packageId: string, quantity = 1) => {
    setLines((prev) => {
      const q = Math.max(0, (prev[packageId] ?? 0) + quantity);
      if (q === 0) {
        const next = { ...prev };
        delete next[packageId];
        return next;
      }
      return { ...prev, [packageId]: q };
    });
  }, []);

  const setQuantity = useCallback((packageId: string, quantity: number) => {
    setLines((prev) => {
      if (quantity < 1) {
        const next = { ...prev };
        delete next[packageId];
        return next;
      }
      return { ...prev, [packageId]: quantity };
    });
  }, []);

  const removeLine = useCallback((packageId: string) => {
    setLines((prev) => {
      const next = { ...prev };
      delete next[packageId];
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setLines({});
  }, []);

  const value = useMemo(
    () => ({ lines, addToCart, setQuantity, removeLine, clearCart }),
    [lines, addToCart, setQuantity, removeLine, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
