import { mediaSlots, type MediaSlotId } from "@/content/site";
import { prisma } from "@/lib/prisma";

async function queryWithRetry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      if (attempt === retries) throw e;
      console.warn(`[DB] retry ${attempt + 1}/${retries}…`);
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
    }
  }
  throw new Error("unreachable");
}

export async function resolveMediaMap(): Promise<Record<MediaSlotId, string>> {
  const defaults = Object.fromEntries(
    Object.entries(mediaSlots).map(([k, v]) => [k, v.defaultSrc]),
  ) as Record<MediaSlotId, string>;

  try {
    const rows = await queryWithRetry(() => prisma.siteImage.findMany());
    for (const r of rows) {
      const id = r.slotId as MediaSlotId;
      if (id in defaults) {
        defaults[id] = r.url;
      }
    }
  } catch (e) {
    console.error("[resolveMediaMap] database read failed after retries; using stock images.", e);
  }
  return defaults;
}
