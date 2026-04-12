"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SETTING_KEYS, type SiteSettings } from "@/lib/settings";

export async function saveSettings(formData: FormData) {
  await requireAdmin();

  try {
    for (const key of SETTING_KEYS) {
      const value = String(formData.get(key) ?? "").trim();
      await prisma.siteSetting.upsert({
        where: { key },
        create: { key, value },
        update: { value },
      });
    }
  } catch (err) {
    console.error("[saveSettings] DB error:", err);
    return { ok: false as const, message: "Database error — check DATABASE_URL and ensure the SiteSetting table exists." };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  return { ok: true as const, message: "Settings saved." };
}

export type SaveSettingsResult = Awaited<ReturnType<typeof saveSettings>>;
export type { SiteSettings };
