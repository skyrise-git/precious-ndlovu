"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  href: string;
  /** @default "Chat on WhatsApp" */
  "aria-label"?: string;
};

/**
 * Fixed bubble above the mobile sticky "Partner" bar and below notches (extra bottom offset).
 */
export function WhatsappFloatButton(props: Props) {
  const pathname = usePathname();
  const { href, "aria-label": aria = "Chat on WhatsApp" } = props;
  if (pathname?.startsWith("/admin")) {
    return null;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={aria}
      className="fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] md:bottom-6"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden />
    </a>
  );
}
