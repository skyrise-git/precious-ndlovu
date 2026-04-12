"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  resetSlotForm,
  setImageUrlForm,
  uploadSlotImage,
} from "@/app/actions/media";
import { mediaSlots, type MediaSlotId } from "@/content/site";

const labels: Record<MediaSlotId, string> = {
  personHero: "Hero — main portrait",
  personAbout: "About section — portrait",
  aboutGallery1: "About Gallery — Family moments",
  aboutGallery2: "About Gallery — Achievements",
  aboutGallery3: "About Gallery — Lifestyle & assets",
  aboutGallery4: "About Gallery — Community & leadership",
  aboutGallery5: "About Gallery — Travel & experiences",
  aboutGallery6: "About Gallery — Personal brand",
  packageRevookit: "Package REVOOKIT",
  packageStarter: "Package STARTER",
  packageBronze: "Package BRONZE",
  packageSilver: "Package SILVER",
  packageGold: "Package GOLD",
};

type Props = {
  slotId: MediaSlotId;
  currentUrl: string;
};

export function SlotEditor({ slotId, currentUrl }: Props) {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const alt = mediaSlots[slotId].alt;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900">
      <p className="font-mono text-xs text-stone-500">{slotId}</p>
      <h2 className="mt-1 font-semibold text-stone-900 dark:text-stone-100">{labels[slotId]}</h2>
      <div className="relative mt-4 aspect-[16/10] w-full max-w-md overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800">
        <Image
          src={currentUrl}
          alt={alt}
          fill
          className="object-cover"
          sizes="400px"
          unoptimized
        />
      </div>

      <form
        className="mt-6 space-y-2"
        action={async (formData) => {
          setMessage(null);
          const r = await uploadSlotImage(formData);
          setMessage(r.ok ? "Upload saved." : r.message);
          if (r.ok) router.refresh();
        }}
      >
        <input type="hidden" name="slotId" value={slotId} />
        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
          Upload file (via UploadThing)
        </label>
        <input
          type="file"
          name="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="block w-full text-sm"
        />
        <button
          type="submit"
          className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white dark:bg-stone-100 dark:text-stone-900"
        >
          Upload
        </button>
      </form>

      <form
        className="mt-6 flex flex-col gap-2 sm:flex-row"
        action={async (formData) => {
          setMessage(null);
          const r = await setImageUrlForm(formData);
          setMessage(r.ok ? "Image URL saved." : r.message);
          if (r.ok) router.refresh();
        }}
      >
        <input type="hidden" name="slotId" value={slotId} />
        <input
          name="url"
          type="url"
          placeholder="https://example.com/photo.jpg"
          className="flex-1 rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
        />
        <button
          type="submit"
          className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Save URL
        </button>
      </form>

      <form
        action={async (formData) => {
          setMessage(null);
          await resetSlotForm(formData);
          setMessage("Reverted to stock default.");
          router.refresh();
        }}
        className="mt-4"
      >
        <input type="hidden" name="slotId" value={slotId} />
        <button
          type="submit"
          className="text-sm font-medium text-red-600 underline underline-offset-4"
        >
          Reset to stock image
        </button>
      </form>

      {message ? (
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400" role="status">
          {message}
        </p>
      ) : null}
    </div>
  );
}
