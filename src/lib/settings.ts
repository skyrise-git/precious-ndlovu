import { prisma } from "@/lib/prisma";
import { site } from "@/content/site";

export type SiteSettings = {
  phone: string;
  email: string;
  videoLink: string;
  facebookUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
};

const defaults: SiteSettings = {
  phone: site.contactInfo.phone,
  email: site.contactInfo.email,
  videoLink: "",
  facebookUrl: site.socialLinks.facebook,
  instagramUrl: site.socialLinks.instagram,
  youtubeUrl: site.socialLinks.youtube,
  tiktokUrl: site.socialLinks.tiktok,
};

export const SETTING_KEYS = Object.keys(defaults) as (keyof SiteSettings)[];

export async function getSiteSettings(): Promise<SiteSettings> {
  const result = { ...defaults };
  try {
    const rows = await prisma.siteSetting.findMany();
    for (const row of rows) {
      if (row.key in result) {
        (result as Record<string, string>)[row.key] = row.value;
      }
    }
  } catch (e) {
    console.error("[getSiteSettings] DB read failed; using defaults.", e);
  }
  return result;
}
