import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/components/ui/SocialIcons";
import type { SiteSettings } from "@/lib/settings";
import { getWhatsappChatUrlFromSettings } from "@/lib/whatsapp";

type Props = { settings: SiteSettings };

export function TopBar({ settings }: Props) {
  const whatsappHref = getWhatsappChatUrlFromSettings(settings);
  return (
    <div className="border-b border-white/10 bg-[#2a1820] text-white">
      <Container className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/85">
          <span>Call: {settings.phone}</span>
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#5fe08a] transition hover:text-white"
            >
              <FaWhatsapp className="h-3.5 w-3.5" aria-hidden />
              WhatsApp
            </a>
          ) : null}
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
          {socialLinks.map(({ key, label, Icon }) => {
            const url = settings[key];
            if (!url) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base transition hover:text-[var(--accent-secondary)]"
                aria-label={label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
