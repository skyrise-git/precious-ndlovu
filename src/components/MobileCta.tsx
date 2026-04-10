"use client";

export function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200/60 bg-white/95 px-4 py-3 backdrop-blur-md md:hidden dark:border-gray-700 dark:bg-gray-950/95">
      <a
        href="#contact"
        className="block w-full rounded-md bg-red-600 py-3 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-red-700"
      >
        Partner with Precious
      </a>
    </div>
  );
}
