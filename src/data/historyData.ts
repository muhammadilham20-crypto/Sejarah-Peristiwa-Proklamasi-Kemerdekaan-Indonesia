/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * =========================================================================
 * DATA PEMBELAJARAN SEJARAH PROKLAMASI KEMERDEKAAN RI - KELAS 7 SMP
 * =========================================================================
 * Catatan untuk Guru:
 * Bapak/Ibu Guru dapat dengan mudah mengedit atau menambahkan soal, materi,
 * dan nama tokoh di bawah ini sesuai kebutuhan silabus atau modul ajar.
 */

import { TimelineEvent, HistoricalFigure, ProclamationSentence, QuickTriviaGame, QuizQuestion } from '../types/history';

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 1,
    babak: 1,
    judulBabak: "Akhir Masa Pendudukan Jepang & Janji Kemerdekaan",
    periode: "Awal 1945 - Awal Agustus 1945",
    tagline: "Ketika matahari terbit mulai meredup dan fajar kemerdekaan menyapa.",
    ikon: "SunMedium",
    ringkasan: "Memasuki pertengahan 1945, posisi militer Jepang dalam Perang Pasifik makin terdesak oleh pasukan Sekutu. Untuk menarik simpati rakyat Indonesia, Perdana Menteri Koiso menjanjikan kemerdekaan di kelak kemudian hari. Sebagai tindak lanjutnya, dibentuklah BPUPKI dan disusul oleh PPKI.",
    poinPenting: [
      "1 Maret 1945: Letnan Jenderal Kumakichi Harada mengumumkan pembentukan BPUPKI (Dokuritsu Junbi Cosakai) yang diketuai Dr. K.R.T. Radjiman Wedyodiningrat.",
      "29 Mei - 1 Juni 1945: Sidang pertama BPUPKI yang melahirkan dasar negara Pancasila (Pidato Ir. Soekarno 1 Juni 1945).",
      "6 & 9 Agustus 1945: Sekutu menjatuhkan Bom Atom di kota Hiroshima dan Nagasaki, melumpuhkan kekuatan militer dan ekonomi Jepang secara total.",
      "7 Agustus 1945: BPUPKI dibubarkan dan digantikan oleh PPKI (Dokuritsu Junbi Inkai) beranggotakan 21 orang Indonesia dengan ketua Ir. Soekarno dan wakil Drs. Moh. Hatta."
    ],
    tokohKunci: ["Dr. Radjiman Wedyodiningrat", "Ir. Soekarno", "Drs. Mohammad Hatta", "Jenderal Terauchi"],
    funFact: "Tahukah kamu? Anggota PPKI awalnya berjumlah 21 orang bentukan Jepang, namun Soekarno diam-diam menambah 6 anggota pribumi tanpa izin Jepang untuk menegaskan bahwa kemerdekaan ini bukan pemberian Jepang melainkan perjuangan bangsa sendiri!",
    kuisKilat: {
      pertanyaan: "Apa peristiwa bersejarah pada 6 dan 9 Agustus 1945 yang membuat pertahanan Jepang hancur lebur?",
      pilihan: [
        "Jepang diserang oleh tentara Belanda di Batavia",
        "Sekutu menjatuhkan Bom Atom di Hiroshima dan Nagasaki",
        "Rakyat Surabaya memberontak secara massal",
        "Kaisar Jepang melarikan diri ke Eropa"
      ],
      jawabanBenar: 1,
      penjelasan: "Tepat sekali! Bom atom di Hiroshima (6 Agustus) dan Nagasaki (9 Agustus) melumpuhkan pusat militer dan industri Jepang, memaksa mereka bersiap menyerah kepada Sekutu."
    }
  },
  {
    id: 2,
    babak: 2,
    judulBabak: "Masa Kekosongan Kekuasaan (Vacuum of Power)",
    periode: "15 Agustus 1945",
    tagline: "Saat sang penguasa bertekuk lutut dan waktu menjadi penentu takdir bangsa.",
    ikon: "Hourglass",
    ringkasan: "Pada 15 Agustus 1945, Kaisar Hirohito membacakan dekret menyerah tanpa syarat kepada tentara Sekutu. Akibatnya, terjadi kekosongan kekuasaan (vacuum of power) di Indonesia: Jepang sudah tidak berkuasa, sedangkan Sekutu belum tiba. Momen emas ini memicu ketegangan antara Golongan Muda dan Golongan Tua.",
    poinPenting: [
      "Berita menyerahnya Jepang disensor ketat, tetapi berhasil disadap oleh pemuda Sutan Sjahrir melalui siaran radio rahasia BBC London.",
      "Para pemuda menginginkan proklamasi dilakukan secepatnya tanpa campur tangan Jepang atau badan PPKI.",
      "Golongan tua berhati-hati karena tentara Jepang di Jawa masih bersenjata lengkap dan ditugaskan Sekutu untuk menjaga 'status quo'.",
      "Perdebatan sengit terjadi di kediaman Bung Karno pada malam 15 Agustus 1945, namun belum mencapai mufakat."
    ],
    perbedaanPendapat: {
      golonganMuda: [
        "Tokoh: Chaerul Saleh, Sukarni, Wikana, Darwis, Sayuti Melik.",
        "Sikap: Menuntut kemerdekaan diproklamasikan malam itu juga (15/16 Agustus).",
        "Alasan: Menganggap PPKI adalah boneka buatan Jepang. Kemerdekaan harus murni hasil revolusi rakyat Indonesia agar diakui dunia internasional!"
      ],
      golonganTua: [
        "Tokoh: Ir. Soekarno, Drs. Moh. Hatta, Mr. Achmad Soebardjo, Iwa Kusumasumantri.",
        "Sikap: Menghendaki proklamasi dirapatkan dan dimatangkan terlebih dahulu lewat sidang PPKI.",
        "Alasan: Mencegah pertumpahan darah rakyat yang sia-sia melawan ribuan serdadu Jepang yang masih berpatroli dengan senjata lengkap."
      ]
    },
    tokohKunci: ["Sutan Sjahrir", "Wikana", "Chaerul Saleh", "Ir. Soekarno", "Drs. Mohammad Hatta"],
    funFact: "Kata Wikana yang melegenda kepada Bung Karno: 'Apabila Bung Karno tidak mau mengucapkan pengumuman itu malam ini juga, besok pagi akan terjadi pertumpahan darah!' Bung Karno tidak gentar dan menjawab tenang tapi tegas demi keselamatan rakyatnya.",
    kuisKilat: {
      pertanyaan: "Apa yang dimaksud dengan istilah 'Vacuum of Power' setelah tanggal 15 Agustus 1945?",
      pilihan: [
        "Kondisi di mana persediaan listrik dan bahan bakar di Jakarta padam total",
        "Kekosongan kekuasaan karena Jepang menyerah dan Sekutu belum datang mengambil alih",
        "Keadaan ketika pemerintah Belanda langsung mengambil alih istana",
        "Hilangnya persenjataan tentara PETA di Jawa Barat"
      ],
      jawabanBenar: 1,
      penjelasan: "Luar biasa! Vacuum of power adalah keadaan tidak adanya otoritas penguasa resmi di suatu wilayah setelah penguasa lama menyerah dan penguasa baru belum datang."
    }
  },
  {
    id: 3,
    babak: 3,
    judulBabak: "Peristiwa Rengasdengklok & Perumusan Naskah",
    periode: "16 Agustus 1945",
    tagline: "Sebuah taktik heroik di pedalaman Karawang demi kedaulatan tanpa kompromi.",
    ikon: "ShieldAlert",
    ringkasan: "Dini hari tanggal 16 Agustus 1945 pukul 04.00 WIB, para pemuda 'menculik' (mengamankan) Soekarno, Hatta, Ibu Fatmawati, dan Guntur ke Rengasdengklok, Karawang. Tujuannya agar para pemimpin terbebas dari pengaruh propaganda Jepang. Setelah Mr. Achmad Soebardjo memberi jaminan nyawa, rombongan kembali ke Jakarta menuju rumah Laksamana Maeda.",
    poinPenting: [
      "Mengapa Rengasdengklok dipilih? Lokasinya aman, jauh dari jalan raya Jakarta-Cirebon, dan dijaga ketat oleh prajurit PETA pimpinan Cudanco Subeno.",
      "Mr. Achmad Soebardjo datang menjemput sore hari dan mempertaruhkan lehernya: 'Proklamasi akan diumumkan besok selambat-lambatnya pukul 12.00 WIB!'",
      "Pukul 23.00 WIB tiba di rumah Laksamana Maeda di Jl. Imam Bonjol No. 1 Jakarta Pusat. Rumah Maeda dipilih karena hak imunitas diplomatik militer.",
      "Perumusan Naskah: Di ruang makan Maeda, Soekarno menulis naskah, Moh. Hatta dan Achmad Soebardjo menyumbangkan kalimat pemikiran.",
      "Sayuti Melik mengetik naskah proklamasi dengan sedikit perubahan ejaan, dan Sukarni mengusulkan agar naskah ditandatangani Soekarno-Hatta atas nama bangsa Indonesia."
    ],
    tokohKunci: ["Sukarni", "Yusuf Kunto", "Mr. Achmad Soebardjo", "Laksamana Tadashi Maeda", "Sayuti Melik"],
    funFact: "Mesin ketik yang digunakan Sayuti Melik dipinjam secara mendesak di tengah malam dari Mayor Laut Kandelar (kantor perwakilan militer Jerman), karena di rumah Maeda hanya ada mesin ketik berhuruf Kanji Jepang!",
    kuisKilat: {
      pertanyaan: "Siapa tokoh yang menjamin dengan taruhan nyawanya agar Bung Karno dan Hatta dilepaskan dari Rengasdengklok?",
      pilihan: [
        "Sayuti Melik",
        "Laksamana Maeda",
        "Mr. Achmad Soebardjo",
        "Chaerul Saleh"
      ],
      jawabanBenar: 2,
      penjelasan: "Hebat! Mr. Achmad Soebardjo yang merupakan tokoh golongan tua datang ke Rengasdengklok dan menjamin bahwa proklamasi akan dilaksanakan pada 17 Agustus 1945 paling lambat pukul 12.00 WIB."
    }
  },
  {
    id: 4,
    babak: 4,
    judulBabak: "Detik-Detik Proklamasi 17 Agustus 1945",
    periode: "Jumat, 17 Agustus 1945 (Pukul 10.00 WIB)",
    tagline: "Hari lahirnya Republik Indonesia! Berkumandangnya kedaulatan merdeka di bumi pertiwi.",
    ikon: "Flag",
    ringkasan: "Awalnya direncanakan di Lapangan Ikada, pembacaan dialihkan ke halaman rumah Ir. Soekarno di Jl. Pegangsaan Timur No. 56 Jakarta Pusat untuk menghindari bentrokan senjata dengan tentara Jepang. Tepat pukul 10.00 pagi, didampingi Bung Hatta, Bung Karno membacakan naskah Proklamasi dengan khidmat.",
    poinPenting: [
      "Suasana Pagi: Rakyat dan pemuda sudah berbaris tertib memenuhi halaman rumah Bung Karno sejak pagi dalam suasana bulan Ramadan (Jumat Legi).",
      "Pukul 10.00 WIB: Pidato pembuka oleh Soekarno dilanjutkan pembacaan naskah Proklamasi Kemerdekaan Indonesia yang berlangsung singkat namun mengguncang dunia.",
      "Pengibaran Bendera: Bendera Merah Putih yang dijahit tangan oleh Ibu Fatmawati dikibarkan oleh Shodanco Latief Hendraningrat dibantu oleh S. Suhud dan SK Trimurti.",
      "Lagu Indonesia Raya ciptaan W.R. Supratman dinyanyikan secara spontan dan penuh haru oleh seluruh hadirin.",
      "Penyebaran Berita: Berita kemerdekaan disiarkan lewat kantor berita Domei (kini LKBN Antara), radio, pamflet, dan corat-coret di gerbong kereta api."
    ],
    tokohKunci: ["Ir. Soekarno", "Drs. Mohammad Hatta", "Ibu Fatmawati", "Latief Hendraningrat", "S. Suhud", "SK Trimurti"],
    funFact: "Tiang bendera pertama yang digunakan untuk mengibarkan Sang Saka Merah Putih terbuat dari sebatang bambu jemuran kasar yang disiapkan secara mendadak oleh S. Suhud di belakang rumah Bung Karno!",
    kuisKilat: {
      pertanyaan: "Di manakah lokasi pembacaan teks Proklamasi Kemerdekaan Indonesia 17 Agustus 1945 berlangsung?",
      pilihan: [
        "Halaman Istana Merdeka Jakarta",
        "Jl. Pegangsaan Timur No. 56 Jakarta Pusat",
        "Lapangan Ikada (sekarang Monas)",
        "Gedung Rengasdengklok Karawang"
      ],
      jawabanBenar: 1,
      penjelasan: "Benar sekali! Pembacaan dipusatkan di teras rumah kediaman Bung Karno di Jl. Pegangsaan Timur No. 56 (sekarang Kompleks Tugu Proklamasi) pukul 10.00 pagi WIB."
    }
  }
];

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  {
    id: "soekarno",
    nama: "Ir. Soekarno (Bung Karno)",
    gelar: "Bapak Proklamator & Presiden Pertama RI",
    peran: "Menulis Konsep Teks & Membacakan Proklamasi Kemerdekaan",
    detailPeran: "Bersama Bung Hatta dijuluki Dwi-Tunggal. Pada malam 16-17 Agustus 1945, Soekarno menulis tangan teks konsep proklamasi di rumah Laksamana Maeda dan membacakannya di hadapan rakyat Indonesia.",
    kutipanTerkenal: "“Bangsa yang besar adalah bangsa yang menghormati jasa pahlawannya!”",
    faktaUnik: "Saat membacakan naskah Proklamasi, Bung Karno sebenarnya sedang menderita demam malaria akibat kelelahan begadang semalaman, namun suaranya tetap lantang berwibawa.",
    kategori: "Proklamator",
    badgeWarna: "bg-red-600 text-white",
    avatarBg: "from-red-500 to-rose-700"
  },
  {
    id: "hatta",
    nama: "Drs. Mohammad Hatta (Bung Hatta)",
    gelar: "Bapak Proklamator & Wakil Presiden Pertama RI",
    peran: "Penyumbang Kalimat Kedua Naskah & Pendamping Setia",
    detailPeran: "Menyumbangkan gagasan kalimat kedua naskah proklamasi mengenai pemindahan kekuasaan. Bersama Bung Karno menandatangani naskah atas nama bangsa Indonesia.",
    kutipanTerkenal: "“Kurang cerdas dapat diperbaiki dengan belajar, kurang cakap dapat dihilangkan dengan pengalaman. Namun tidak jujur itu sulit diperbaiki!”",
    faktaUnik: "Bung Hatta dikenal sebagai sosok yang sangat disiplin dan pecinta buku sejati. Beliau berjanji tidak akan menikah sebelum Indonesia resmi merdeka!",
    kategori: "Proklamator",
    badgeWarna: "bg-red-700 text-white",
    avatarBg: "from-amber-600 to-red-800"
  },
  {
    id: "fatmawati",
    nama: "Ibu Fatmawati Soekarno",
    gelar: "Pahlawan Nasional & Ibu Negara Pertama RI",
    peran: "Penjahit Bendera Pusaka Sang Saka Merah Putih",
    detailPeran: "Menjahit bendera Merah Putih dari bahan katun Jepang berukuran 2x3 meter dalam kondisi hamil tua (mengandung Guntur Soekarnoputra). Bendera inilah yang dikibarkan saat proklamasi 17 Agustus 1945.",
    kutipanTerkenal: "“Jahitan demi jahitan ini adalah doa untuk kemerdekaan dan keabadian bangsa Indonesia tercinta.”",
    faktaUnik: "Kain katun merah dan putih diperoleh dari pemuda bernama Shimizu melalui bantuan perwira Jepang, dijahit tangan menggunakan mesin jahit Singer engkol tangan sederhana.",
    kategori: "Tokoh Pendukung",
    badgeWarna: "bg-rose-500 text-white",
    avatarBg: "from-rose-400 to-pink-600"
  },
  {
    id: "sayuti-melik",
    nama: "Mohammad Ibnu Sayuti (Sayuti Melik)",
    gelar: "Pahlawan Nasional & Tokoh Pers Perjuangan",
    peran: "Pengetik Naskah Proklamasi Otentik",
    detailPeran: "Mengetik naskah tulisan tangan Bung Karno menjadi naskah otentik. Ia berinisiatif mengubah beberapa kata: 'tempoh' menjadi 'tempo', 'wakil-wakil bangsa Indonesia' menjadi 'Atas nama bangsa Indonesia', dan penulisan tanggal 'Djakarta, hari 17 boelan 8 tahoen 05'.",
    kutipanTerkenal: "“Kemerdekaan bukan sekadar kata yang diketik di atas kertas, melainkan janji darah dan jiwa seluruh anak bangsa.”",
    faktaUnik: "Tahun '05' dalam naskah proklamasi adalah singkatan dari tahun 2605 menurut penanggalan kalender kekaisaran Jepang (Koki) yang saat itu berlaku resmi.",
    kategori: "Golongan Muda",
    badgeWarna: "bg-emerald-600 text-white",
    avatarBg: "from-emerald-500 to-teal-700"
  },
  {
    id: "sukarni",
    nama: "Sukarni Kartodiwirjo & Chaerul Saleh",
    gelar: "Tokoh Pimpinan Pemuda / Golongan Muda",
    peran: "Pelopor Rengasdengklok & Pengusul Penandatangan Naskah",
    detailPeran: "Memimpin pergerakan pemuda mendesak Bung Karno dan Bung Hatta agar segera memproklamasikan kemerdekaan. Sukarni juga yang mengusulkan agar hanya Soekarno dan Hatta yang menandatangani teks atas nama bangsa Indonesia.",
    kutipanTerkenal: "“Revolusi tak pernah menunggu izin penjajah! Kemerdekaan harus direbut dengan keberanian!”",
    faktaUnik: "Semula Soekarno mengusulkan agar semua tokoh yang hadir (sekitar 30 orang) menandatangani teks seperti naskah Deklarasi Kemerdekaan Amerika. Namun Sukarni menolak keras agar tidak berbau buatan rapat komite PPKI.",
    kategori: "Golongan Muda",
    badgeWarna: "bg-blue-600 text-white",
    avatarBg: "from-blue-600 to-indigo-800"
  },
  {
    id: "maeda",
    nama: "Laksamana Muda Tadashi Maeda",
    gelar: "Perwira Tinggi Angkatan Laut Jepang (Kaigun)",
    peran: "Pemberi Perlindungan & Fasilitator Rumah Perumusan",
    detailPeran: "Meminjamkan rumah dinasnya di Jl. Imam Bonjol No. 1 Jakarta untuk perumusan naskah proklamasi. Rumahnya memiliki kekebalan diplomatik militer Angkatan Laut (Kaigun) sehingga Angkatan Darat Jepang (Rikugun) tidak berani masuk.",
    kutipanTerkenal: "“Saya menghormati cita-cita luhur kemerdekaan bangsa Indonesia yang hakiki.”",
    faktaUnik: "Setelah Indonesia merdeka, Laksamana Maeda ditangkap Sekutu dan dipenjara di Kalisosok Surabaya sebelum diadili di Jepang, karena dianggap melanggar perintah militer menjaga status quo.",
    kategori: "Tokoh Pendukung",
    badgeWarna: "bg-slate-700 text-white",
    avatarBg: "from-slate-600 to-slate-800"
  },
  {
    id: "achmad-soebardjo",
    nama: "Mr. Achmad Soebardjo Djojoadisoerjo",
    gelar: "Menteri Luar Negeri Pertama RI",
    peran: "Penengah Golongan Muda & Perumus Kalimat Pertama Proklamasi",
    detailPeran: "Tokoh senior terpercaya yang menjembatani golongan muda di Rengasdengklok dengan golongan tua di Jakarta. Beliau merumuskan kalimat pertama: 'Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia.'",
    kutipanTerkenal: "“Diplomasi yang tangguh berakar dari keteguhan hati memperjuangkan nasib rakyat sendiri.”",
    faktaUnik: "Achmad Soebardjo mempertaruhkan nyawanya di depan Cudanco Subeno di Rengasdengklok untuk menjamin bahwa Proklamasi pasti diumumkan esok harinya.",
    kategori: "Golongan Tua",
    badgeWarna: "bg-purple-600 text-white",
    avatarBg: "from-purple-600 to-indigo-900"
  },
  {
    id: "latief-suhud",
    nama: "Latief Hendraningrat & S. Suhud",
    gelar: "Prajurit PETA & Pengibar Sang Saka Merah Putih",
    peran: "Pengibar Bendera Pertama di Detik Proklamasi",
    detailPeran: "Shodanco Latief Hendraningrat (memakai seragam PETA) bertindak memimpin pengibaran bendera pusaka bersama S. Suhud di tiang bambu darurat di Jl. Pegangsaan Timur 56 Jakarta.",
    kutipanTerkenal: "“Tarik perlahan, tegakkan dada, kibarkan kehormatan bangsa setinggi-tingginya!”",
    faktaUnik: "Latief sebenarnya disiapkan juga untuk menjaga keamanan lokasi bersama pasukan pemuda bersenjata tajam dan bambu runcing di sekeliling kediaman Bung Karno.",
    kategori: "Tokoh Pendukung",
    badgeWarna: "bg-amber-600 text-white",
    avatarBg: "from-amber-600 to-yellow-800"
  }
];

