"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  memberPackagesArraySchema,
  normalizeMemberPackages,
  PACKAGES_SETTING_KEY,
} from "@/lib/packages";

export async function saveMemberPackages(_prev: unknown, formData: FormData) {
  await requireAdmin();

  const raw = formData.get("packagesJson");
  if (typeof raw !== "string") {
    return { ok: false as const, message: "Missing packages data." };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { ok: false as const, message: "Invalid JSON." };
  }

  const result = memberPackagesArraySchema.safeParse(parsed);
  if (!result.success) {
    const first = result.error.issues[0]?.message ?? "Validation failed.";
    return { ok: false as const, message: first };
  }

  let normalized;
  try {
    normalized = normalizeMemberPackages(result.data);
  } catch (e) {
    return {
      ok: false as const,
      message: e instanceof Error ? e.message : "Could not normalize packages.",
    };
  }

  try {
    await prisma.siteSetting.upsert({
      where: { key: PACKAGES_SETTING_KEY },
      create: { key: PACKAGES_SETTING_KEY, value: JSON.stringify(normalized) },
      update: { value: JSON.stringify(normalized) },
    });
  } catch (err) {
    console.error("[saveMemberPackages] DB error:", err);
    return { ok: false as const, message: "Database error — could not save packages." };
  }

  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/admin");
  return { ok: true as const, message: "Packages saved." };
}
