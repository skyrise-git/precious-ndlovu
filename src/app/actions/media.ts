"use server";

import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";
import { mediaSlots, type MediaSlotId } from "@/content/site";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function setImageUrl(slotId: MediaSlotId, url: string) {
  await requireAdmin();
  const trimmed = url.trim();
  if (!trimmed.startsWith("https://")) {
    return { ok: false as const, message: "URL must use HTTPS." };
  }
  if (!(slotId in mediaSlots)) {
    return { ok: false as const, message: "Invalid slot." };
  }
  await prisma.siteImage.upsert({
    where: { slotId },
    create: { slotId, url: trimmed },
    update: { url: trimmed },
  });
  revalidatePath("/");
  revalidatePath("/admin");
  return { ok: true as const };
}

export async function resetSlot(slotId: MediaSlotId) {
  await requireAdmin();
  if (!(slotId in mediaSlots)) {
    return { ok: false as const, message: "Invalid slot." };
  }
  await prisma.siteImage.deleteMany({ where: { slotId } });
  revalidatePath("/");
  revalidatePath("/admin");
  return { ok: true as const };
}

export async function setImageUrlForm(formData: FormData) {
  const slotId = String(formData.get("slotId")) as MediaSlotId;
  const url = String(formData.get("url") ?? "");
  return setImageUrl(slotId, url);
}

export async function resetSlotForm(formData: FormData) {
  const slotId = String(formData.get("slotId")) as MediaSlotId;
  return resetSlot(slotId);
}

export async function uploadSlotImage(formData: FormData) {
  await requireAdmin();
  const slotId = String(formData.get("slotId")) as MediaSlotId;
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false as const, message: "Choose a file first." };
  }
  if (!(slotId in mediaSlots)) {
    return { ok: false as const, message: "Invalid slot." };
  }
  if (file.size > 4_500_000) {
    return { ok: false as const, message: "File too large (max ~4.5MB)." };
  }
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return {
      ok: false as const,
      message:
        "Blob uploads are disabled. Set BLOB_READ_WRITE_TOKEN or paste an HTTPS image URL.",
    };
  }
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!["jpg", "jpeg", "png", "webp", "gif"].includes(ext)) {
    return { ok: false as const, message: "Use jpg, png, webp, or gif." };
  }
  const path = `site/${slotId}/${Date.now()}.${ext}`;
  const blob = await put(path, file, {
    access: "public",
    token,
  });
  await prisma.siteImage.upsert({
    where: { slotId },
    create: { slotId, url: blob.url },
    update: { url: blob.url },
  });
  revalidatePath("/");
  revalidatePath("/admin");
  return { ok: true as const, url: blob.url };
}
