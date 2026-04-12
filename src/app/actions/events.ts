"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function addEvent(formData: FormData) {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  let imageUrl = String(formData.get("imageUrl") ?? "").trim();

  if (!title) return { ok: false as const, message: "Title is required." };
  if (!date) return { ok: false as const, message: "Date is required." };
  if (!location) return { ok: false as const, message: "Location is required." };

  const file = formData.get("file");
  if (file instanceof File && file.size > 0) {
    if (file.size > 4_000_000) {
      return { ok: false as const, message: "Image too large (max 4 MB)." };
    }
    try {
      const { UTApi } = await import("uploadthing/server");
      const utapi = new UTApi();
      const response = await utapi.uploadFiles(file);
      if (response.error) {
        return { ok: false as const, message: "Image upload failed: " + String(response.error.message ?? response.error) };
      }
      imageUrl = response.data.ufsUrl;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      return { ok: false as const, message: "Upload error: " + msg };
    }
  }

  try {
    const count = await prisma.event.count();
    await prisma.event.create({
      data: { title, date, location, imageUrl, sortOrder: count },
    });
  } catch (err) {
    console.error("[addEvent] DB error:", err);
    return { ok: false as const, message: "Database error. Check that the Event table exists." };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  return { ok: true as const, message: "Event added." };
}

export async function deleteEvent(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("eventId") ?? "");
  if (!id) return { ok: false as const, message: "Missing event ID." };

  try {
    await prisma.event.delete({ where: { id } });
  } catch (err) {
    console.error("[deleteEvent] DB error:", err);
    return { ok: false as const, message: "Failed to delete event." };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  return { ok: true as const, message: "Event deleted." };
}