export const PROCLAMATION_PIECES: ProclamationSentence[] = [
  {
    id: 1,
    teks: "PROKLAMASI",
    keterangan: "Judul naskah yang ditulis dengan huruf kapital tebal di bagian tengah atas."
  },
  {
    id: 2,
    teks: "Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia.",
    keterangan: "Pernyataan kedaulatan kemerdekaan (gagasan disumbangkan oleh Mr. Achmad Soebardjo)."
  },
  {
    id: 3,
    teks: "Hal-hal jang mengenai pemindahan kekoeasaan d.l.l., diselenggarakan",
    keterangan: "Bagian teknis tata kelola pemerintahan (gagasan dari pemikiran Drs. Mohammad Hatta)."
  },
  {
    id: 4,
    teks: "dengan tjara saksama dan dalam tempo jang sesingkat-singkatnja.",
    keterangan: "Ketegasan bahwa transisi kekuasaan dilakukan dengan cepat dan tertib."
  },
  {
    id: 5,
    teks: "Djakarta, hari 17 boelan 8 tahoen 05\nAtas nama bangsa Indonesia\nSoekarno - Hatta.",
    keterangan: "Titik mangsa (tanggal) dan penandatangan naskah atas nama seluruh rakyat Indonesia."
  }
];

export const FULL_PROCLAMATION_TEXT = {
  otentik: `P R O K L A M A S I

Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia.

Hal-hal jang mengenai pemindahan kekoeasaan d.l.l., diselenggarakan dengan tjara saksama dan dalam tempo jang sesingkat-singkatnja.

Djakarta, hari 17 boelan 8 tahoen '05
Atas nama bangsa Indonesia,
Soekarno - Hatta.`,
  klad: `Proklamasi

Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia.

Hal2 jang mengenai pemindahan kekoeasaan d-l-l, diselenggarakan dengan tjara saksama dan dalam tempoh jang sesingkat-singkatnja.

Djakarta, 17 - 8 - '05
Wakil2 bangsa Indonesia.`,
  maknaPancasila: "Proklamasi Kemerdekaan 17 Agustus 1945 adalah jembatan emas menuju terwujudnya tujuan negara Indonesia yang merdeka, bersatu, berdaulat, adil, dan makmur berlandaskan nilai-nilai luhur Pancasila."
};

