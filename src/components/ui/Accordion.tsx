"use client";

import { useState } from "react";

type Props = {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export function Accordion({ title, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-stone-200 bg-card shadow-sm dark:border-stone-700">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-stone-50/50 dark:hover:bg-stone-800/30"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-semibold text-stone-900 dark:text-stone-50">
          {title}
        </span>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition dark:border-stone-600 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open ? (
        <div className="border-t border-stone-200/60 px-5 pb-5 pt-4 dark:border-stone-700/60">
          {children}
        </div>
      ) : null}
    </div>
  );
}
