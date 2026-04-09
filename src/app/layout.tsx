import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

function metadataBaseUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return new URL("https://localhost");
  try {
    return new URL(raw);
  } catch {
    return new URL("https://localhost");
  }
}

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} — Wealth & health partnership`,
    template: `%s · ${site.fullName}`,
  },
  description: site.heroLead,
  metadataBase: metadataBaseUrl(),
  openGraph: {
    title: site.fullName,
    description: site.heroLead,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} min-h-screen font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
