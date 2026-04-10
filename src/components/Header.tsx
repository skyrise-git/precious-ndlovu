import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "My Business" },
  { href: "#packages", label: "Packages" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/95 backdrop-blur-md dark:border-gray-700 dark:bg-gray-950/95">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl font-black uppercase tracking-tight text-red-700 dark:text-red-500">
          {site.fullName}
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold uppercase tracking-wide text-gray-700 md:flex dark:text-gray-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-red-600 dark:hover:text-red-400"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-bold uppercase text-white shadow-sm transition hover:bg-red-700"
        >
          Partner now
        </a>
      </Container>
    </header>
  );
}
