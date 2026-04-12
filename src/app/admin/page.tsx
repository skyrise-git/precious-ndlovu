import Link from "next/link";
import { SlotEditor } from "@/components/admin/SlotEditor";
import { SettingsEditor } from "@/components/admin/SettingsEditor";
import { EventsEditor } from "@/components/admin/EventsEditor";
import type { MediaSlotId } from "@/content/site";
import { logoutAction } from "@/app/actions/auth";
import { resolveMediaMap } from "@/lib/media";
import { getSiteSettings } from "@/lib/settings";
import { getEvents } from "@/lib/events";

export const dynamic = "force-dynamic";

const slotOrder: MediaSlotId[] = [
  "personHero",
  "personAbout",
  "aboutGallery1",
  "aboutGallery2",
  "aboutGallery3",
  "aboutGallery4",
  "aboutGallery5",
  "aboutGallery6",
  "packageRevookit",
  "packageStarter",
  "packageBronze",
  "packageSilver",
  "packageGold",
];

export default async function AdminPage() {
  let media: Awaited<ReturnType<typeof resolveMediaMap>>;
  let dbError = false;
  try {
    media = await resolveMediaMap();
  } catch {
    const { mediaSlots } = await import("@/content/site");
    media = Object.fromEntries(
      Object.entries(mediaSlots).map(([k, v]) => [k, v.defaultSrc]),
    ) as typeof media;
    dbError = true;
  }

  const settings = await getSiteSettings();
  const events = await getEvents();

  return (
    <div className="min-h-screen bg-stone-100 py-12 dark:bg-stone-950">
      <div className="mx-auto max-w-3xl px-4">
        {dbError && (
          <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <strong>Database unreachable.</strong> Showing stock defaults. Check your{" "}
            <code className="text-xs">DATABASE_URL</code> in Vercel environment variables and
            ensure the Supabase database is running.
          </div>
        )}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-semibold text-stone-900 dark:text-stone-50">
              Site images
            </h1>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Replace stock photos for the homepage and package cards. Upload via UploadThing
              or paste an HTTPS image URL.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 dark:border-stone-600 dark:text-stone-200"
            >
              View site
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white dark:bg-stone-200 dark:text-stone-900"
              >
                Log out
              </button>
            </form>
          </div>
        </div>

        <SettingsEditor current={settings} />

        <div className="mt-10">
          <EventsEditor events={events} />
        </div>

        <h2 className="mt-12 mb-6 font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
          Site Images
        </h2>
        <div className="space-y-10">
          {slotOrder.map((slotId) => (
            <SlotEditor key={slotId} slotId={slotId} currentUrl={media[slotId]} />
          ))}
        </div>
      </div>
    </div>
  );
}
