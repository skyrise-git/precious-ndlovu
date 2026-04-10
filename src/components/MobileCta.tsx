"use client";

export function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-stone-200/60 bg-white/95 px-4 py-3 backdrop-blur-md md:hidden dark:border-stone-700 dark:bg-stone-950/95">
      <a
        href="#contact"
        className="block w-full rounded-full bg-amber-600 py-3 text-center text-sm font-bold text-white shadow-lg shadow-amber-600/20 transition hover:bg-amber-700"
      >
        Start today — send a message
      </a>
    </div>
  );
}
