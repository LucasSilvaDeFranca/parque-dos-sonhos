"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { NAV, CONTACT, BOOKING_URL } from "@/lib/constants";
import { clsx } from "@/components/ui/clsx";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-pds-bone/92 backdrop-blur-md border-b border-pds-line/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between gap-6 h-[72px] md:h-[84px]">
            <Link href="/" className="flex items-center shrink-0" aria-label="Início">
              <Logo
                tone={scrolled ? "dark" : "light"}
                size="md"
                showTagline={false}
              />
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5 mx-auto">
              {NAV.map((item) => {
                const className = clsx(
                  "px-3 py-2 rounded-full text-[0.84rem] font-medium tracking-tight whitespace-nowrap transition-colors",
                  scrolled
                    ? "text-pds-graphite hover:text-pds-fire hover:bg-pds-cream/60"
                    : "text-white/95 hover:text-white hover:bg-white/10"
                );
                return item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href as never}
                    className={className}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden xl:flex items-center gap-3 shrink-0">
              <Button
                href={CONTACT.whatsapp.href}
                external
                variant={scrolled ? "secondary" : "outline-light"}
                size="sm"
                className="!gap-2"
              >
                <MessageCircle size={16} strokeWidth={2.2} />
                WhatsApp
              </Button>
              <Button
                href={BOOKING_URL}
                external
                variant="primary"
                size="sm"
                withIcon
              >
                Reservar
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className={clsx(
                "xl:hidden p-2 -mr-2 rounded-full transition-colors",
                scrolled
                  ? "text-pds-graphite hover:bg-pds-cream"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Abrir menu"
            >
              <Menu size={26} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] xl:hidden transition-all duration-500",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-pds-ink/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={clsx(
            "absolute right-0 top-0 h-full w-[88%] max-w-sm bg-pds-bone shadow-2xl flex flex-col transition-transform duration-500",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-pds-line">
            <Logo tone="dark" size="sm" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2 -mr-2 text-pds-graphite hover:bg-pds-cream rounded-full"
              aria-label="Fechar menu"
            >
              <X size={26} strokeWidth={1.6} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-5">
            <ul className="space-y-1">
              {NAV.map((item) => {
                const linkClassName =
                  "flex items-center justify-between py-4 px-4 rounded-2xl text-pds-graphite font-display text-[1.4rem] hover:bg-pds-cream transition-colors";
                return (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className={linkClassName}
                      >
                        {item.label}
                        <span className="text-pds-fire text-sm">↗</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href as never}
                        onClick={() => setOpen(false)}
                        className={linkClassName}
                      >
                        {item.label}
                        <span className="text-pds-fire text-sm">→</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-5 border-t border-pds-line space-y-3">
            <Button
              href={CONTACT.whatsapp.href}
              external
              variant="secondary"
              size="md"
              className="w-full"
            >
              <MessageCircle size={18} strokeWidth={2.2} />
              WhatsApp
            </Button>
            <Button
              href={BOOKING_URL}
              external
              variant="primary"
              size="md"
              withIcon
              className="w-full"
            >
              Reservar agora
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
