/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, Award, CheckCircle2, XCircle, RotateCcw, 
  HelpCircle, Sparkles, ChevronRight, ChevronLeft, Printer, ShieldCheck 
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/historyData';
import { soundManager } from '../utils/audio';

interface QuizSectionProps {
  onQuizCompleted: (score: number) => void;
  savedScore: number | null;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  onQuizCompleted,
  savedScore,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);
  const [studentName, setStudentName] = useState('');

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(userAnswers).length;

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    soundManager.playClick();
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.kunci) {
        correctCount += 1;
      }
    });
    return Math.round((correctCount / totalQuestions) * 100);
  };

  const handleSubmitQuiz = () => {
    soundManager.playFanfare();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
    const finalScore = calculateScore();
    setIsSubmitted(true);
    onQuizCompleted(finalScore);
  };

  const handleResetQuiz = () => {
    soundManager.playClick();
    setUserAnswers({});
    setIsSubmitted(false);
    setShowExplanations(false);
    setCurrentQuestionIndex(0);
  };

  const finalScore = isSubmitted ? calculateScore() : (savedScore ?? 0);

  // Predikat Nilai SMP
  const getGradeInfo = (score: number) => {
    if (score === 100) {
      return {
        predikat: "🏆 Pahlawan Merdeka Sejati (Sempurna)",
        warna: "text-emerald-700 bg-emerald-100 border-emerald-300",
        deskripsi: "Luar biasa tanpa tanding! Pemahamanmu mengenai sejarah proklamasi dan nilai luhur Pancasila sangat mendalam!",
      };
    } else if (score >= 80) {
      return {
        predikat: "🎖️ Perwira Sejarah Tangguh (Sangat Baik)",
        warna: "text-blue-700 bg-blue-100 border-blue-300",
        deskripsi: "Hebat sekali! Kamu sudah menguasai kronologi dan esensi perjuangan para pendiri bangsa dengan sangat matang.",
      };
    } else if (score >= 60) {
      return {
        predikat: "⭐ Pejuang Sejarah Berbakat (Baik)",
        warna: "text-amber-800 bg-amber-100 border-amber-300",
        deskripsi: "Bagus! Kamu sudah memahami garis besar peristiwa, sedikit lagi mempelajari poin-poin penting untuk meraih nilai 100!",
      };
    } else {
      return {
        predikat: "🌱 Agen Sejarah Pemula (Perlu Review)",
        warna: "text-rose-700 bg-rose-100 border-rose-300",
        deskripsi: "Tetap semangat! Jangan berkecil hati, buka kembali Babak 1 sampai 4 di atas lalu coba kuis ini sekali lagi!",
      };
    }
  };

  const grade = getGradeInfo(finalScore);

  const handlePrintCertificate = () => {
    soundManager.playClick();
    window.print();
  };

  return (
    <section id="kuis-kemerdekaan" className="py-16 sm:py-24 bg-radial from-white via-red-50/30 to-amber-50/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-red-600" />
            <span>Evaluasi Pemahaman Siswa</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Kuis Kemerdekaan Kelas 7 SMP
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Jawab 5 soal pilihan ganda kurikulum Pendidikan Pancasila. Uji ketelitianmu dan dapatkan Rapor Digital Pahlawan!
          </p>
        </div>

        {/* ========================================================================= */}
        {/* HASIL KUIS JIKA SUDAH DISERAHKAN (SUBMITTED) */}
        {/* ========================================================================= */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl animate-in zoom-in-95 print:shadow-none print:border-none">
            
            {/* Header Rapor Digital */}
            <div className="text-center pb-6 border-b border-slate-200">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-red-500 text-white flex items-center justify-center text-4xl shadow-xl shadow-red-500/20 mb-4">
                🇮🇩
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-red-600">
                Laporan Hasil Belajar Mandiri
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Piagam Prestasi Agen Sejarah
              </h3>
              
              {/* Nama Siswa Input / Display */}
              <div className="mt-4 max-w-sm mx-auto flex items-center justify-center gap-2">
                <input
                  type="text"
                  placeholder="Ketik Nama Lengkapmu di Sini..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full text-center px-4 py-2 text-sm font-bold border-b-2 border-red-500 focus:outline-hidden bg-transparent"
                />
              </div>
            </div>

            {/* Score & Predikat Showcase */}
            <div className="my-8 text-center max-w-md mx-auto">
              <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 mb-2">
                {finalScore}
                <span className="text-2xl sm:text-3xl text-slate-400 font-bold">/100</span>
              </div>

              <div className={`inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-black border ${grade.warna} mb-3`}>
                {grade.predikat}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {grade.deskripsi}
              </p>
            </div>

            {/* Tombol Aksi Hasil */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-slate-200 print:hidden">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setShowExplanations(!showExplanations);
                }}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-black transition-colors cursor-pointer flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{showExplanations ? 'Sembunyikan Pembahasan' : 'Lihat Pembahasan Soal'}</span>
              </button>

              <button
                onClick={handlePrintCertificate}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-black transition-colors cursor-pointer flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak Rapor / Piagam</span>
              </button>

              <button
                onClick={handleResetQuiz}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs sm:text-sm font-black transition-colors cursor-pointer flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Kuis</span>
              </button>
            </div>

            {/* Review Soal & Pembahasan Lengkap */}
            {showExplanations && (
              <div className="mt-8 pt-6 border-t border-slate-200 space-y-6">
                <h4 className="font-heading font-black text-lg text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Kunci Jawaban & Pembahasan Lengkap Guru</span>
                </h4>

                {QUIZ_QUESTIONS.map((q, idx) => {
                  const userAnswer = userAnswers[q.id];
                  const isCorrect = userAnswer === q.kunci;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm ${
                        isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-slate-700">Soal {idx + 1}</span>
                        {isCorrect ? (
                          <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" /> Benar (+20)
                          </span>
                        ) : (
                          <span className="text-rose-700 font-extrabold flex items-center gap-1">
                            <XCircle className="w-4 h-4" /> Salah (0)
                          </span>
                        )}
                      </div>

                      <p className="font-bold text-slate-900 mb-3">{q.soal}</p>

                      <div className="p-3 rounded-xl bg-white/90 border border-slate-200 space-y-1 mb-3">
                        <p className="text-slate-600">
                          <strong>Jawabanmu:</strong>{' '}
                          {userAnswer !== undefined ? q.pilihan[userAnswer] : 'Tidak dijawab'}
                        </p>
                        <p className="text-emerald-800 font-bold">
                          <strong>Kunci Jawaban yang Benar:</strong> {q.pilihan[q.kunci]}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-100/90 text-slate-700">
                        <strong className="text-slate-900 block mb-1">💡 Pembahasan Guru:</strong>
                        {q.pembahasan}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        ) : (
          /* ========================================================================= */
          /* TAMPILAN INTERAKTIF MENGERJAKAN SOAL (QUESTION VIEW) */
          /* ========================================================================= */
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl">
            
            {/* Top Stepper: 1 2 3 4 5 Numbers */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
              <div>
                <span className="text-xs font-black uppercase text-red-600 tracking-wider">
                  Soal {currentQuestionIndex + 1} dari {totalQuestions}
                </span>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">
                  Tingkat Kesulitan: <span className="text-slate-800 font-bold">{currentQ.tingkatKesulitan}</span>
                </div>
              </div>

              {/* Number Buttons Bar */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = userAnswers[q.id] !== undefined;

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        soundManager.playClick();
                        setCurrentQuestionIndex(idx);
                      }}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl font-black text-xs transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-red-600 text-white shadow-md shadow-red-500/20 scale-105'
                          : isAnswered
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question Text */}
            <div className="mb-6">
              <h3 className="font-heading font-black text-base sm:text-lg text-slate-900 leading-snug">
                {currentQ.soal}
              </h3>
            </div>

            {/* 4 Choices (A, B, C, D) */}
            <div className="space-y-3 mb-8">
              {currentQ.pilihan.map((option, idx) => {
                const isSelected = userAnswers[currentQ.id] === idx;
                const letter = String.fromCharCode(65 + idx); // A, B, C, D

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(currentQ.id, idx)}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm flex items-start gap-3.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-red-50/90 border-red-500 text-red-950 font-bold shadow-xs scale-[1.01]'
                        : 'bg-slate-50 hover:bg-red-50/30 text-slate-700 border-slate-200/90 hover:border-red-300'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-red-600 text-white'
                          : 'bg-white border border-slate-300 text-slate-600'
                      }`}
                    >
                      {letter}
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Question Navigation Controls */}
            <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
                }}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  currentQuestionIndex === 0
                    ? 'opacity-40 text-slate-400 cursor-not-allowed'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <div className="text-xs text-slate-500 font-bold">
                Sudah dijawab: <span className="text-red-600">{answeredCount}</span> dari {totalQuestions}
              </div>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-black flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={answeredCount < totalQuestions}
                  className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 shadow-md transition-all cursor-pointer ${
                    answeredCount === totalQuestions
                      ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>Kirim Jawaban & Lihat Nilai</span>
                </button>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
