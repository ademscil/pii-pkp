import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { footerContent } from "@/data/site-content";

const phonePlain = footerContent.phone.replace(/[^+\d]/g, "");


const socialIcons = {
  Facebook,
  Instagram,
  X: Twitter,
  Twitter,
  LinkedIn: Linkedin,
  YouTube: Youtube,
};

export function Footer() {
  return (
    <footer
      className="bg-white pt-16 pb-10"
      id="kontak"
      aria-labelledby="footer-heading"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <Link
              href="#beranda"
              className="inline-flex items-center gap-3"
              aria-label="Persatuan Insinyur Indonesia Cabang Pangkalpinang - Kembali ke beranda"
            >
              <Image
                src="/logo-pii-black.png"
                alt="Logo PII Pangkalpinang"
                width={38}
                height={54}
                style={{ aspectRatio: "376 / 536" }}
                className="h-12 w-auto object-contain"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-slate">
                Cabang Pangkalpinang
              </span>
            </Link>
            <p className="max-w-2xl text-base text-brand-slate">
              Hub organisasi resmi Persatuan Insinyur Indonesia Cabang
              Pangkalpinang. Kami mempertemukan insinyur lintas disiplin,
              memfasilitasi keanggotaan, serta mengawal proyek strategis Bangka
              Belitung.
            </p>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-slate">
                {footerContent.addressLabel}
              </h3>
              <p className="mt-2 text-brand-midnight">{footerContent.address}</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={`tel:${phonePlain}`}
                className="rounded-full border border-brand-fog px-4 py-2 text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
              >
                WhatsApp {footerContent.phone}
              </a>
              <a
                href={`mailto:${footerContent.email}`}
                className="rounded-full border border-brand-fog px-4 py-2 text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
              >
                {footerContent.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {footerContent.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-fog px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3
              id="footer-heading"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-slate"
            >
              Tetap Terhubung
            </h3>
            <p className="text-brand-slate">
              Ikuti kanal resmi kami untuk kabar agenda, peluang kolaborasi, dan
              update program insinyur di Pangkalpinang.
            </p>
            <div className="flex flex-wrap gap-3">
              {footerContent.socials.map((social) => {
                const Icon =
                  socialIcons[social.name as keyof typeof socialIcons];
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-fog text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : social.name[0]}
                  </Link>
                );
              })}
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-brand-slate">
              {footerContent.policies.map((policy) => (
                <Link
                  key={policy.label}
                  href={policy.href}
                  className="transition hover:text-brand-blue"
                >
                  {policy.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-fog pt-6 text-sm text-brand-slate">
          © Hak Cipta 2025 Persatuan Insinyur Indonesia Cabang Pangkalpinang.
          Seluruh hak cipta dilindungi undang-undang.
        </div>
      </div>
    </footer>
  );
}









