"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addEvent, deleteEvent } from "@/app/actions/events";
import type { SiteEvent } from "@/lib/events";

type Props = { events: SiteEvent[] };

export function EventsEditor({ events }: Props) {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900">
      <h2 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-50">
        Events
      </h2>
      <p className="mb-6 text-sm text-stone-500">
        Add, manage, and remove business events. Each event can have an optional image.
      </p>

      {events.length > 0 && (
        <div className="mb-8 space-y-4">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="flex items-start gap-4 rounded-xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-800"
            >
              {ev.imageUrl && (
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-stone-200">
                  <Image
                    src={ev.imageUrl}
                    alt={ev.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                    unoptimized
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="font-semibold text-stone-900 dark:text-stone-100">{ev.title}</p>
                <p className="text-sm text-stone-500">{ev.date} — {ev.location}</p>
              </div>
              {!ev.id.startsWith("default-") && (
                <form
                  action={async (formData) => {
                    const result = await deleteEvent(formData);
                    setMessage(result.message);
                    if (result.ok) router.refresh();
                  }}
                >
                  <input type="hidden" name="eventId" value={ev.id} />
                  <button
                    type="submit"
                    className="text-sm font-medium text-red-600 underline underline-offset-4"
                  >
                    Delete
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      )}

      <form
        className="space-y-4 rounded-xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-800"
        action={async (formData) => {
          setMessage(null);
          const result = await addEvent(formData);
          setMessage(result.message);
          if (result.ok) router.refresh();
        }}
      >
        <h3 className="text-sm font-bold uppercase tracking-wide text-stone-700 dark:text-stone-300">
          Add new event
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="ev-title" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
              Title *
            </label>
            <input
              id="ev-title"
              name="title"
              required
              placeholder="Leadership Training"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
            />
          </div>
          <div>
            <label htmlFor="ev-date" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
              Date *
            </label>
            <input
              id="ev-date"
              name="date"
              required
              placeholder="15 May 2026"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
            />
          </div>
        </div>
        <div>
          <label htmlFor="ev-location" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
            Location *
          </label>
          <input
            id="ev-location"
            name="location"
            required
            placeholder="Johannesburg"
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
          />
        </div>
        <div>
          <label htmlFor="ev-image" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
            Event image (optional)
          </label>
          <input
            id="ev-image"
            name="file"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="mt-1 block w-full text-sm"
          />
        </div>
        <div>
          <label htmlFor="ev-imageUrl" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
            Or paste image URL
          </label>
          <input
            id="ev-imageUrl"
            name="imageUrl"
            type="url"
            placeholder="https://example.com/event-photo.jpg"
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700"
        >
          Add event
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400" role="status">
          {message}
        </p>
      )}
    </div>
  );
}
