"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-lg" : "shadow-none"
      )}
      aria-label="Navigasi utama"
    >
      <div
        className={cn(
          "mx-auto flex w-full items-center justify-between border-b border-brand-fog/80 bg-white/95 px-4 py-4 backdrop-blur-lg transition-all duration-300 md:px-8",
          isScrolled ? "py-3" : "py-4"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-3"

        >
          <Image
            src="/logo-pii-black.png"
            alt="Logo Persatuan Insinyur Indonesia"
            width={376}
            height={536}
            priority
            className="h-14 w-auto"
            style={{ aspectRatio: "376 / 536" }}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-brand-midnight">
              Persatuan Insinyur Indonesia
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-blue/80">
              Cabang Pangkalpinang
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu">
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  setActiveDropdown(hasChildren ? item.label : null)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-semibold text-brand-midnight/70 transition-colors hover:text-brand-midnight"
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown className="h-4 w-4 text-brand-midnight/40" />
                  )}
                </Link>
                {hasChildren && (
                  <div
                    className={cn(
                      "pointer-events-none absolute left-1/2 top-full w-max -translate-x-1/2 rounded-2xl border border-black/5 bg-white/95 p-4 shadow-xl transition-all duration-200",
                      activeDropdown === item.label
                        ? "pointer-events-auto opacity-100"
                        : "opacity-0"
                    )}
                  >
                    <ul className="space-y-2 text-sm">
                      {item.children?.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block whitespace-nowrap rounded-xl px-4 py-2 text-brand-midnight/70 transition hover:bg-brand-fog hover:text-brand-midnight"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="https://updmember.pii.or.id/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white shadow-floating transition hover:-translate-y-0.5 hover:bg-brand-navy"
          >
            Gabung PII
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-brand-slate/20 p-2 text-brand-navy lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Buka menu navigasi"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-brand-midnight/50 transition-opacity lg:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-80 translate-x-full bg-white p-6 shadow-2xl transition-transform lg:hidden",
          mobileOpen && "translate-x-0"
        )}
        aria-label="Menu mobile"
      >
        <div className="mb-6 flex items-center justify-between">
          <Image
            src="/logo-pii-black.png"
            alt="Logo PII Pangkalpinang"
            width={376}
            height={536}
            className="h-16 w-auto"
            style={{ aspectRatio: "376 / 536" }}
          />
          <button
            type="button"
            className="rounded-full border border-brand-slate/20 p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5 text-brand-navy" />
          </button>
        </div>

        <ul className="space-y-4 text-brand-navy">
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isOpen = mobileDropdown === item.label;
            return (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-base font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      className="rounded-full border border-brand-slate/20 p-1"
                      onClick={() =>
                        setMobileDropdown(isOpen ? null : item.label)
                      }
                      aria-label={`Buka submenu ${item.label}`}
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                {hasChildren && isOpen && (
                  <ul className="mt-3 space-y-2 border-l border-brand-fog pl-4 text-sm text-brand-slate">
                    {item.children?.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block py-1"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href="https://updmember.pii.or.id/auth/register"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block rounded-2xl bg-brand-blue px-5 py-3 text-center text-sm font-semibold text-white shadow-floating"
        >
          Gabung PII Sekarang
        </Link>
      </aside>
    </header>
  );
}



