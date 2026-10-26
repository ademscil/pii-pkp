"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, FileText, ArrowRight, HelpCircle } from "lucide-react";

type Track = {
  id: string;
  code: string;
  title: string;
  badge: string;
  minExp: string;
  credits: string;
  description: string;
  criteria: string[];
  documents: string[];
  targetAudience: string;
  majelisDuration: string;
  ctaText: string;
  ctaUrl: string;
};

const tracks: Track[] = [
  {
    id: "ipp",
    code: "IPP",
    title: "Insinyur Profesional Pratama",
    badge: "Jenjang Awal",
    minExp: "Minimal 3 Tahun Praktik",
    credits: "Target 600 SKPK",
    description:
      "Tingkat sertifikasi kompetensi awal bagi sarjana teknik/insinyur yang telah mengumpulkan rekam jejak praktik nyata dalam perancangan, pelaksanaan, atau operasi keinsinyuran.",
    criteria: [
      "Ijazah S.T. / S.Tr.T terakreditasi dari perguruan tinggi",
      "Pengalaman kerja teknis terbukti minimal 3 tahun berturut-turut",
      "Pernah terlibat dalam minimal 2 proyek rekayasa keteknikan",
      "Telah terdaftar sebagai anggota aktif Persatuan Insinyur Indonesia",
    ],
    documents: [
      "FAIP (Formulir Aplikasi Insinyur Profesional)",
      "Portofolio Laporan Proyek & Sertifikat Pelatihan",
      "Surat Referensi dari Atasan / Rekan IPM/IPU",
    ],
    targetAudience: "Fresh engineers, junior supervisor, site engineer, analis teknis.",
    majelisDuration: "2 - 3 Pekan (Verifikasi Dokumen Badan Kejuruan)",
    ctaText: "Daftar Sertifikasi IPP Nasional",
    ctaUrl: "https://updmember.pii.or.id/auth/register",
  },
  {
    id: "ipm",
    code: "IPM",
    title: "Insinyur Profesional Madya",
    badge: "Jenjang Menengah",
    minExp: "Minimal 7 Tahun Praktik",
    credits: "Target 1.500 SKPK",
    description:
      "Standar profesional bagi insinyur yang telah memimpin proyek strategis, memegang tanggung jawab teknis independen, dan mengelola risiko multidisiplin.",
    criteria: [
      "Telah mengantongi gelar profesi Insinyur (Ir.) dan KTA PII aktif",
      "Pengalaman praktik keinsinyuran mandiri minimal 7 tahun",
      "Memiliki kepemimpinan teknis pada proyek bernilai strategis",
      "Bukti partisipasi CPD/PKB (Pengembangan Keprofesian Berkelanjutan)",
    ],
    documents: [
      "Narasi Portofolio Proyek Utama (Engineering Case Study)",
      "Bukti SKK/Jabatan Manajerial Rekayasa",
      "Sertifikat Keikutsertaan Seminar & Lokakarya Teknis",
    ],
    targetAudience: "Project manager, lead consultant, chief engineer daerah, pengajar teknik.",
    majelisDuration: "3 - 4 Pekan (Termasuk Sidang Wawancara Majelis)",
    ctaText: "Ajukan Sidang Majelis IPM",
    ctaUrl: "https://updmember.pii.or.id/auth/register",
  },
  {
    id: "ipu",
    code: "IPU",
    title: "Insinyur Profesional Utama",
    badge: "Tingkat Tertinggi",
    minExp: "Minimal 12 Tahun Praktik",
    credits: "Target 3.000 SKPK",
    description:
      "Tingkat kehormatan dan keahlian tertinggi. Insinyur Utama diakui sebagai otoritas teknis nasional, perumus kebijakan rekayasa, penasihat strategis, dan penguji sidang majelis.",
    criteria: [
      "Pengalaman rekayasa tingkat tinggi lebih dari 12 tahun",
      "Rekam jejak kontribusi orisinal pada infrastruktur, industri, atau riset nasional",
      "Pengakuan kepemimpinan etik dan bimbingan terhadap insinyur muda",
      "Publikasi teknis, paten teknologi, atau regulasi standar industri",
    ],
    documents: [
      "Dokumen Portofolio Karya Monumental Keinsinyuran",
      "Surat Dukungan 3 Insinyur Utama (IPU) Senior",
      "Daftar Publikasi / Rekayasa Teknologi Nasional",
    ],
    targetAudience: "Direktur teknis, konsultan ahli utama, dewan penasehat infrastruktur.",
    majelisDuration: "Sidang Pleno Majelis Penilai Pusat",
    ctaText: "Konsultasi Jalur IPU Cabang",
    ctaUrl: "https://wa.me/6281806701775?text=Halo%20Sekretariat%20PII%20Pangkalpinang,%20saya%20ingin%20konsultasi%20jalur%20IPU",
  },
  {
    id: "rpl",
    code: "PPI/RPL",
    title: "Program Profesi Insinyur (RPL)",
    badge: "Pendidikan Tinggi",
    minExp: "Portofolio Pengalaman Nyata",
    credits: "Konversi SKS Akademik",
    description:
      "Jalur rekognisi pembelajaran lampau (RPL) untuk meraih gelar profesi resmi Insinyur (Ir.) dari perguruan tinggi terakreditasi berdasarkan pengalaman kerja terdokumentasi tanpa kuliah reguler penuh.",
    criteria: [
      "Lulusan S1 Teknik minimal 4 tahun kelulusan",
      "Memiliki portofolio rekam kerja bidang rekayasa secara kontinu",
      "Siap mengikuti penyusunan berkas portofolio konversi 24 SKS",
      "Kerjasama resmi PII dengan UBB, Polman Babel, ITB, UGM, dan PTN/PTS mitra",
    ],
    documents: [
      "Transkrip Nilai Sarjana & Ijazah S1 Teknik Legalisir",
      "Portofolio Rekam Jejak Lapangan (Curriculum Vitae Teknis)",
      "Surat Keterangan Pengalaman Kerja dari Instansi/Perusahaan",
    ],
    targetAudience: "Praktisi sarjana teknik yang belum memiliki gelar resmi Insinyur (Ir.).",
    majelisDuration: "1 Semester (Penilaian Portofolio & Yudisium Kampus)",
    ctaText: "Panduan Jalur RPL Bangka Belitung",
    ctaUrl: "https://wa.me/6281806701775?text=Halo%20PII%20Pangkalpinang,%20mohon%20info%20pendaftaran%20PPI%20RPL%20mitra%20Babel",
  },
  {
    id: "stri",
    code: "STRI",
    title: "Surat Tanda Registrasi Insinyur",
    badge: "Legalitas Negara",
    minExp: "Pasca-Sertifikasi IPP/IPM/IPU",
    credits: "Kepatuhan UU No. 11/2014",
    description:
      "Dokumen legalitas tertinggi yang diterbitkan oleh PII dan diakui pemerintah Republik Indonesia. Wajib dimiliki setiap insinyur yang melakukan penandatanganan teknis, supervisi legal, atau praktik keinsinyuran.",
    criteria: [
      "Telah mengantongi Sertifikat Insinyur Profesional (IPP / IPM / IPU)",
      "Menandatangani Pakta Integritas dan Kode Etik Insinyur Indonesia",
      "Masa berlaku 5 tahun dan dapat diperpanjang secara berkala",
      "Terdaftar dalam basis data legal kementerian dan otoritas keteknikan",
    ],
    documents: [
      "Salinan Sertifikat Insinyur Profesional yang Masih Berlaku",
      "Kartu Tanda Anggota (KTA) PII Aktif",
      "Pasfoto Resmi dan Bukti Pembayaran PNBP/Registrasi",
    ],
    targetAudience: "Seluruh insinyur penanggung jawab proyek, konsultan perencana, pengawas independen.",
    majelisDuration: "Penerbitan Digital Resmi PII Pusat",
    ctaText: "Cek Status STRI di Portal Pusat",
    ctaUrl: "https://updmember.pii.or.id/",
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("ipp");
  const [checkedCriteria, setCheckedCriteria] = useState<Record<string, boolean>>({});

  const activeTrack = tracks.find((t) => t.id === activeTab) || tracks[0];

  const handleToggleCheck = (criterionIndex: number) => {
    const key = `${activeTab}-${criterionIndex}`;
    setCheckedCriteria((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const completedCount = activeTrack.criteria.filter((_, idx) =>
    checkedCriteria[`${activeTab}-${idx}`]
  ).length;

  const isAllCompleted = completedCount === activeTrack.criteria.length;

  return (
    <section
      id="layanan"
      className="relative bg-slate-50 py-24 border-t border-b border-slate-200/80"
      aria-labelledby="layanan-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-brand-navy/20 bg-brand-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-navy" />
              Sertifikasi & Layanan Keinsinyuran
            </div>
            <h2
              id="layanan-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Jenjang Karier & Legalitas Insinyur
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            Sesuai amanat UU No. 11 Tahun 2014, PII Cabang Pangkalpinang memfasilitasi pendampingan
            berkas sertifikasi, verifikasi rekam kerja, hingga persiapan sidang majelis penilai
            tingkat nasional.
          </p>
        </div>

        {/* Interactive Track Navigation Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200 pb-3" role="tablist">
          {tracks.map((track) => {
            const isActive = track.id === activeTab;
            return (
              <button
                key={track.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveTab(track.id)}
                className={`relative flex items-center gap-2.5 rounded-t-xl px-5 py-3.5 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-white text-brand-navy shadow-sm border-t-2 border-brand-blue border-x border-slate-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${
                    isActive ? "bg-brand-navy text-white" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {track.code.slice(0, 3)}
                </span>
                <span>{track.title}</span>
                <span className="hidden md:inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  {track.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Active Track Content Card */}
        <div className="mt-0 rounded-b-2xl border-x border-b border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            {/* Left Column: Details & Interactive Qualification Checklist */}
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {activeTrack.title} ({activeTrack.code})
                  </h3>
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-800">
                    {activeTrack.minExp}
                  </span>
                  <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-800">
                    {activeTrack.credits}
                  </span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  {activeTrack.description}
                </p>
              </div>

              {/* Interactive Self-Assessment Checklist */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-navy" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      Simulasi Persyaratan Mandiri
                    </h4>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isAllCompleted
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {completedCount} dari {activeTrack.criteria.length} Terpenuhi
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Centang kualifikasi yang telah Anda penuhi untuk mengecek kesiapan berkas:
                </p>

                <div className="mt-4 space-y-3">
                  {activeTrack.criteria.map((criterion, idx) => {
                    const isChecked = Boolean(checkedCriteria[`${activeTab}-${idx}`]);
                    return (
                      <label
                        key={criterion}
                        className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm transition-all ${
                          isChecked
                            ? "border-emerald-300 bg-emerald-50/50 text-slate-900"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleCheck(idx)}
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-navy focus:ring-brand-blue"
                        />
                        <span className="flex-1 leading-snug">{criterion}</span>
                      </label>
                    );
                  })}
                </div>

                {isAllCompleted && (
                  <div className="mt-4 flex items-center gap-3 rounded-lg border border-emerald-300 bg-emerald-100/70 p-3 text-xs font-semibold text-emerald-900">
                    <Award className="h-4 w-4 text-emerald-700" />
                    <span>
                      Selamat! Anda memenuhi syarat dasar untuk mengajukan {activeTrack.code}. Hubungi
                      Sekretariat Cabang untuk pendampingan berkas FAIP.
                    </span>
                  </div>
                )}
              </div>

              {/* Documents Needed */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
                  <FileText className="h-4 w-4 text-brand-navy" />
                  Dokumen Portofolio Utama
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {activeTrack.documents.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Execution Metadata & Official Actions */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white shadow-md">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Estimasi Sidang Majelis
                  </span>
                  <p className="mt-1 text-lg font-bold text-white">{activeTrack.majelisDuration}</p>
                </div>

                <div className="border-t border-slate-800 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Disiplin & Profil Sasaran
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    {activeTrack.targetAudience}
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Legalitas Nasional
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Sertifikat diakui oleh LPJK, Kementerian PUPR, dan standar insinyur internasional
                    (AFEO / ASEAN Chartered Professional Engineer).
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  href={activeTrack.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-blue-600 hover:shadow-lg"
                >
                  <span>{activeTrack.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={`https://wa.me/6281806701775?text=Halo%20Sekretariat%20PII%20Pangkalpinang,%20saya%20ingin%20konsultasi%20mengenai%20${activeTrack.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span>Konsultasi Berkas via WhatsApp Cabang</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Local Support Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-base font-bold text-slate-900">Verifikasi Dokumen Cabang</h4>
            <p className="mt-2 text-sm text-slate-600">
              Sekretariat Pangkalpinang mengasistensi kelengkapan berkas FAIP dan SKK sebelum
              diajukan ke sistem nasional, meminimalisir revisi berulang.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-base font-bold text-slate-900">Klinik Penulisan FAIP</h4>
            <p className="mt-2 text-sm text-slate-600">
              Sesi mentoring berkala bersama insinyur senior IPM/IPU untuk menyusun narasi portofolio
              proyek strategis Bangka Belitung sesuai standar baku.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-base font-bold text-slate-900">Jejaring Advokasi Profesi</h4>
            <p className="mt-2 text-sm text-slate-600">
              Perlindungan hukum dan advokasi profesional bagi seluruh insinyur ber-STRI aktif dalam
              menjalankan praktik keinsinyuran daerah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
