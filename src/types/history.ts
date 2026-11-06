/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Tipe Data untuk Media Pembelajaran Sejarah Proklamasi SMP Kelas 7
 */

export interface TimelineEvent {
  id: number;
  babak: number;
  judulBabak: string;
  periode: string;
  tagline: string;
  ikon: string;
  ringkasan: string;
  poinPenting: string[];
  perbedaanPendapat?: {
    golonganMuda: string[];
    golonganTua: string[];
  };
  tokohKunci: string[];
  funFact: string;
  kuisKilat: {
    pertanyaan: string;
    pilihan: string[];
    jawabanBenar: number;
    penjelasan: string;
  };
}

export interface HistoricalFigure {
  id: string;
  nama: string;
  gelar: string;
  peran: string;
  detailPeran: string;
  kutipanTerkenal: string;
  faktaUnik: string;
  kategori: 'Proklamator' | 'Golongan Muda' | 'Golongan Tua' | 'Tokoh Pendukung';
  badgeWarna: string;
  avatarBg: string;
}

export interface ProclamationSentence {
  id: number;
  teks: string;
  keterangan: string;
}

export interface QuickTriviaGame {
  id: number;
  pertanyaan: string;
  fakta: string;
  opsi: {
    nama: string;
    isCorrect: boolean;
  }[];
  penjelasan: string;
}

export interface QuizQuestion {
  id: number;
  soal: string;
  pilihan: string[];
  kunci: number; // indeks 0-3
  pembahasan: string;
  tingkatKesulitan: 'Mudah' | 'Sedang' | 'Tantangan';
}
