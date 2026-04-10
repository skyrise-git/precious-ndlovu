import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-stone-900 py-12 text-stone-400 dark:bg-stone-950">
      <Container>
        <p className="text-center text-sm font-medium text-stone-300">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
        <p className="mt-3 text-center text-xs">{site.stockAttribution}</p>
        <p className="mt-2 text-center text-xs">{site.disclaimerShort}</p>
      </Container>
    </footer>
  );
}