export const QUICK_TRIVIA_GAMES: QuickTriviaGame[] = [
  {
    id: 1,
    pertanyaan: "Siapa tokoh yang mengetik naskah proklamasi autentik menggunakan mesin ketik buatan Jerman?",
    fakta: "Ia juga berinisiatif mengubah kata 'tempoh' menjadi 'tempo' dan 'wakil-wakil bangsa Indonesia' menjadi 'Atas nama bangsa Indonesia'.",
    opsi: [
      { nama: "Sayuti Melik", isCorrect: true },
      { nama: "Sutan Sjahrir", isCorrect: false },
      { nama: "Chaerul Saleh", isCorrect: false }
    ],
    penjelasan: "Tepat sekali! Sayuti Melik adalah pemuda yang mengetik naskah proklamasi di ruang belakang kediaman Laksamana Maeda."
  },
  {
    id: 2,
    pertanyaan: "Siapakah pahlawan wanita yang dengan penuh haru dan doa menjahit bendera Sang Saka Merah Putih pertama kali?",
    fakta: "Beliau menjahitnya dari dua lembar kain katun saat sedang hamil tua anak pertamanya.",
    opsi: [
      { nama: "R.A. Kartini", isCorrect: false },
      { nama: "Ibu Fatmawati", isCorrect: true },
      { nama: "Dewi Sartika", isCorrect: false }
    ],
    penjelasan: "Benar! Ibu Fatmawati menjahit Sang Saka Merah Putih yang berkibar pertama kali di Jl. Pegangsaan Timur No. 56."
  },
  {
    id: 3,
    pertanyaan: "Siapakah perwira Angkatan Laut Jepang yang meminjamkan rumah dinasnya demi keselamatan perumusan teks proklamasi?",
    fakta: "Rumahnya di Jl. Imam Bonjol No. 1 dipilih karena memiliki hak imunitas perlindungan dari serdadu Angkatan Darat Jepang.",
    opsi: [
      { nama: "Jenderal Kumakichi Harada", isCorrect: false },
      { nama: "Jenderal Terauchi", isCorrect: false },
      { nama: "Laksamana Tadashi Maeda", isCorrect: true }
    ],
    penjelasan: "Bagus! Laksamana Muda Tadashi Maeda bersimpati pada perjuangan bangsa dan menyediakan rumah dinasnya sebagai tempat musyawarah yang aman."
  },
  {
    id: 4,
    pertanyaan: "Siapakah tokoh Golongan Muda yang mengusulkan agar Soekarno dan Hatta saja yang menandatangani naskah atas nama bangsa Indonesia?",
    fakta: "Usul ini disepakati seluruh hadirin agar naskah proklamasi berwibawa dan tidak bertele-tele.",
    opsi: [
      { nama: "Sukarni", isCorrect: true },
      { nama: "Achmad Soebardjo", isCorrect: false },
      { nama: "Latief Hendraningrat", isCorrect: false }
    ],
    penjelasan: "Hebat! Sukarni mengusulkan cukup Bung Karno dan Bung Hatta yang menandatangani atas nama seluruh bangsa Indonesia."
  },
  {
    id: 5,
    pertanyaan: "Siapakah anggota prajurit PETA yang memimpin upacara pengibaran bendera Merah Putih pertama pada 17 Agustus 1945?",
    fakta: "Ia bertindak sigap mengenakan seragam prajurit PETA (Pembela Tanah Air).",
    opsi: [
      { nama: "Shodanco Latief Hendraningrat", isCorrect: true },
      { nama: "Jenderal Soedirman", isCorrect: false },
      { nama: "Bung Tomo", isCorrect: false }
    ],
    penjelasan: "Luar biasa! Latief Hendraningrat dibantu oleh S. Suhud bertindak sebagai pengibar bendera Merah Putih pertama diiringi lagu Indonesia Raya."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    soal: "Tujuan utama para pemuda membawa Ir. Soekarno dan Drs. Mohammad Hatta ke Rengasdengklok pada 16 Agustus 1945 dini hari adalah...",
    pilihan: [
      "Memaksa Bung Karno menandatangani kesepakatan damai dengan pemerintah Jepang",
      "Mengamankan kedua pemimpin bangsa dari pengaruh dan bujuk rayu pihak militer Jepang",
      "Menyembunyikan para pemimpin karena Sekutu sudah mendarat di pelabuhan Jakarta",
      "Mengadakan rapat pembentukan susunan menteri kabinet pertama RI"
    ],
    kunci: 1,
    pembahasan: "Golongan Muda khawatir Bung Karno dan Bung Hatta dipengaruhi janji manis pejabat militer Jepang. Dengan membawanya ke Rengasdengklok yang dijaga PETA, para pemimpin dapat mengambil keputusan bebas tanpa tekanan asing.",
    tingkatKesulitan: "Mudah"
  },
  {
    id: 2,
    soal: "Perbedaan mendasar antara Golongan Muda dan Golongan Tua sebelum proklamasi kemerdekaan terletak pada...",
    pilihan: [
      "Bentuk negara yang akan didirikan, apakah kesatuan atau serikat",
      "Waktu pelaksanaan proklamasi serta keterlibatan lembaga PPKI buatan Jepang",
      "Siapa calon presiden dan wakil presiden pertama Republik Indonesia",
      "Warna bendera nasional yang akan dikibarkan dalam upacara kemerdekaan"
    ],
    kunci: 1,
    pembahasan: "Golongan Muda mendesak proklamasi dilakukan secepatnya tanpa melibatkan PPKI (karena PPKI dibentuk Jepang). Golongan Tua bersikap matang dan ingin membicarakannya dulu lewat sidang PPKI demi mencegah pertumpahan darah dengan tentara Jepang yang masih bersenjata.",
    tingkatKesulitan: "Sedang"
  },
  {
    id: 3,
    soal: "Mengapa kediaman Laksamana Tadashi Maeda di Jalan Imam Bonjol No. 1 dipilih sebagai tempat perumusan teks Proklamasi?",
    pilihan: [
      "Karena terletak di tengah hutan sehingga tidak diketahui oleh serdadu Jepang",
      "Rumah Laksamana Maeda memiliki hak kekebalan diplomatik militer Angkatan Laut (Kaigun)",
      "Karena di rumah tersebut tersedia percetakan surat kabar terbesar di Hindia Belanda",
      "Laksamana Maeda adalah pimpinan tertinggi seluruh pasukan tentara Sekutu di Asia Tenggara"
    ],
    kunci: 1,
    pembahasan: "Laksamana Maeda adalah perwira Kaigun (Angkatan Laut). Rumahnya memiliki imunitas militer di mana tentara Angkatan Darat Jepang (Rikugun/Kempeitai) tidak memiliki wewenang untuk sembarangan menggeledah.",
    tingkatKesulitan: "Sedang"
  },
  {
    id: 4,
    soal: "Naskah tulisan tangan Ir. Soekarno (naskah Klad) mengalami beberapa perubahan setelah diketik oleh Sayuti Melik (naskah Otentik). Salah satu perubahannya adalah...",
    pilihan: [
      "Mengganti kata 'Republik Indonesia' menjadi 'Nusantara Jaya'",
      "Mengubah kata 'tempoh' menjadi 'tempo' dan 'djakarta 17-8-05'",
      "Menambahkan nama seluruh anggota PPKI di bawah teks proklamasi",
      "Menghapus kalimat tentang pemindahan kekuasaan negara"
    ],
    kunci: 1,
    pembahasan: "Saat mengetik naskah asli, Sayuti Melik melakukan koreksi ejaan: kata 'tempoh' diganti menjadi 'tempo', 'wakil-wakil bangsa Indonesia' diganti 'Atas nama bangsa Indonesia', dan penanggalan disempurnakan.",
    tingkatKesulitan: "Tantangan"
  },
  {
    id: 5,
    soal: "Nilai luhur Pendidikan Pancasila yang paling menonjol dari peristiwa perumusan Proklamasi Kemerdekaan 1945 adalah...",
    pilihan: [
      "Sikap individualis demi meraih popularitas pribadi di panggung politik",
      "Semangat persatuan, musyawarah mufakat, dan rela berkorban demi kepentingan bangsa di atas ego golongan",
      "Memaksakan kehendak golongan pemuda dengan kekerasan bersenjata",
      "Sikap pasrah menunggu bantuan dan belas kasihan dari bangsa-bangsa penjajah"
    ],
    kunci: 1,
    pembahasan: "Meskipun terjadi perbedaan pendapat panas antara pemuda dan golongan tua, keduanya mampu menekan ego masing-masing, bermusyawarah secara bijak di rumah Maeda, dan bersatu padu mewujudkan kemerdekaan Republik Indonesia. Ini cerminan Sila ke-3 dan Sila ke-4 Pancasila!",
    tingkatKesulitan: "Mudah"
  }
];
