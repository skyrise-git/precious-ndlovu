import { mediaSlots, type MediaSlotId } from "@/content/site";
import { prisma } from "@/lib/prisma";

export async function resolveMediaMap(): Promise<Record<MediaSlotId, string>> {
  const defaults = Object.fromEntries(
    Object.entries(mediaSlots).map(([k, v]) => [k, v.defaultSrc]),
  ) as Record<MediaSlotId, string>;

  try {
    const rows = await prisma.siteImage.findMany();
    for (const r of rows) {
      const id = r.slotId as MediaSlotId;
      if (id in defaults) {
        defaults[id] = r.url;
      }
    }
  } catch (e) {
    console.error("[resolveMediaMap] database read failed; using stock images only.", e);
  }
  return defaults;
}
