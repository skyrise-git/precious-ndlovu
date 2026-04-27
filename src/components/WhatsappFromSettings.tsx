import { getSiteSettings } from "@/lib/settings";
import { getWhatsappChatUrlFromSettings } from "@/lib/whatsapp";
import { WhatsappFloatButton } from "./WhatsappFloatButton";

export async function WhatsappFromSettings() {
  const settings = await getSiteSettings();
  const href = getWhatsappChatUrlFromSettings(settings);
  if (!href) {
    return null;
  }
  return <WhatsappFloatButton href={href} />;
}
