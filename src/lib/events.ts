import { prisma } from "@/lib/prisma";
import { site } from "@/content/site";

export type SiteEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
};

const fallbackEvents: SiteEvent[] = site.events.map((ev, i) => ({
  id: `default-${i}`,
  title: ev.title,
  date: ev.date,
  location: ev.location,
  imageUrl: "",
}));

async function queryWithRetry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      if (attempt === retries) throw e;
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
    }
  }
  throw new Error("unreachable");
}

export async function getEvents(): Promise<SiteEvent[]> {
  try {
    const rows = await queryWithRetry(() =>
      prisma.event.findMany({ orderBy: { sortOrder: "asc" } })
    );
    if (rows.length === 0) return fallbackEvents;
    return rows.map((r) => ({
      id: r.id,
      title: r.title,
      date: r.date,
      location: r.location,
      imageUrl: r.imageUrl,
    }));
  } catch (e) {
    console.error("[getEvents] DB read failed; using defaults.", e);
    return fallbackEvents;
  }
}
