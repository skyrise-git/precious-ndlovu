import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/shop", label: "Shop now" },
  { href: "#about", label: "About" },
  { href: "#about-gallery", label: "Gallery" },
  { href: "#pillars", label: "Business" },
  { href: "#packages", label: "Packages" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dde2] bg-white/90 backdrop-blur-xl dark:border-gray-700 dark:bg-gray-950/85">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-lg font-black uppercase tracking-tight text-[var(--accent)] sm:text-xl"
        >
          {site.fullName}
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold uppercase tracking-wide text-gray-700 md:flex dark:text-gray-300">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-transparent pb-1 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="border-b border-transparent pb-1 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/shop"
            className="text-sm font-bold uppercase tracking-wider text-[var(--accent)] transition hover:underline md:hidden"
          >
            Shop now
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#9f1f2f]/20 transition hover:bg-[var(--accent-hover)] sm:px-5"
          >
            Start now
          </a>
        </div>
      </Container>
    </header>
  );
}
