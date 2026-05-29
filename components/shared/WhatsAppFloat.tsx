"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 240);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href={CONTACT.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <div className="relative flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-[0_12px_32px_-8px_rgba(37,211,102,0.55)] hover:shadow-[0_16px_40px_-10px_rgba(37,211,102,0.7)] hover:scale-105 transition-all duration-300">
        <MessageCircle size={22} strokeWidth={2} fill="white" stroke="#25D366" />
        <span className="hidden sm:block text-sm font-semibold tracking-tight">
          Fale no WhatsApp
        </span>
      </div>
    </a>
  );
}
