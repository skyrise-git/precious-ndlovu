import Link from "next/link";
import { SlotEditor } from "@/components/admin/SlotEditor";
import type { MediaSlotId } from "@/content/site";
import { logoutAction } from "@/app/actions/auth";
import { resolveMediaMap } from "@/lib/media";

export const dynamic = "force-dynamic";

const slotOrder: MediaSlotId[] = [
  "personHero",
  "personAbout",
  "packageRevookit",
  "packageStarter",
  "packageBronze",
  "packageSilver",
  "packageGold",
];

export default async function AdminPage() {
  const media = await resolveMediaMap();

  return (
    <div className="min-h-screen bg-stone-100 py-12 dark:bg-stone-950">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-semibold text-stone-900 dark:text-stone-50">
              Site images
            </h1>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Replace stock photos for the homepage and package cards. You can upload (with Blob
              token) or paste an HTTPS image URL.
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

        <div className="space-y-10">
          {slotOrder.map((slotId) => (
            <SlotEditor key={slotId} slotId={slotId} currentUrl={media[slotId]} />
          ))}
        </div>
      </div>
    </div>
  );
}
