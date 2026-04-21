"use client";

import Link from "next/link";

export function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#e8dde2] bg-white/95 px-4 py-3 backdrop-blur-md md:hidden">
      <Link
        href="/#contact"
        className="block w-full rounded-full bg-[var(--accent)] py-3 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-[var(--accent-hover)]"
      >
        Partner with Precious
      </Link>
    </div>
  );
}
