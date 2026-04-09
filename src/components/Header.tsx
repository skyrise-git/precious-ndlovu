import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Partnership" },
  { href: "#packages", label: "Packages" },
  { href: "#compensation", label: "Plan" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-background/90 backdrop-blur-md dark:border-stone-700/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-lg font-semibold text-stone-900 dark:text-stone-50">
          {site.fullName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex dark:text-stone-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-amber-700 dark:hover:text-amber-400"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600"
        >
          Connect
        </a>
      </Container>
    </header>
  );
}
