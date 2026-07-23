import { MessageCircle, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Fresh Loom Cleaning! I need more info about your cleaning services."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href={siteInfo.phoneHref}
        className="hidden sm:flex items-center gap-2 bg-navy-dark text-white text-sm font-heading font-semibold uppercase tracking-wide px-4 py-3 rounded-full shadow-xl hover:bg-navy transition-colors"
      >
        <Phone size={16} /> Call Us
      </a>
      <a
        href={`https://wa.me/447778879063?text=${message}`}
        target="_blank"
        rel="nofollow noopener"
        aria-label="Chat with us on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25d366] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <MessageCircle size={26} fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  );
}
