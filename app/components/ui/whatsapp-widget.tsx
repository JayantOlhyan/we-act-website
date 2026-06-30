import { company } from "~/data/content";
import { IconWhatsApp } from "~/components/ui/icons";

export function WhatsAppWidget() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello, I'd like to learn more about WeAct's services."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
      aria-label="Chat with us on WhatsApp"
    >
      <IconWhatsApp size={28} />
    </a>
  );
}
