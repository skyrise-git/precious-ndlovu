import { Container } from "@/components/ui/Container";
import type { SiteSettings } from "@/lib/settings";

type Props = { settings: SiteSettings };

const socialIcons: { key: keyof SiteSettings; label: string; initial: string }[] = [
  { key: "facebookUrl", label: "Facebook", initial: "F" },
  { key: "instagramUrl", label: "Instagram", initial: "I" },
  { key: "youtubeUrl", label: "YouTube", initial: "Y" },
  { key: "tiktokUrl", label: "TikTok", initial: "T" },
];

export function TopBar({ settings }: Props) {
  return (
    <div className="border-b border-white/10 bg-[#2a1820] text-white">
      <Container className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs sm:text-sm">
        <div className="flex items-center gap-4 text-white/85">
          <span>Call: {settings.phone}</span>
          <span className="hidden sm:inline">Email: {settings.email}</span>
        </div>
        <div className="flex items-center gap-3 text-white/85">
          {settings.videoLink && (
            <a
              href={settings.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition hover:text-[var(--accent-secondary)]"
              aria-label="Watch video"
            >
              ▶ Video
            </a>
          )}
          {socialIcons.map(({ key, label, initial }) => {
            const url = settings[key];
            if (!url) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--accent-secondary)]"
                aria-label={label}
              >
                {initial}
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
