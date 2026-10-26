# PII Pangkalpinang - Next.js 14 (App Router)

Situs resmi Persatuan Insinyur Indonesia Cabang Pangkalpinang yang meniru tata letak dan gaya UI situs PII pusat, namun seluruh konten sudah dipersonalisasi untuk Pangkalpinang/Bangka Belitung.

## Stack
- Next.js 14 + App Router + TypeScript
- Tailwind CSS (konfigurasi tema brand khusus)
- keen-slider untuk seluruh carousel
- Lucide Icons
- Konten dummy dipisahkan di `src/data/site-content.ts` (siap disambungkan ke CMS)

## Menjalankan Secara Lokal
```bash
npm install
npm run dev
# buka http://localhost:3000
```

## Build & Start Produksi
```bash
npm run build
npm run start
```

## Struktur Direktori
```
src/
  app/                     # Entry App Router & styling global
  components/
    layout/                # Header & Footer
    sections/              # Seksi halaman (hero, layanan, berita, dll)
  data/                    # Sumber data dummy terstruktur
  lib/                     # Utilitas kecil (cn)
public/
  logo-pii-black.png       # Logo resmi PII pusat
  favicon.ico, og-image.png
```

## Mengganti Konten
Seluruh komponen membaca data dari `src/data/site-content.ts`. File ini menyimpan:
- `navItems`, `heroSlides`, `services`, `news`, `chairInsights`, `engineerInsights`
- `membershipBenefits`, `agenda`, `partners`, `documents`, `footerContent`
- `aboutContent`, `bannerHighlight`

Cukup ubah teks/tautan/gambar di file tersebut atau ganti dengan fetch dari CMS yang mengembalikan struktur objek yang sama.

## Aksesibilitas & UX
- Heading dan landmark semantik terjaga.
- Alt teks tersedia pada seluruh gambar.
- Slider memiliki label dan kontrol keyboard.
- Header lengket dan mengecil saat scroll.

## SEO
- Metadata, Open Graph, dan Twitter Card disetel di `src/app/layout.tsx`.
- Base URL diarahkan ke `https://piipkp.or.id`.
- Gambar hero & OG sudah disiapkan di `public/`.

## Catatan Teknis
- `tailwind.config.ts` menambahkan warna brand, shadow, container, dan utilitas.
- `next.config.mjs` memperbolehkan gambar dari Unsplash, dummyimage, is3.cloudhost.id, dan www.pii.or.id.
- Keen Slider diinisialisasi per seksi (`hero-slider`, `insight-carousel`, `benefits-carousel`, `agenda-slider`).
- Utilitas `cn` menggabungkan kelas Tailwind dengan `clsx` + `tailwind-merge`.

## Deploy
Proyek siap deploy ke platform hosting Node.js (mis. Vercel, Netlify, Render, VPS). Pastikan menjalankan perintah berikut:
```bash
npm run build
npm run start
```
Server akan berjalan pada port `3000` secara default. Sesuaikan env jika dibutuhkan (mis. `PORT`, `NEXT_PUBLIC_*`).