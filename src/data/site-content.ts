export type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
};

export type HeroSlide = {
  id: string;
  title: string;
  summary: string[];
  image: string;
  link: string;
  tag: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  href: string;
};

export type ArticleItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  views?: number;
  author?: string;
  image: string;
  link: string;
};

export type BenefitSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

export type AgendaItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  mode: "Hybrid" | "Offline" | "Online";
  location: string;
  image: string;
  link: string;
};

export type PartnerItem = {
  name: string;
  logo: string;
  href: string;
};

export const aboutContent = {
  history: {
    title: "Tentang PII Cabang Pangkalpinang",
    lead:
      "Persatuan Insinyur Indonesia (PII) Cabang Pangkalpinang merupakan wadah resmi organisasi profesi keinsinyuran di Ibukota Provinsi Kepulauan Bangka Belitung yang berakar dari sejarah panjang keinsinyuran nasional.",
    paragraphs: [
      "Persatuan Insinyur Indonesia (PII) didirikan secara nasional pada tanggal 23 Mei 1952 di Bandung oleh para tokoh perintis keinsinyuran Indonesia, Ir. Djuanda Kartawidjaja dan Dr. Ir. Roosseno, guna menghimpun potensi dan karya keteknikan dalam membangun kedaulatan bangsa.",
      "Berdasarkan Undang-Undang Nomor 11 Tahun 2014 tentang Keinsinyuran dan Peraturan Pemerintah Nomor 25 Tahun 2019, PII mengemban mandat pembinaan profesi keinsinyuran, registrasi keinsinyuran melalui Surat Tanda Registrasi Insinyur (STRI), Pengembangan Keprofesian Berkelanjutan (PKB), serta penegakan kode etik Catur Karsa dan Sapta Dharma Insinyur Indonesia.",
      "Di Kota Pangkalpinang, roda organisasi saat ini dijalankan oleh Pengurus Cabang masa bakti 2024–2027 di bawah kepemimpinan Ketua Ir. Hadi Fitriyansyah, ST., M.PWK. bersama segenap jajaran pengurus, bersinergi dengan pemerintah daerah dan akademisi dalam mengawal perencanaan infrastruktur perkotaan, mitigasi drainase, serta pembinaan kompetensi insinyur daerah.",
    ],
    timeline: [
      {
        period: "1952",
        title: "Kelahiran PII Nasional",
        description:
          "Pendirian Persatuan Insinyur Indonesia pada 23 Mei 1952 di Bandung oleh Ir. Djuanda Kartawidjaja dan Dr. Ir. Roosseno sebagai wadah pemersatu insinyur seluruh Indonesia.",
      },
      {
        period: "2014",
        title: "Pengesahan UU Keinsinyuran",
        description:
          "Diterbitkannya UU No. 11 Tahun 2014 tentang Keinsinyuran yang menetapkan mandat pembinaan profesi, registrasi STRI, dan standar kompetensi insinyur di Indonesia.",
      },
      {
        period: "2019",
        title: "Peraturan Pemerintah Pelaksanaan",
        description:
          "Pengundangan PP No. 25 Tahun 2019 tentang Peraturan Pelaksanaan UU Keinsinyuran yang mengatur mekanisme sertifikasi, majelis uji kompetensi, dan Pengembangan Keprofesian Berkelanjutan (PKB).",
      },
      {
        period: "2024–2027",
        title: "Kepengurusan PII Pangkalpinang",
        description:
          "Pengukuhan Pengurus Cabang PII Kota Pangkalpinang periode 2024–2027 di bawah kepemimpinan Ir. Hadi Fitriyansyah, ST., M.PWK., mengawal sinergi keteknikan dan tata ruang kota.",
      },
    ],
  },
  vision: {
    title: "Visi & Misi",
    vision:
      "Menjadi katalis insinyur Bangka Belitung yang kompeten, berintegritas, dan memimpin transformasi industri berkelanjutan.",
    missions: [
      "Menguatkan kompetensi anggota melalui program profesi dan sertifikasi.",
      "Menghadirkan solusi advokasi teknik untuk pemerintah dan industri.",
      "Mendorong inovasi hijau dan digital pada seluruh proyek strategis daerah.",
    ],
  },
  board: {
    title: "Struktur Pengurus Cabang PII Pangkalpinang 2024–2027",
    sections: [
      {
        heading: "Dewan Pembina",
        people: [
          { role: "", name: "Walikota Pangkalpinang" },
          { role: "", name: "Sekda Kota Pangkalpinang" },
          { role: "", name: "Kapolres Kota Pangkalpinang" },
          { role: "", name: "Kejari Kota Pangkalpinang" },
          { role: "", name: "Pengurus PII Provinsi Kepulauan Bangka Belitung" },
        ],
      },
      {
        heading: "Dewan Penasehat",
        people: [
          { role: "", name: "H. Heriady, ST." },
          { role: "", name: "Ir. Damardi, S.ST., MM., IPM., ASEAN Eng." },
        ],
      },
      {
        heading: "Pengurus Cabang",
        people: [
          { role: "Ketua", name: "Ir. Hadi Fitriyansyah, ST., M.PWK." },
          { role: "Wakil Ketua", name: "Febri Guinesna Putra, ST., MUD." },
          { role: "Sekretaris", name: "Rifqi Adi Nugraha, ST., M.Si." },
          { role: "Bendahara", name: "Arsha Riyantkha Meraldha, ST., M.PWK." },
          { role: "Wakil Bendahara", name: "Fadiah Izzah Ajrina, M.PWK." },
        ],
      },
      {
        heading: "Bidang Pengembangan Kawasan, Tata Ruang, dan Permukiman",
        people: [
          { role: "Ketua", name: "Fadiah Izzah Ajrina, M.PWK." },
          { role: "Anggota", name: "Arsha Riyantkha Meraldha, ST., M.PWK." },
          { role: "Anggota", name: "Widya Utami, ST." },
        ],
      },
      {
        heading: "Bidang Arsitek dan Konstruksi Sipil",
        people: [
          { role: "Ketua", name: "Ravy Ray Laksamana, ST." },
          { role: "Anggota", name: "Seldy, ST." },
          { role: "Anggota", name: "Ridho Agustian, ST." },
          { role: "Anggota", name: "Rivaldi, ST." },
          { role: "Anggota", name: "Muhammad Fajar Aprilian, S.Ds." },
          { role: "Anggota", name: "Imam Sodikun, S.Ars." },
        ],
      },
      {
        heading: "Bidang Pertanian, Peternakan, Kehutanan, dan Lingkungan Hidup",
        people: [
          { role: "Ketua", name: "Dudy Gilang, S.Si." },
          { role: "Anggota", name: "Fahri Setiawan, SP., M.Si." },
          { role: "Anggota", name: "Zuissar Wahyu" },
        ],
      },
      {
        heading: "Bidang Energi, Industri, dan Rekayasa Teknologi",
        people: [
          { role: "Ketua", name: "Ir. Okta Nopriansyah, ST." },
          { role: "Anggota", name: "Belly, ST." },
        ],
      },
      {
        heading: "Komite Humas, Media, Publikasi, Keanggotaan, Registrasi, dan Kesekretariatan",
        people: [{ role: "Ketua", name: "Adam Juliansyah, S.Kom." }],
      },
      {
        heading: "Komite Pendidikan, Pelatihan, dan Kerjasama Antar Lembaga",
        people: [{ role: "Ketua", name: "Ir. Hadi Fitriyansyah, ST., M.PWK." }],
      },
      {
        heading: "Komite Pengawas Internal dan Pengembangan Organisasi",
        people: [
          { role: "Ketua", name: "Aripin, ST." },
          { role: "Anggota", name: "H. Heriady, ST." },
        ],
      },
    ],
  },
};

