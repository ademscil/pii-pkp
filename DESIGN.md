---
name: PII Pangkalpinang Design System
description: Sistem desain teknik presisi editorial untuk portal resmi Persatuan Insinyur Indonesia Cabang Pangkalpinang
colors:
  primary: "#0055A4"
  navy: "#0B2545"
  cyan: "#39A0F5"
  midnight: "#0F172A"
  surface-bg: "#F8FAFC"
  surface-card: "#FFFFFF"
  border-hairline: "#E2E8F0"
  border-dark: "#1E293B"
  text-heading: "#0F172A"
  text-body: "#334155"
  text-muted: "#475569"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  heading-2:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  section-py: "6rem"
  container-px: "1.5rem"
  grid-gap: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "#004080"
  badge-pill:
    backgroundColor: "{colors.navy}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "6px 14px"
---

# Design System & Direction

## Overview
Sistem desain resmi Persatuan Insinyur Indonesia (PII) Cabang Pangkalpinang dibangun di atas filosofi **Technical Editorial Engineering**. Mengadopsi presisi gambar teknik (CAD blueprint), garis hairline yang tegas, kontras warna tinggi, dan interaktivitas taktil yang membebaskan antarmuka dari pola visual generik (*anti-AI slop*).

## Colors
- **Brand Navy (`#0B2545`):** Digunakan untuk permukaan institusional, kartu visi-misi, dan navigasi utama.
- **Brand Blue (`#0055A4`):** Warna identitas resmi PII nasional, digunakan untuk aksi primer (CTA) dan indikator status aktif.
- **Cyan Keteknikan (`#39A0F5`):** Digunakan sebagai aksen blueprint, garis grid, dan indikator fokus pada permukaan gelap.
- **Surface Neutrals (`#F8FAFC`, `#FFFFFF`, `#0F172A`):** Latar belakang bertekstur tenang dengan kontras minimum 4.5:1 untuk seluruh teks fungsional.
- **Status Accents:** Emerald (`#047857`) untuk sertifikasi terverifikasi dan sanksi/larangan Rose (`#BE123C`).

## Typography
- **Primary Face:** Inter dengan font-feature `tabular-nums` untuk penyajian data numerik dan metrik rekayasa.
- **Heading Wrap:** Menggunakan `text-wrap: balance` pada semua elemen judul (`h1` hingga `h6`) untuk mencegah pemisahan kata yang canggung.
- **Body Wrap:** Menggunakan `text-wrap: pretty` pada elemen paragraf (`p`) untuk menghindari kata gantung (*stragglers/orphans*).
- **Legibility Floor:** Seluruh teks fungsional dan label UI wajib berukuran minimal 12px (`text-xs` / 0.75rem). Teks di bawah 11px dilarang keras.

## Layout
- **Container Structure:** Grid modular dengan padding samping responsif (1.5rem / 24px di desktop, 1rem / 16px di ponsel).
- **Spatial Pacing:** Jarak vertikal antar-seksi yang lapang (`py-20` hingga `py-24` / 5rem - 6rem) untuk ritme baca editorial.
- **No Card Nesting:** Menghindari kontainer bersarang (*cards inside cards*). Hirarki dibentuk melalui pembatas garis (*hairline dividers*), kontras tipografi, dan penyusunan data tabular.

## Elevation & Depth
- **Soft Diffusion Shadows:** Menggunakan bayangan lembut bergradasi halus dengan offset realistis (`shadow-sm`, `shadow-md`, `shadow-xl`).
- **Blueprint Gridlines:** Tekstur garis halus transparan (opacity 10%) bermotif grid 40px/48px yang membangkitkan suasana meja perancang teknik sipil dan arsitektur.
- **Banned:** Bayangan balok tanpa blur (*zero-blur offset neobrutalist box-shadows*) dilarang karena tidak sesuai dengan identitas formal organisasi profesi.

## Shapes
- **Corner Radii:** Konsisten menggunakan lengkungan lembut terkalibrasi:
  - Tombol dan badge: `rounded-xl` (12px) atau `rounded-full` (9999px).
  - Kontainer dan panel utama: `rounded-2xl` (16px).
- **Fixed Aspect Ratios:** Seluruh elemen visual (logo mitra, thumbnail foto kajian) memiliki rasio aspek eksplisit (`2:1`, `16:9`, `4:3`) untuk menjamin zero Cumulative Layout Shift (CLS = 0).

## Components
- **Interactive Pathway Selector:** Tab pemilih profil karier insinyur yang responsif dan mengarahkan pengguna ke alur pendaftaran yang relevan.
- **Self-Assessment Simulator:** Simulasi persyaratan mandiri interaktif dengan checklist langsung dan umpan balik kelayakan berkas FAIP.
- **Searchable Document Repository:** Input pencarian langsung dengan filter kategori dan tautan unduh instan ke berkas PDF resmi.
- **Action Buttons:** Tombol aksi yang jelas dengan label berorientasi tindakan (*action-driven labels*) disertai ikon panah navigasi.

## Do's and Don'ts
### Do's:
- Gunakan `text-wrap: balance` pada setiap judul bagian.
- Gunakan label kontras tinggi (minimal rasio 4.5:1 terhadap latar belakang).
- Gunakan `tabular-nums` untuk setiap nilai kuantitatif, tahun, durasi, dan nomor telepon.
- Tampilkan logo resmi PII dengan rasio aspek alami 376:536 tanpa regangan visual.

### Don'ts:
- **Dilarang** menggunakan kicker/eyebrow terpisah bertuliskan teks kapital kecil di atas heading utama. Biarkan heading berbicara dengan bobotnya sendiri.
- **Dilarang** menumpuk kartu di dalam kartu (*nested cards*). Gunakan garis pemisah atau pergeseran tata letak.
- **Dilarang** menggunakan teks gradien warna-warni yang mengaburkan keterbacaan.
- **Dilarang** menggunakan teks fungsional di bawah 11px.
