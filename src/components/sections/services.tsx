"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Award,
  HelpCircle,
} from "lucide-react";

interface CertificationTrack {
  id: string;
  code: string;
  title: string;
  badge: string;
  minExp: string;
  credits: string;
  description: string;
  targetAudience: string;
  criteria: string[];
  documents: string[];
  majelisDuration: string;
  ctaText: string;
  ctaUrl: string;
}

const tracks: CertificationTrack[] = [
  {
    id: "ipp",
    code: "IPP (Insinyur Profesional Pratama)",
    title: "Insinyur Profesional Pratama",
    badge: "Karier Pratama",
    minExp: "Pengalaman >= 3 Tahun",
    credits: "Akumulasi Skor FAIP: min. 600",
    description:
      "Jenjang kualifikasi awal untuk sarjana teknik atau terapan yang telah bekerja mandiri dalam bidang keinsinyuran selama minimal 3 tahun berturut-turut.",
    targetAudience:
      "Site Engineer, Junior Design Engineer, QC Inspector, dan Field Supervisor proyek kepulauan.",
    criteria: [
      "Ijazah S.T. / S.Tr.T terakreditasi BAN-PT atau gelar Insinyur (Ir.)",
      "KTA PII aktif masa berlaku berjalan",
      "Portofolio minimum 2 proyek rekayasa selesai atau berjalan",
      "Dokumentasi Continuing Professional Development (CPD) dasar",
    ],
    documents: [
      "Formulir Aplikasi Insinyur Profesional (FAIP)",
      "Salinan Legalisir Ijazah & Transkrip",
      "Surat Keterangan Pengalaman Kerja dari Perusahaan / Instansi",
      "Sertifikat Pelatihan Keteknikan / SKK",
    ],
    majelisDuration: "3 - 5 Minggu (Verifikasi Cabang + Majelis)",
    ctaText: "Akses Formulir FAIP Online",
    ctaUrl: "https://simpore.pii.or.id/",
  },
  {
    id: "ipm",
    code: "IPM (Insinyur Profesional Madya)",
    title: "Insinyur Profesional Madya",
    badge: "Karier Madya",
    minExp: "Pengalaman >= 8 Tahun",
    credits: "Akumulasi Skor FAIP: min. 1.200",
    description:
      "Kualifikasi bagi insinyur yang telah memimpin proyek rekayasa keteknikan, memiliki tanggung jawab manajerial, dan membimbing tim teknis lapangan.",
    targetAudience:
      "Project Manager, Lead Engineer, Konsultan Perencana, Kepala Divisi Engineering & Pabrik Pengolahan.",
    criteria: [
      "Telah berstatus IPP minimal 3 tahun ATAU pengalaman profesional >= 8 tahun",
      "Memimpin minimal 1 studi kelayakan atau perancangan rekayasa kompleks",
      "Memiliki kontribusi inovasi teknologi atau optimasi proses industri",
      "Pemenuhan minimal 50 jam SKPK / CPD dalam 3 tahun terakhir",
    ],
    documents: [
      "FAIP Lengkap dengan lampiran kalkulasi teknis",
      "Laporan Portofolio Proyek Utama & Bukti Tanda Tangan",
      "Daftar Publikasi / Rekomendasi 2 Insinyur IPM/IPU Sejenis",
      "KTA PII aktif & Bukti Bebas Pelanggaran Etika Profesi",
    ],
    majelisDuration: "4 - 6 Minggu (Sidang Majelis BK Nasional)",
    ctaText: "Panduan Penilaian IPM",
    ctaUrl: "https://registrasi.pii.or.id/layanan/sertifikasi",
  },
  {
    id: "ipu",
    code: "IPU (Insinyur Profesional Utama)",
    title: "Insinyur Profesional Utama",
    badge: "Otoritas Tertinggi",
    minExp: "Pengalaman >= 15 Tahun",
    credits: "Akumulasi Skor FAIP: min. 3.000",
    description:
      "Jenjang kompetensi keinsinyuran tertinggi nasional. Diberikan kepada pakar yang menghasilkan dampak rekayasa strategis, kebijakan teknis daerah, atau karya terobosan nasional.",
    targetAudience:
      "Direktur Teknik, Principal Consultant, Ahli Madya/Utama Instansi, Penilai Ahli Kegagalan Bangunan.",
    criteria: [
      "Telah berstatus IPM minimal 4 tahun atau rekam jejak kepakaran >= 15 tahun",
      "Karya monumental diakui secara luas (paten, desain fasilitas vital, regulasi keteknikan)",
      "Aktif sebagai pengajar, pembicara seminar keinsinyuran, atau mentor profesi",
      "Lolos wawancara pleno Dewan Majelis Penilai Nasional",
    ],
    documents: [
      "FAIP Tingkat Lanjut dengan dokumentasi dampak proyek",
      "Koleksi Laporan Rekayasa Kunci & Bukti Kepemilikan Teknis",
      "Rekomendasi tertulis 3 Insinyur IPU",
      "Makalah Orasi Keinsinyuran / Ringkasan Gagasan Terobosan",
    ],
    majelisDuration: "6 - 8 Minggu (Sidang Pleno Majelis Utama)",
    ctaText: "Mulai Jalur IPU & Majelis",
    ctaUrl: "https://simpore.pii.or.id/",
  },
  {
    id: "stri",
    code: "STRI (Surat Tanda Registrasi Insinyur)",
    title: "Surat Tanda Registrasi Insinyur (STRI)",
    badge: "Mandat UU 11/2014",
    minExp: "Wajib untuk Praktik Legal",
    credits: "Berlaku 5 Tahun (Dapat Diperpanjang)",
    description:
      "Izin resmi negara untuk menjalankan praktik keinsinyuran dan menandatangani dokumen teknis formal (DED, AMDAL, Kajian Tambang, Perizinan Bangunan Gedung / PBG).",
    targetAudience:
      "Seluruh insinyur penanggung jawab teknis proyek, konsultan bersertifikasi, dan pengawas keselamatan kerja.",
    criteria: [
      "Memiliki Sertifikat Insinyur Profesional (IPP / IPM / IPU) aktif",
      "Memiliki gelar akademik Insinyur (Ir.) dari perguruan tinggi terakreditasi",
      "KTA PII aktif masa berlaku berjalan",
      "Pakta integritas kepatuhan Kode Etik Catur Karsa Sapta Dharma Insinyur",
    ],
    documents: [
      "Salinan Sertifikat Insinyur Profesional",
      "Salinan Ijazah Program Profesi Insinyur (PPI)",
      "Pasfoto formal berlatar belakang merah",
      "Bukti bayar PNBP registrasi STRI resmi negara",
    ],
    majelisDuration: "2 - 3 Minggu (Penerbitan Resmi PII Pusat)",
    ctaText: "Penerbitan STRI Nasional",
    ctaUrl: "https://updmember.pii.or.id/",
  },
  {
    id: "ppi",
    code: "PPI / RPL (Program Profesi Insinyur)",
    title: "Program Profesi Insinyur & Jalur RPL",
    badge: "Pendidikan Profesi",
    minExp: "S.T. / S.Tr.T / Rekognisi",
    credits: "24 SKS (Perkuliahan / Portofolio)",
    description:
      "Program akademik tinggi untuk menyematkan gelar resmi Insinyur (Ir.). Dapat ditempuh lewat jalur kuliah reguler atau Rekognisi Pembelajaran Lampau (RPL) berbasis bukti kerja.",
    targetAudience:
      "Sarjana Teknik fresh graduate maupun praktisi berpengalaman yang belum menyandang gelar profesi Ir.",
    criteria: [
      "Lulusan Sarjana Teknik (S.T.) atau Sarjana Terapan Teknik (S.Tr.T)",
      "Jalur RPL: Memiliki pengalaman kerja teknik minimal 4 tahun berturut-turut",
      "Menyusun portofolio rekayasa sesuai rubrik 24 SKS perguruan tinggi mitra",
      "Terdaftar sebagai anggota muda PII",
    ],
    documents: [
      "Ijazah & Transkrip Akademik S1/D4 Teknik",
      "Portofolio RPL (Laporan Proyek, Desain, SOP)",
      "Surat Rekomendasi Pimpinan Tempat Bekerja",
      "Surat Keterangan Sehat & Berkelakuan Baik",
    ],
    majelisDuration: "1 Semester (RPL) / 2 Semester (Reguler)",
    ctaText: "Informasi Mitra Kampus PPI",
    ctaUrl: "https://registrasi.pii.or.id/layanan/sertifikasi",
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("ipp");
  const [checkedCriteria, setCheckedCriteria] = useState<Record<string, boolean>>({});

  const activeTrack = tracks.find((t) => t.id === activeTab) || tracks[0];

  const handleToggleCheck = (index: number) => {
    const key = `${activeTab}-${index}`;
    setCheckedCriteria((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const completedCount = activeTrack.criteria.filter(
    (_, idx) => checkedCriteria[`${activeTab}-${idx}`]
  ).length;

  const isAllCompleted = completedCount === activeTrack.criteria.length;

  return (
    <section
      id="layanan"
      className="relative bg-slate-50 py-24 border-t border-b border-slate-200/80"
      aria-labelledby="layanan-heading"
    >
      <div className="container">
        {/* Section Header (Clean, no kicker above heading) */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-10">
          <div>
            <h2
              id="layanan-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Jenjang Karier & Legalitas Praktik Insinyur
            </h2>
            <p className="mt-2 text-base font-semibold text-brand-navy">
              Sertifikasi resmi kompetensi, pengakuan gelar profesi, dan mandat UU No. 11 Tahun 2014.
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            PII Cabang Pangkalpinang memfasilitasi pendampingan berkas FAIP, verifikasi pengalaman kerja,
            hingga persiapan sidang majelis penilai tingkat nasional bagi seluruh insinyur di Kepulauan Bangka Belitung.
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
                <span className="hidden md:inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                  {track.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Track Content (Flattened layout, no nested card clutter) */}
        <div className="mt-0 rounded-b-2xl border-x border-b border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            {/* Left Column: Track Details & Interactive Checklist */}
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

              {/* Interactive Self-Assessment Checklist (Clean divided section) */}
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between pb-4">
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

                <p className="text-xs text-slate-600">
                  Centang kualifikasi yang telah Anda penuhi untuk mengukur kesiapan berkas:
                </p>

                <div className="mt-4 space-y-2.5">
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
              <div className="border-t border-slate-200 pt-6">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
                  <FileText className="h-4 w-4 text-brand-navy" />
                  Dokumen Portofolio Utama
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {activeTrack.documents.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Execution Metadata & Official Actions */}
            <div className="flex flex-col justify-between rounded-xl bg-slate-900 p-8 text-white">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                    Estimasi Sidang Majelis
                  </span>
                  <p className="mt-1 text-lg font-bold text-white tabular-nums">{activeTrack.majelisDuration}</p>
                </div>

                <div className="border-t border-slate-800 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                    Disiplin & Profil Sasaran
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-slate-200">
                    {activeTrack.targetAudience}
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                    Legalitas Nasional
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
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
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white"
                >
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span>Konsultasi Berkas via WhatsApp Cabang</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Local Support Architecture (Clean CAD border layout instead of nested card row) */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="border-t-2 border-brand-navy bg-white p-6 shadow-sm">
            <h4 className="text-base font-bold text-slate-900">Verifikasi Dokumen Cabang</h4>
            <p className="mt-2 text-sm text-slate-600">
              Sekretariat Pangkalpinang mengasistensi kelengkapan berkas FAIP dan SKK sebelum
              diajukan ke sistem nasional, meminimalisir revisi berulang.
            </p>
          </div>
          <div className="border-t-2 border-brand-blue bg-white p-6 shadow-sm">
            <h4 className="text-base font-bold text-slate-900">Klinik Penulisan FAIP</h4>
            <p className="mt-2 text-sm text-slate-600">
              Sesi mentoring berkala bersama insinyur senior IPM/IPU untuk menyusun narasi portofolio
              proyek strategis Bangka Belitung sesuai standar baku.
            </p>
          </div>
          <div className="border-t-2 border-slate-700 bg-white p-6 shadow-sm">
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

export { ServicesSection as Services };

