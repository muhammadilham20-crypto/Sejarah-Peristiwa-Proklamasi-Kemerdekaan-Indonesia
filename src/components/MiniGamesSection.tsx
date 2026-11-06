/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Puzzle, Trophy, RotateCcw, ArrowUp, ArrowDown, Check, 
  HelpCircle, Sparkles, Award, Zap, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { PROCLAMATION_PIECES, QUICK_TRIVIA_GAMES, FULL_PROCLAMATION_TEXT } from '../data/historyData';
import { ProclamationSentence } from '../types/history';
import { soundManager } from '../utils/audio';

interface MiniGamesSectionProps {
  onGame1Success: () => void;
  onGame2ScoreChange: (score: number) => void;
  isGame1Solved: boolean;
  game2Score: number;
}

export const MiniGamesSection: React.FC<MiniGamesSectionProps> = ({
  onGame1Success,
  onGame2ScoreChange,
  isGame1Solved,
  game2Score,
}) => {
  // Game 1 State: Teka-teki Susun Naskah
  const [pieces, setPieces] = useState<ProclamationSentence[]>(() => {
    // Acak urutan awal kecuali sudah benar
    const shuffled = [...PROCLAMATION_PIECES].sort(() => Math.random() - 0.5);
    return shuffled;
  });
  const [game1Message, setGame1Message] = useState<{ text: string; type: 'success' | 'error' | null }>({
    text: '',
    type: null,
  });
  const [showOriginalComparison, setShowOriginalComparison] = useState(false);

  // Game 2 State: Kuis Cepat Tokoh
  const [currentTriviaIndex, setCurrentTriviaIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [triviaFeedback, setTriviaFeedback] = useState<string | null>(null);
  const [triviaFinished, setTriviaFinished] = useState(false);

  // Helper pindah urutan kalimat di Game 1
  const movePiece = (index: number, direction: 'up' | 'down') => {
    soundManager.playClick();
    const newPieces = [...pieces];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newPieces.length) return;

    const temp = newPieces[index];
    newPieces[index] = newPieces[targetIndex];
    newPieces[targetIndex] = temp;
    setPieces(newPieces);
    setGame1Message({ text: '', type: null });
  };

  // Cek susunan Game 1
  const checkProclamationOrder = () => {
    const isCorrect = pieces.every((piece, idx) => piece.id === idx + 1);

    if (isCorrect) {
      soundManager.playFanfare();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setGame1Message({
        text: 'Luar Biasa! Kamu berhasil menyusun Naskah Proklamasi dengan urutan yang tepat dan autentik! 🎉',
        type: 'success',
      });
      onGame1Success();
    } else {
      soundManager.playWrong();
      setGame1Message({
        text: 'Urutannya masih belum pas, nih. Perhatikan kata pembuka, pokok pemikiran, dan tanggal di bagian akhir. Ayo coba lagi!',
        type: 'error',
      });
    }
  };

  const resetGame1 = () => {
    soundManager.playClick();
    const shuffled = [...PROCLAMATION_PIECES].sort(() => Math.random() - 0.5);
    setPieces(shuffled);
    setGame1Message({ text: '', type: null });
  };

  // Game 2 Answer Handler
  const handleTriviaAnswer = (optionIndex: number, isCorrect: boolean) => {
    if (selectedOptionIndex !== null) return; // cegah spam klik
    setSelectedOptionIndex(optionIndex);

    const currentQ = QUICK_TRIVIA_GAMES[currentTriviaIndex];

    if (isCorrect) {
      soundManager.playCorrect();
      const newScore = game2Score + 1;
      onGame2ScoreChange(newScore);
      setTriviaFeedback(currentQ.penjelasan);
    } else {
      soundManager.playWrong();
      setTriviaFeedback(`Kurang tepat. ${currentQ.penjelasan}`);
    }
  };

  const nextTriviaQuestion = () => {
    soundManager.playClick();
    if (currentTriviaIndex + 1 < QUICK_TRIVIA_GAMES.length) {
      setCurrentTriviaIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setTriviaFeedback(null);
    } else {
      setTriviaFinished(true);
      soundManager.playFanfare();
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const resetGame2 = () => {
    soundManager.playClick();
    setCurrentTriviaIndex(0);
    setSelectedOptionIndex(null);
    setTriviaFeedback(null);
    setTriviaFinished(false);
    onGame2ScoreChange(0);
  };

  return (
    <section id="mini-games" className="py-16 sm:py-24 bg-white border-t border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 fill-red-600" />
            <span>Zona Tantangan Gamifikasi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Mini Games Edukatif Sejarah
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Uji ketangkasan logika dan daya ingatmu melalui 2 permainan interaktif seru! Buktikan kamu layak menyandang gelar Agen Sejarah Unggul!
          </p>
        </div>

        {/* 2 Games Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* GAME 1: TEKA-TEKI SUSUN NASKAH PROKLAMASI */}
          {/* ========================================================================= */}
          <div className="bg-gradient-to-b from-slate-50 to-amber-50/20 rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-lg flex flex-col justify-between">
            <div>
              
              {/* Header Game 1 */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center font-black shadow-md shadow-red-500/20">
                    <Puzzle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600">Game 1</span>
                    <h3 className="font-heading font-black text-base sm:text-lg text-slate-900">
                      Teka-Teki Susun Naskah Proklamasi
                    </h3>
                  </div>
                </div>

                {isGame1Solved && (
                  <span className="inline-flex items-center gap-1 text-xs font-black bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Juara!</span>
                  </span>
                )}
              </div>

              {/* Instruksi Game 1 */}
              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
                Potongan kalimat naskah proklamasi di bawah ini telah teracak. Gunakan tombol panah 
                <span className="inline-block px-1.5 py-0.5 mx-1 bg-white border border-slate-300 rounded font-bold text-[11px]">▲</span> 
                dan 
                <span className="inline-block px-1.5 py-0.5 mx-1 bg-white border border-slate-300 rounded font-bold text-[11px]">▼</span> 
                untuk menyusun urutan kalimat dari awal hingga akhir!
              </p>

              {/* Potongan Kartu Kalimat yang bisa digeser */}
              <div className="space-y-2.5 mb-5">
                {pieces.map((piece, index) => (
                  <div
                    key={piece.id}
                    className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-red-300 transition-all flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-900 text-xs font-black flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-bold text-slate-800 whitespace-pre-line">
                          {piece.teks}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                          {piece.keterangan}
                        </p>
                      </div>
                    </div>

                    {/* Up / Down Action Controls */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => movePiece(index, 'up')}
                        disabled={index === 0}
                        className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                          index === 0
                            ? 'opacity-30 border-slate-200 text-slate-300 cursor-not-allowed'
                            : 'border-slate-200 hover:border-red-400 hover:bg-red-50 text-slate-600'
                        }`}
                        title="Geser ke atas"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => movePiece(index, 'down')}
                        disabled={index === pieces.length - 1}
                        className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                          index === pieces.length - 1
                            ? 'opacity-30 border-slate-200 text-slate-300 cursor-not-allowed'
                            : 'border-slate-200 hover:border-red-400 hover:bg-red-50 text-slate-600'
                        }`}
                        title="Geser ke bawah"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feedback Alert Box */}
              {game1Message.text && (
                <div
                  className={`p-3.5 rounded-2xl text-xs sm:text-sm font-bold mb-4 flex items-start gap-2.5 animate-in fade-in ${
                    game1Message.type === 'success'
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                      : 'bg-rose-50 text-rose-900 border border-rose-300'
                  }`}
                >
                  <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{game1Message.text}</span>
                </div>
              )}

            </div>

            {/* Bottom Actions Game 1 */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={checkProclamationOrder}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-black shadow-md shadow-red-600/20 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Periksa Urutan</span>
                </button>

                <button
                  onClick={resetGame1}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                  title="Acak Ulang Potongan"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  soundManager.playClick();
                  setShowOriginalComparison(!showOriginalComparison);
                }}
                className="text-xs font-bold text-red-600 hover:underline cursor-pointer"
              >
                {showOriginalComparison ? 'Sembunyikan Info Teks' : 'Lihat Teks Lengkap 📜'}
              </button>
            </div>

            {/* Comparison Drawer / Accordion */}
            {showOriginalComparison && (
              <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-slate-700 space-y-2 animate-in fade-in">
                <div className="font-heading font-black text-amber-950 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Naskah Otentik Hasil Ketikan Sayuti Melik:</span>
                </div>
                <pre className="p-3 bg-white rounded-xl border border-amber-200 font-mono text-[11px] whitespace-pre-wrap text-slate-800 leading-relaxed">
                  {FULL_PROCLAMATION_TEXT.otentik}
                </pre>
              </div>
            )}

          </div>

          {/* ========================================================================= */}
          {/* GAME 2: KUIS CEPAT TOKOH DI BALIK FAKTA */}
          {/* ========================================================================= */}
          <div className="bg-gradient-to-b from-slate-50 to-blue-50/20 rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-lg flex flex-col justify-between">
            <div>
              
              {/* Header Game 2 */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black shadow-md shadow-blue-500/20">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Game 2</span>
                    <h3 className="font-heading font-black text-base sm:text-lg text-slate-900">
                      Kuis Cepat: Siapa Tokoh di Balik Fakta?
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-slate-500">Skor:</span>
                  <div className="text-base sm:text-lg font-black text-blue-600 leading-none">
                    {game2Score} / {QUICK_TRIVIA_GAMES.length}
                  </div>
                </div>
              </div>

              {!triviaFinished ? (
                <>
                  {/* Ronde Indicator */}
                  <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-500">
                    <span>Ronde {currentTriviaIndex + 1} dari {QUICK_TRIVIA_GAMES.length}</span>
                    <span className="text-blue-600">Tebak 1 dari 3 Nama</span>
                  </div>

                  {/* Fact Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs mb-5">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Petunjuk Sejarah
                    </span>
                    <h4 className="font-heading font-black text-sm sm:text-base text-slate-800 mt-2 mb-1.5 leading-snug">
                      "{QUICK_TRIVIA_GAMES[currentTriviaIndex].pertanyaan}"
                    </h4>
                    <p className="text-xs text-slate-500 italic">
                      Fakta Tambahan: {QUICK_TRIVIA_GAMES[currentTriviaIndex].fakta}
                    </p>
                  </div>

                  {/* 3 Option Buttons */}
                  <div className="space-y-2.5 mb-5">
                    {QUICK_TRIVIA_GAMES[currentTriviaIndex].opsi.map((opt, idx) => {
                      const isSelected = selectedOptionIndex === idx;
                      const hasAnswered = selectedOptionIndex !== null;

                      let btnStyle = "bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300";
                      if (hasAnswered) {
                        if (opt.isCorrect) {
                          btnStyle = "bg-emerald-50 text-emerald-900 border-emerald-500 font-extrabold shadow-sm";
                        } else if (isSelected && !opt.isCorrect) {
                          btnStyle = "bg-rose-50 text-rose-900 border-rose-500 font-bold";
                        } else {
                          btnStyle = "bg-slate-100 text-slate-400 border-slate-200 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={hasAnswered}
                          onClick={() => handleTriviaAnswer(idx, opt.isCorrect)}
                          className={`w-full p-3 sm:p-3.5 rounded-2xl border text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 text-xs font-black flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="font-bold">{opt.nama}</span>
                          </div>

                          {hasAnswered && opt.isCorrect && (
                            <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">
                              ✓
                            </span>
                          )}
                          {hasAnswered && isSelected && !opt.isCorrect && (
                            <span className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs">
                              ✕
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Explanation */}
                  {triviaFeedback && (
                    <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 mb-4 animate-in fade-in flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                      <span>{triviaFeedback}</span>
                    </div>
                  )}
                </>
              ) : (
                /* Trivia Finished View */
                <div className="py-8 text-center animate-in zoom-in-95">
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-4">
                    🏆
                  </div>
                  <h4 className="font-heading font-black text-xl text-slate-900">
                    Semua Ronde Selesai!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto font-medium">
                    Kamu berhasil menjawab <strong className="text-blue-600">{game2Score} dari {QUICK_TRIVIA_GAMES.length}</strong> fakta pahlawan dengan tepat!
                  </p>

                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={resetGame2}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-black shadow-md transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Mainkan Lagi</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Actions Game 2 */}
            {!triviaFinished && (
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={resetGame2}
                  className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulang dari Awal</span>
                </button>

                {selectedOptionIndex !== null && (
                  <button
                    onClick={nextTriviaQuestion}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-black flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                  >
                    <span>Ronde Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
