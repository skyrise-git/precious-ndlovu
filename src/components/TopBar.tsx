import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-[#2a1820] text-white">
      <Container className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs sm:text-sm">
        <div className="flex items-center gap-4 text-white/85">
          <span>Call: {site.contactInfo.phone}</span>
          <span className="hidden sm:inline">Email: {site.contactInfo.email}</span>
        </div>
        <div className="flex items-center gap-3 text-white/85">
          {Object.entries(site.socialLinks).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[var(--accent-secondary)]"
              aria-label={name}
            >
              {name[0].toUpperCase()}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
