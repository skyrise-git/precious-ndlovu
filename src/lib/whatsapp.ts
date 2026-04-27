/**
 * Build https://wa.me/ links. Number must be digits only (no +), including country code.
 * @see https://faq.whatsapp.com/1317564962215847
 */
const DEFAULT_FIRST_MESSAGE =
  "Hi Precious, I found you on your website and I would like to get in touch.";

function isLikelyPlaceholder(digits: string): boolean {
  if (digits.length < 8) return true;
  if (/^0+$/.test(digits)) return true;
  if (digits.includes("0000000")) return true;
  if (digits === "2700000000") return true;
  return false;
}

/** Prefer NEXT_PUBLIC_WHATSAPP (digits) when set; else derive from the display phone. */
export function resolveWhatsappE164FromPhone(phone: string): string | null {
  const env = process.env.NEXT_PUBLIC_WHATSAPP?.replace(/\D/g, "") ?? "";
  if (env.length >= 8 && env.length <= 15) {
    return env;
  }
  const d = phone.replace(/\D/g, "");
  if (d.length < 8 || d.length > 15) return null;
  if (isLikelyPlaceholder(d)) return null;
  return d;
}

export function buildWhatsappUrl(
  e164: string,
  firstMessage: string = DEFAULT_FIRST_MESSAGE,
): string {
  const q = firstMessage.trim()
    ? `?text=${encodeURIComponent(firstMessage.trim())}`
    : "";
  return `https://wa.me/${e164}${q}`;
}

export function getWhatsappChatUrlFromSettings(settings: { phone: string }): string | null {
  const e164 = resolveWhatsappE164FromPhone(settings.phone);
  if (!e164) return null;
  return buildWhatsappUrl(e164);
}
