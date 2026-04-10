import { site } from "@/content/site";

export function TopBar() {
  return (
    <div className="bg-red-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
        <div className="flex items-center gap-4">
          <span>📞 {site.contactInfo.phone}</span>
          <span className="hidden sm:inline">✉️ {site.contactInfo.email}</span>
        </div>
        <div className="flex items-center gap-3">
          {Object.entries(site.socialLinks).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-300"
              aria-label={name}
            >
              {name === "facebook" && "f"}
              {name === "instagram" && "📷"}
              {name === "youtube" && "▶"}
              {name === "tiktok" && "♪"}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
