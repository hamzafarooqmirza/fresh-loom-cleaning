import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Fresh Loom Cleaning! I need more info about your cleaning services."
  );

  return (
    <a
      href={`https://wa.me/447778879063?text=${message}`}
      target="_blank"
      rel="nofollow noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25d366] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} fill="currentColor" strokeWidth={0} />
    </a>
  );
}
