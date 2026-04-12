"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveSettings } from "@/app/actions/settings";
import type { SiteSettings } from "@/lib/settings";

const fields: { key: keyof SiteSettings; label: string; type: string; placeholder: string }[] = [
  { key: "phone", label: "Phone number", type: "tel", placeholder: "+27 12 345 6789" },
  { key: "email", label: "Email address", type: "email", placeholder: "info@example.com" },
  { key: "videoLink", label: "Video link (YouTube etc.)", type: "url", placeholder: "https://youtube.com/watch?v=..." },
  { key: "facebookUrl", label: "Facebook URL", type: "url", placeholder: "https://facebook.com/..." },
  { key: "instagramUrl", label: "Instagram URL", type: "url", placeholder: "https://instagram.com/..." },
  { key: "youtubeUrl", label: "YouTube URL", type: "url", placeholder: "https://youtube.com/..." },
  { key: "tiktokUrl", label: "TikTok URL", type: "url", placeholder: "https://tiktok.com/@..." },
];

type Props = { current: SiteSettings };

export function SettingsEditor({ current }: Props) {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  return (
    <form
      className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900"
      action={async (formData) => {
        setMessage(null);
        const result = await saveSettings(formData);
        setMessage(result.message);
        if (result.ok) router.refresh();
      }}
    >
      <h2 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-50">
        Site Settings
      </h2>
      <p className="mb-6 text-sm text-stone-500">
        Update contact info, social media links, and video link. These appear in the top bar and footer.
      </p>
      <div className="space-y-4">
        {fields.map((f) => (
          <div key={f.key}>
            <label htmlFor={f.key} className="block text-sm font-medium text-stone-700 dark:text-stone-300">
              {f.label}
            </label>
            <input
              id={f.key}
              name={f.key}
              type={f.type}
              defaultValue={current[f.key]}
              placeholder={f.placeholder}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-6 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700"
      >
        Save settings
      </button>
      {message && (
        <p className="mt-3 text-sm text-stone-600 dark:text-stone-400" role="status">
          {message}
        </p>
      )}
    </form>
  );
}
