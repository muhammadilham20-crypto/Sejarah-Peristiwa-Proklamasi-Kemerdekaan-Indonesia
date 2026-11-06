/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Generator Berkas Tunggal HTML Mandiri (Offline)
 * Memungkinkan Bapak/Ibu Guru mengunduh 1 file .html yang bisa dibuka offline
 * hanya dengan klik 2 kali di komputer sekolah tanpa memerlukan internet atau server Node.js!
 */

export function downloadStandaloneHtml() {
  const htmlContent = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lorong Waktu Kemerdekaan | Media Pembelajaran Pendidikan Pancasila SMP Kelas 7</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Canvas Confetti CDN -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Poppins:wght@600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Nunito', sans-serif; }
    h1, h2, h3, h4, h5, .font-heading { font-family: 'Poppins', sans-serif; }
    .perspective-1000 { perspective: 1000px; }
    .transform-style-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
  </style>
</head>
<body class="bg-amber-50/40 text-slate-800 antialiased selection:bg-red-500 selection:text-white">

  <!-- Pita Merah Putih -->
  <div class="h-1.5 w-full flex sticky top-0 z-50">
    <div class="h-full w-1/2 bg-red-600"></div>
    <div class="h-full w-1/2 bg-white border-b border-slate-200"></div>
  </div>

  <!-- Header Navigasi -->
  <header class="sticky top-1.5 z-40 bg-white/95 backdrop-blur-md border-b border-red-100 shadow-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center text-white text-xl shadow-md">
          🇮🇩
        </div>
        <div>
          <span class="font-heading font-black text-lg text-slate-900 leading-none">Lorong Waktu</span>
          <p className="text-xs text-slate-500 font-medium">Pendidikan Pancasila Kelas 7 SMP</p>
        </div>
      </div>
      <nav class="hidden md:flex items-center gap-3 text-sm font-bold text-slate-700">
        <a href="#beranda" class="hover:text-red-600">Beranda</a>
        <a href="#garis-waktu" class="hover:text-red-600">Garis Waktu</a>
        <a href="#galeri-tokoh" class="hover:text-red-600">Tokoh</a>
        <a href="#mini-games" class="hover:text-red-600">Mini Games</a>
        <a href="#kuis" class="hover:text-red-600">Kuis</a>
      </nav>
      <div class="bg-red-100 text-red-800 text-xs font-black px-3 py-1.5 rounded-full border border-red-200">
        Versi Mandiri (Offline)
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="beranda" class="py-12 sm:py-20 text-center px-4 bg-radial from-red-100/60 via-white to-amber-50/40">
    <div class="max-w-4xl mx-auto">
      <div class="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase mb-4 border border-red-200">
        🇮🇩 Halo Agen Sejarah Muda Kelas 7 SMP!
      </div>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
        Lorong Waktu Kemerdekaan:<br>
        <span class="text-red-600">Misi Menuju 17 Agustus 1945</span>
      </h1>
      <p class="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
        Jelajahi detik-detik menegangkan lahirnya Republik Indonesia! Dari runtuhnya kekuasaan Jepang, drama Rengasdengklok, hingga berkumandangnya Proklamasi kemerdekaan.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#garis-waktu" class="px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-lg shadow-red-600/30">
          🚀 Mulai Petualangan
        </a>
        <a href="#mini-games" class="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-black text-sm border-2 border-slate-200">
          🎮 Coba Mini Games
        </a>
      </div>
    </div>
  </section>

  <!-- Garis Waktu 4 Babak -->
  <section id="garis-waktu" class="py-16 px-4 max-w-6xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-2xl sm:text-3xl font-black text-slate-900">4 Babak Menuju Proklamasi</h2>
      <p class="text-sm text-slate-600 mt-1">Pelajari rangkuman materi sejarah kurikulum kelas 7</p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Babak 1 -->
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <span class="text-xs font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-full uppercase">Babak 1</span>
        <h3 class="font-heading font-black text-lg text-slate-900 mt-2">Akhir Pendudukan Jepang & Janji Kemerdekaan</h3>
        <p class="text-xs text-slate-500 font-bold mb-3">Awal 1945 - Awal Agustus 1945</p>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Kondisi militer Jepang terdesak Sekutu setelah Bom Atom dijatuhkan di kota Hiroshima (6 Agustus) dan Nagasaki (9 Agustus 1945). Dibentuknya BPUPKI (1 Maret) yang melahirkan rumusan Pancasila dan PPKI (7 Agustus) sebagai persiapan kemerdekaan.
        </p>
      </div>

      <!-- Babak 2 -->
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <span class="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">Babak 2</span>
        <h3 class="font-heading font-black text-lg text-slate-900 mt-2">Masa Kekosongan Kekuasaan (Vacuum of Power)</h3>
        <p class="text-xs text-slate-500 font-bold mb-3">15 Agustus 1945</p>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Jepang menyerah tanpa syarat kepada Sekutu. Terjadi masa kekosongan kekuasaan (Vacuum of Power). Terjadi perdebatan sengit antara Golongan Muda (menginginkan kemerdekaan segera tanpa campur tangan Jepang) vs Golongan Tua (menimbang keselamatan rakyat dan ingin rapat melalui PPKI).
        </p>
      </div>

      <!-- Babak 3 -->
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <span class="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase">Babak 3</span>
        <h3 class="font-heading font-black text-lg text-slate-900 mt-2">Peristiwa Rengasdengklok & Perumusan Naskah</h3>
        <p class="text-xs text-slate-500 font-bold mb-3">16 Agustus 1945</p>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Pemuda mengamankan Soekarno dan Hatta ke Rengasdengklok, Karawang agar tidak terpengaruh Jepang. Achmad Soebardjo menjamin proklamasi besok siang. Rombongan kembali ke Jakarta dan merumuskan naskah proklamasi di rumah Laksamana Maeda (Jl. Imam Bonjol No. 1) lalu diketik oleh Sayuti Melik.
        </p>
      </div>

      <!-- Babak 4 -->
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <span class="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase">Babak 4</span>
        <h3 class="font-heading font-black text-lg text-slate-900 mt-2">Detik-Detik Proklamasi 17 Agustus 1945</h3>
        <p class="text-xs text-slate-500 font-bold mb-3">Jumat, 17 Agustus 1945 (10.00 WIB)</p>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Pembacaan teks Proklamasi oleh Ir. Soekarno didampingi Drs. Mohammad Hatta di Jl. Pegangsaan Timur No. 56 Jakarta Pusat. Pengibaran bendera Sang Saka Merah Putih yang dijahit Ibu Fatmawati oleh Latief Hendraningrat dan Suhud diiringi lagu Indonesia Raya.
        </p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-300 py-10 px-4 text-center text-xs">
    <p class="font-heading font-black text-base text-white mb-2">Media Pembelajaran Pendidikan Pancasila Kelas 7 SMP</p>
    <p class="text-slate-400 max-w-md mx-auto">Dibuat dengan cinta oleh Guru Penggerak untuk putra-putri bangsa Indonesia tercinta.</p>
    <p class="mt-4 text-slate-500">© 1945 - Indonesia Merdeka Berdaulat</p>
  </footer>

</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Lorong_Waktu_Kemerdekaan_SMP7_Offline.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
