# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- Insinyur profesional, sarjana teknik (S.T.), sarjana terapan teknik (S.Tr.T.), dan calon insinyur di wilayah Kota Pangkalpinang dan Provinsi Kepulauan Bangka Belitung.
- Instansi pemerintah daerah (Dinas PUPR, Bappeda, Dinas ESDM, Dinas Lingkungan Hidup) yang memerlukan kajian teknis independen dan penilai ahli kegagalan bangunan.
- Industri mitra (BUMN pertambangan, kontraktor EPC, konsultan perencana/pengawas) yang memerlukan verifikasi legalitas Surat Tanda Registrasi Insinyur (STRI).

## Product Purpose
Portal resmi cabang untuk Persatuan Insinyur Indonesia (PII) Cabang Pangkalpinang (`piipkp.or.id`). Berfungsi sebagai etalase otoritatif keinsinyuran daerah, pusat panduan sertifikasi profesional (IPP, IPM, IPU, PPI/RPL, STRI), repositori kajian keteknikan strategis Bangka Belitung 2045, kalender agenda CPD/SKPK, dan kanal verifikasi legalitas profesi.

## Positioning
Satu-satunya organisasi profesi keinsinyuran resmi yang diamanatkan oleh UU Republik Indonesia No. 11 Tahun 2014 di tingkat Kota Pangkalpinang, memayungi seluruh badan kejuruan teknik dan bertindak sebagai mitra strategis pembangunan infrastruktur kepulauan.

## Operating Context
- Web publik responsif (desktop, tablet, mobile) dengan performa muat instan (static site generation Next.js 14).
- Terintegrasi langsung dengan portal nasional PII: SIMPoRE (simpore.pii.or.id) untuk FAIP, UPD Member (updmember.pii.or.id) untuk registrasi keanggotaan dan STRI, serta sistem registrasi sertifikasi nasional (registrasi.pii.or.id).
- Lingkungan produksi beroperasi di domain `piipkp.or.id`.

## Capabilities and Constraints
- Kepatuhan penuh terhadap standar aksesibilitas WCAG 2.1 AA (kontras rasio minimal 4.5:1, label nama form, hierarki heading terstruktur).
- Nol runtime error, nol layout shift (CLS = 0), dan nol console warnings.
- Preservasi identitas resmi: Logo PII (`/logo-pii-black.png` dan SVG) dipertahankan sesuai pedoman identitas visual resmi PII.

## Brand Commitments
- Warna Primer: Biru PII (`#0055A4`), Biru Navy Otoritatif (`#0B2545`), Aksen Cyan Keteknikan (`#39A0F5`).
- Typografi: Sans-serif presisi (Inter) dengan keterbacaan tinggi dan tabular numerals untuk data teknis.
- Nada Komunikasi: Otoritatif, profesional, presisi, mencerminkan integritas keteknikan dan etika luhur Catur Karsa Sapta Dharma Insinyur Indonesia.

## Evidence on Hand
- SK Pengurus Pusat PII Masa Bakti 2024–2027 (`public/documents/surat-keterangan-organisasi-pii-pkp.pdf`).
- Data keanggotaan cabang (380+ insinyur terdata di 14 Badan Kejuruan).
- Rujukan hukum: Undang-Undang No. 11 Tahun 2014 tentang Keinsinyuran.

## Product Principles
1. Otoritas Legal Tanpa Kompromi: Memastikan seluruh praktisi teknik memahami dan mematuhi kewajiban STRI untuk perlindungan hukum dalam praktik keinsinyuran.
2. Kejelasan Alur Sertifikasi: Menyederhanakan proses registrasi dan penyusunan FAIP menjadi panduan interaktif yang transparan dan mudah diakses.
3. Kemitraan Pembangunan Kepulauan: Mengawal inisiatif strategis hilirisasi, transisi energi kolong pascatambang, dan ketahanan tata air Bangka Belitung.

## Accessibility & Inclusion
- Standar WCAG 2.1 AA dan kepatuhan penuh MDN Web Docs.
- Dukungan preferensi pengurangan gerak (`prefers-reduced-motion`).
- Struktur semantik HTML5 dengan skip link (`#main-content`) dan ARIA labels terverifikasi.

