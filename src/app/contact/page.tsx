import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Buy IPTV Subscription — 24/7 UK IPTV Support",
  description:
    "Get in touch with the Buy IPTV Subscription support team. 24/7 IPTV subscription support via WhatsApp, email and live chat. A named UK team that answers in under four minutes — pre-purchase questions, setup help and post-checkout support in one place.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
