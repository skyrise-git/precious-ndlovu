"use server";

import { revalidatePath } from "next/cache";
import { mediaSlots, type MediaSlotId } from "@/content/site";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

let _utapi: InstanceType<typeof import("uploadthing/server").UTApi> | null = null;

async function getUtApi() {
  if (!_utapi) {
    const { UTApi } = await import("uploadthing/server");
    _utapi = new UTApi();
  }
  return _utapi;
}

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
  if (file.size > 4_000_000) {
    return { ok: false as const, message: "File too large (max 4 MB)." };
  }
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!["jpg", "jpeg", "png", "webp", "gif"].includes(ext)) {
    return { ok: false as const, message: "Use jpg, png, webp, or gif." };
  }

  const utapi = await getUtApi();
  const response = await utapi.uploadFiles(file);
  if (response.error) {
    console.error("[uploadSlotImage] UploadThing error:", response.error);
    return { ok: false as const, message: "Upload failed. Try again or paste a URL instead." };
  }

  const url = response.data.ufsUrl;
  await prisma.siteImage.upsert({
    where: { slotId },
    create: { slotId, url },
    update: { url },
  });
  revalidatePath("/");
  revalidatePath("/admin");
  return { ok: true as const, url };
}
