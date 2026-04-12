import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/components/ui/SocialIcons";
import type { SiteSettings } from "@/lib/settings";

type Props = { settings: SiteSettings };

export function Footer({ settings }: Props) {
  return (
    <footer className="bg-[#1c1217] py-12 text-gray-300">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold uppercase text-white">{site.fullName}</h3>
            <p className="mt-2 text-sm text-gray-400">{site.taglineShort}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Quick links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              {["about", "packages", "events", "contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="capitalize transition hover:text-[var(--accent-secondary)]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Follow Precious</h4>
            <div className="mt-3 flex gap-3">
              {socialLinks.map(({ key, label, Icon }) => {
                const url = settings[key];
                if (!url) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white transition hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p className="mt-2">{site.disclaimerShort}</p>
        </div>
      </Container>
    </footer>
  );
}
