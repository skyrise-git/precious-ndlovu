import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100/80 py-10 dark:border-stone-800 dark:bg-stone-950/80">
      <Container>
        <p className="text-center text-sm text-stone-600 dark:text-stone-400">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
        <p className="mt-3 text-center text-xs text-stone-500 dark:text-stone-500">
          {site.stockAttribution}
        </p>
        <p className="mt-2 text-center text-xs text-stone-500">{site.disclaimerShort}</p>
      </Container>
    </footer>
  );
}