export const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Tentang",
    href: "/tentang/sejarah",
    children: [
      { label: "Sejarah PII Pangkalpinang", href: "/tentang/sejarah" },
      { label: "Visi & Misi", href: "/tentang/visi-misi" },
      { label: "Struktur Pengurus", href: "/tentang/struktur" },
    ],
  },
  {
    label: "Warta",
    href: "/#berita",
  },
  { label: "Agenda", href: "/#agenda" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Dokumen", href: "/#dokumen" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: "kelembagaan-cabang",
    title:
      "Persatuan Insinyur Indonesia Cabang Pangkalpinang Periode 2024–2027",
    summary: [
      "Wadah resmi organisasi profesi keinsinyuran bagi para insinyur dan praktisi teknik di Kota Pangkalpinang di bawah naungan Pengurus Wilayah PII Provinsi Kepulauan Bangka Belitung.",
      "Mengemban mandat UU No. 11 Tahun 2014 untuk menegakkan standar kompetensi profesi dan menjunjung tinggi kode etik Catur Karsa dan Sapta Dharma Insinyur Indonesia.",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    link: "/tentang/struktur",
    tag: "Kelembagaan Cabang",
  },
  {
    id: "drainase-perkotaan",
    title:
      "Dukungan Teknis Masterplan Drainase & Mitigasi Banjir Kota Pangkalpinang",
    summary: [
      "Pengurus Cabang PII bersinergi mendukung Pemerintah Kota Pangkalpinang dalam telaah infrastruktur drainase perkotaan berkelanjutan dan integrasi metode zero run-off.",
      "Menghadirkan sumbangsih kepakaran teknik sipil, tata ruang perkotaan, dan hidrologi untuk memperkuat ketahanan kawasan perkotaan terhadap risiko genangan air.",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    link: "/#berita",
    tag: "Kajian Infrastruktur",
  },
  {
    id: "sertifikasi-stri",
    title:
      "Fasilitasi Sertifikasi Insinyur Profesional & Percepatan Registrasi STRI",
    summary: [
      "Mendorong praktisi keteknikan di Pangkalpinang memenuhi legalitas berpraktik keinsinyuran melalui Program Profesi Insinyur (PPI) dan penilaian Insinyur Profesional (IPP/IPM/IPU).",
      "Memfasilitasi pemenuhan Satuan Kredit Pengembangan Keprofesian Berkelanjutan (SKPK) yang terintegrasi dengan Sistem Informasi Jasa Konstruksi (SIKI).",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    link: "/#layanan",
    tag: "Sertifikasi Profesi",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Keanggotaan PII Nasional",
    description:
      "Registrasi dan penerbitan kartu anggota dilakukan oleh Sekretariat Jenderal PII pusat melalui portal resmi.",
    highlights: [
      "Portal pendaftaran: updmember.pii.or.id",
      "Cabang membantu pratinjau dokumen sebelum diajukan ke pusat",
      "Kartu digital dan fisik diterbitkan langsung oleh PII pusat",
    ],
    ctaLabel: "Buka Portal Keanggotaan",
    href: "https://updmember.pii.or.id/auth/register",
  },
  {
    title: "Program Profesi Insinyur (PPI)",
    description:
      "Penjadwalan kelas, asesmen, dan yudisium PPI dikelola terpusat oleh PII dan perguruan tinggi mitra nasional.",
    highlights: [
      "Informasi batch nasional tersedia di pii.or.id/layanan/program-profesi-insinyur",
      "Cabang memfasilitasi surat rekomendasi dan asesmen awal daerah",
      "Kontak resmi: ppi@pii.or.id",
    ],
    ctaLabel: "Kunjungi Portal PPI",
    href: "https://www.pii.or.id/layanan/program-profesi-insinyur",
  },
  {
    title: "Sertifikasi & SKK/SKIP",
    description:
      "Penilaian Insinyur Profesional dan penerbitan SKK/SKIP berada di bawah Dewan Insinyur PII pusat.",
    highlights: [
      "Panduan lengkap tersedia di pii.or.id/layanan/sertifikasi",
      "Cabang menyediakan klinik review sebelum sidang pusat",
      "Informasi jadwal asesmen nasional diperbarui oleh PII pusat",
    ],
    ctaLabel: "Portal Sertifikasi PII",
    href: "https://www.pii.or.id/layanan/sertifikasi",
  },
  {
    title: "Advokasi & Bantuan Hukum",
    description:
      "Penanganan sengketa keteknikan skala nasional dikordinasikan oleh tim advokasi PII pusat.",
    highlights: [
      "Informasi layanan lengkap tersedia di pii.or.id/layanan/advokasi",
      "Cabang membantu merangkum kronologi lokal untuk tim pusat",
      "Hotline pusat siaga 24/7 bagi anggota aktif",
    ],
    ctaLabel: "Hubungi Tim Advokasi Pusat",
    href: "https://www.pii.or.id/layanan/advokasi",
  },
];

export const bannerHighlight = {
  title: "Sinergi Keinsinyuran untuk Kemajuan Kota Pangkalpinang",
  description:
    "Persatuan Insinyur Indonesia (PII) Cabang Pangkalpinang mengonsolidasikan kepakaran insinyur daerah dalam mengawal pembangunan infrastruktur perkotaan berkelanjutan, mitigasi drainase, serta pembinaan kompetensi profesi insinyur berlandaskan UU No. 11 Tahun 2014.",
  ctaLabel: "Portal Keanggotaan Resmi PII",
  ctaHref: "https://updmember.pii.or.id/auth/register",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
};

export const news: ArticleItem[] = [
  {
    id: "news-01",
    title:
      "Dukung Program Walikota, PII Pangkalpinang Kawal Kajian Masterplan Drainase & Zero Run-Off Perkotaan",
    excerpt:
      "Menyikapi penataan ruang dan mitigasi genangan banjir di Pangkalpinang, Pengurus Cabang PII menyiapkan telaah teknis sistem zero run-off dan integrasi masterplan drainase perkotaan guna mendukung program kerja Pemerintah Kota.",
    date: "Rabu, 21 Oktober 2026",
    category: "Kajian Strategis",
    author: "Tim Advokasi Teknik PII PKP",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/pii_pangkalpinang/",
  },
  {
    id: "news-02",
    title:
      "Pengurus PII Pangkalpinang Hadiri Rapat Koordinasi Korwil Sumatera III",
    excerpt:
      "Pengurus Cabang PII Pangkalpinang mengikuti agenda Rapat Koordinasi Korwil Sumatera III bersama Pengurus Pusat PII dan perwakilan wilayah Sumatera Bagian Selatan dalam rangka sinkronisasi kelembagaan dan pembinaan anggota.",
    date: "Senin, 12 Oktober 2026",
    category: "Organisasi",
    author: "Sekretariat Cabang",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/pii_pangkalpinang/",
  },
  {
    id: "news-03",
    title:
      "Peringatan HUT PII ke-74: 'Wujudkan Re-Industrialisasi, Insinyur Indonesia Jadi Pilar Inovasi Dunia'",
    excerpt:
      "Menyambut momentum syukuran HUT PII ke-74 secara nasional, PII Cabang Pangkalpinang menegaskan komitmen insinyur kepulauan dalam mengawal profesionalisme, integritas kode etik, dan kemandirian teknologi daerah.",
    date: "Jum'at, 5 Juni 2026",
    category: "Organisasi",
    author: "Humas PII Pangkalpinang",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/pii_pangkalpinang/",
  },
];

export const membershipBenefits: BenefitSlide[] = [
  {
    id: "benefit-01",
    title: "Legalitas Praktik Keinsinyuran & Registrasi STRI",
    description:
      "Memenuhi amanat UU No. 11/2014 dan PP No. 25/2019 untuk memperoleh hak berpraktik resmi keinsinyuran melalui Surat Tanda Registrasi Insinyur (STRI).",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    link: "https://updmember.pii.or.id/auth/register",
  },
  {
    id: "benefit-02",
    title: "Sertifikasi Kompetensi Insinyur Profesional",
    description:
      "Akses jenjang sertifikasi kompetensi Insinyur Profesional Pratama (IPP), Madya (IPM), hingga Utama (IPU) yang diakui secara nasional dan regional ASEAN.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    link: "https://updmember.pii.or.id/auth/register",
  },
  {
    id: "benefit-03",
    title: "Pengembangan Keprofesian Berkelanjutan (PKB/SKPK)",
    description:
      "Pemenuhan nilai kredit Satuan Kredit Pengembangan Keprofesian melalui lokakarya, seminar keteknikan, dan webinar terakreditasi SIKI LPJK.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    link: "https://updmember.pii.or.id/auth/register",
  },
  {
    id: "benefit-04",
    title: "Naungan Kode Etik Catur Karsa Sapta Dharma",
    description:
      "Perlindungan integritas profesi dan advokasi praktik keinsinyuran berlandaskan prinsip luhur etika profesi insinyur Indonesia.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    link: "https://updmember.pii.or.id/auth/register",
  },
];

export const agenda: AgendaItem[] = [
  {
    id: "agenda-01",
    title:
      "Webinar PKB: Infrastruktur Drainase Perkotaan Berkelanjutan: Integrasi Metode Zero Run-Off Pada Masterplan Drainase Kota",
    date: "Rabu, 21 Oktober 2026 (08.30 WIB)",
    category: "Webinar",
    mode: "Online",
    location: "Zoom Cloud Meeting & Integrasi SIKI LPJK (FTSL ITB x Dinas BMPR Jabar)",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/pii_pangkalpinang/",
  },
  {
    id: "agenda-02",
    title:
      "Rapat Koordinasi Wilayah Korwil Sumatera III (Sumsel, Lampung, Babel, Bengkulu)",
    date: "Senin, 12 Oktober 2026 (15.00 WIB)",
    category: "Musyawarah",
    mode: "Online",
    location: "Zoom Meeting ID: 840 3458 2089 (Pengurus Pusat PII)",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/pii_pangkalpinang/",
  },
  {
    id: "agenda-03",
    title:
      "Syukuran Peringatan HUT PII ke-74: 'Wujudkan Re-Industrialisasi, Insinyur Indonesia Jadi Pilar Inovasi Dunia'",
    date: "Jum'at, 5 Juni 2026 (08.30 WIB)",
    category: "Sidang Profesi",
    mode: "Online",
    location: "Zoom Meeting ID: 832 8627 4437 (Passcode: HUT.PII74, Pengurus Pusat PII)",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/pii_pangkalpinang/",
  },
];

export const partners: PartnerItem[] = [
  {
    name: "PT Pindad",
    logo: "/partners/pindad.png",
    href: "https://www.pindad.com",
  },
  {
    name: "Karya Teknologi Abadi",
    logo: "/partners/kta.png",
    href: "https://karyateknologiabadi.com",
  },
  {
    name: "Universitas Bangka Belitung",
    logo: "/partners/universitas-bangka-belitung.jpg",
    href: "https://ubb.ac.id",
  },
  {
    name: "Tripatra",
    logo: "/partners/tripatra.png",
    href: "https://www.tripatra.com/id",
  },
  {
    name: "PT Timah Tbk",
    logo: "/partners/pt-timah.png",
    href: "https://www.pttimah.co.id",
  },
  {
    name: "PT Jaya Konstruksi",
    logo: "/partners/jaya-konstruksi.png",
    href: "https://www.jayakonstruksi.com/index.php",
  },
  {
    name: "Pelindo",
    logo: "/partners/pelindo.png",
    href: "https://www.pelindo.co.id/",
  },
  {
    name: "Cirebon Power",
    logo: "/partners/cirebon-power.png",
    href: "https://www.cirebonpower.co.id/id/",
  },
  {
    name: "Green Corridor Group",
    logo: "/partners/green-corridor.jpg",
    href: "https://www.pii.or.id/green%20corridor%20group",
  },
  {
    name: "Nginovasi",
    logo: "/partners/nginovasi.png",
    href: "https://nginovasi.com/",
  },
  {
    name: "PT DQC",
    logo: "/partners/pt-dqc.png",
    href: "https://www.ptdqc.com/",
  },
  {
    name: "Polman Babel",
    logo: "/partners/polman-babel.png",
    href: "https://polman-babel.ac.id",
  },
];

export const footerContent = {
  addressLabel: "Sekretariat PII Cabang Pangkalpinang",
  address:
    "Jl. Jenderal Ahmad Yani No. 88, Kel. Gajah Mada, Kec. Taman Sari, Pangkalpinang 33121",
  phone: "+62 818 0670 1775",
  email: "piipkp@gmail.com",
  hashtags: ["#InsinyurKompeten", "#BangsaUnggul", "#PIIPangkalpinang"],
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/piipangkalpinang" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pii_pangkalpinang/",
    },
    { name: "X", href: "https://x.com/pii_pangkalpinang" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/pii-pangkalpinang" },
    { name: "YouTube", href: "https://www.youtube.com/@piipangkalpinang" },
  ],
  policies: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ],
};

export const documents = [
  {
    title: "Surat Keterangan Organisasi PII Cabang Pangkalpinang",
    description:
      "Dokumen resmi keterangan kepengurusan organisasi dan penetapan domain piipkp.or.id.",
    href: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
  },
  {
    title: "Undang-Undang RI No. 11 Tahun 2014 tentang Keinsinyuran",
    description:
      "Landasan hukum pokok praktik keinsinyuran, sertifikasi profesi, dan mandat registrasi STRI di Indonesia.",
    href: "https://peraturan.bpk.go.id/Details/38580/uu-no-11-tahun-2014",
  },
  {
    title: "Peraturan Pemerintah RI No. 25 Tahun 2019",
    description:
      "Peraturan pelaksanaan UU Keinsinyuran mengenai uji kompetensi, Program Profesi Insinyur, dan PKB.",
    href: "https://peraturan.bpk.go.id/Details/107056/pp-no-25-tahun-2019",
  },
  {
    title: "Panduan Sertifikasi Insinyur Profesional & Portofolio FAIP",
    description:
      "Informasi resmi jalur pendaftaran Insinyur Profesional dan tata cara pengisian formulir portofolio PII Pusat.",
    href: "https://www.pii.or.id/layanan/sertifikasi",
  },
];











