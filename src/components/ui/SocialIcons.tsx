import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import type { SiteSettings } from "@/lib/settings";
import type { IconType } from "react-icons";

export const socialLinks: { key: keyof SiteSettings; label: string; Icon: IconType }[] = [
  { key: "facebookUrl", label: "Facebook", Icon: FaFacebookF },
  { key: "instagramUrl", label: "Instagram", Icon: FaInstagram },
  { key: "youtubeUrl", label: "YouTube", Icon: FaYoutube },
  { key: "tiktokUrl", label: "TikTok", Icon: FaTiktok },
];
