import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { HeaderCartButton } from "@/components/cart/HeaderCartButton";

/** Use `/#id` so section links work from /shop and other routes, not only the homepage. */
const sectionLinks = [
  { href: "/#about", label: "About" },
  { href: "/#about-gallery", label: "Gallery" },
  { href: "/#pillars", label: "Business" },
  { href: "/#packages", label: "Packages" },
  { href: "/#events", label: "Events" },
  { href: "/#contact", label: "Contact" },
];

const shopNowButtonClass =
  "rounded-full border-2 border-[var(--accent)] bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-[var(--accent)] shadow-md transition hover:bg-[var(--accent)] hover:text-white sm:px-5";

const startNowButtonClass =
  "rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#9f1f2f]/20 transition hover:bg-[var(--accent-hover)] sm:px-5";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dde2] bg-white/90 backdrop-blur-xl dark:border-gray-700 dark:bg-gray-950/85">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="font-display text-lg font-black uppercase tracking-tight text-[var(--accent)] sm:text-xl"
        >
          {site.fullName}
        </Link>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-3 text-sm font-semibold uppercase tracking-wide text-gray-700 md:flex lg:gap-4 dark:text-gray-300">
          <Link href="/shop" className={shopNowButtonClass}>
            Shop now
          </Link>
          {sectionLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-transparent pb-1 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <HeaderCartButton />
          <Link href="/shop" className={`${shopNowButtonClass} md:hidden`}>
            Shop now
          </Link>
          <Link href="/#contact" className={startNowButtonClass}>
            Start now
          </Link>
        </div>
      </Container>
    </header>
  );
}
