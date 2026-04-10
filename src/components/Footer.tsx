import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold uppercase text-white">{site.fullName}</h3>
            <p className="mt-2 text-sm">{site.taglineShort}</p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-white">Quick links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              {["About", "Packages", "Events", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition hover:text-red-400">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-white">Follow Precious</h4>
            <div className="mt-3 flex gap-3">
              {Object.entries(site.socialLinks).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white transition hover:bg-red-500"
                  aria-label={name}
                >
                  {name[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p className="mt-2">{site.disclaimerShort}</p>
        </div>
      </Container>
    </footer>
  );
}
