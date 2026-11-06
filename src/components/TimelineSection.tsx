/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  SunMedium, Hourglass, ShieldAlert, Flag, CheckCircle, 
  Lightbulb, HelpCircle, ArrowRight, ArrowLeft, Users, 
  Check, X, Sparkles, BookCheck
} from 'lucide-react';
import { TIMELINE_DATA } from '../data/historyData';
import { soundManager } from '../utils/audio';

interface TimelineSectionProps {
  completedBabak: number[];
  onCompleteBabak: (babakNumber: number) => void;
  onOpenReader: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  completedBabak,
  onCompleteBabak,
  onOpenReader,
}) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  const currentEvent = TIMELINE_DATA.find((e) => e.babak === activeTab) || TIMELINE_DATA[0];

  const handleSelectTab = (babak: number) => {
    soundManager.playClick();
    setActiveTab(babak);
  };

  const handleQuizAnswer = (babakId: number, selectedIndex: number, correctIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [babakId]: selectedIndex }));
    setShowExplanation(prev => ({ ...prev, [babakId]: true }));

    if (selectedIndex === correctIndex) {
      soundManager.playCorrect();
    } else {
      soundManager.playWrong();
    }
  };

  const handleFinishBabak = (babakNum: number) => {
    if (!completedBabak.includes(babakNum)) {
      soundManager.playFanfare();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      onCompleteBabak(babakNum);
    }
  };

  // Helper render icon
  const getIcon = (ikon: string, active: boolean) => {
    const className = `w-5 h-5 sm:w-6 sm:h-6 ${active ? 'text-white' : 'text-slate-600'}`;
    switch (ikon) {
      case 'SunMedium': return <SunMedium className={className} />;
      case 'Hourglass': return <Hourglass className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'Flag': return <Flag className={className} />;
      default: return <Flag className={className} />;
    }
  };

  return (
    <section id="garis-waktu" className="py-16 sm:py-24 bg-white border-t border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider mb-3">
            <span>Babak Perjuangan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Peta Perjalanan Menuju Kemerdekaan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Ikuti 4 babak penting sejarah yang mengubah nasib tanah air kita dari cengkeraman penjajahan hingga proklamasi berdaulat.
          </p>
        </div>

        {/* Stepper / Tab Bar Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-8">
          {TIMELINE_DATA.map((item) => {
            const isActive = activeTab === item.babak;
            const isDone = completedBabak.includes(item.babak);

            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.babak)}
                className={`relative text-left p-3.5 sm:p-5 rounded-2xl transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-red-600 to-rose-700 text-white border-red-600 shadow-lg shadow-red-600/20 scale-[1.02]'
                    : 'bg-slate-50 hover:bg-red-50/60 text-slate-700 border-slate-200 hover:border-red-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-white/20' : 'bg-slate-200/80'
                    }`}
                  >
                    {getIcon(item.ikon, isActive)}
                  </div>
                  {isDone && (
                    <span
                      title="Babak ini sudah selesai kamu pelajari!"
                      className={`flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white text-red-700' : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Selesai</span>
                    </span>
                  )}
                </div>

                <div className={`text-[11px] font-extrabold uppercase tracking-wider ${isActive ? 'text-amber-300' : 'text-slate-400'}`}>
                  Babak {item.babak} • {item.periode}
                </div>
                <h3 className={`font-heading font-black text-xs sm:text-sm mt-1 line-clamp-2 ${isActive ? 'text-white' : 'text-slate-800'}`}>
                  {item.judulBabak}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Babak Main Content Card */}
        <div className="bg-gradient-to-b from-slate-50/70 to-white rounded-3xl border border-slate-200/80 shadow-xl p-5 sm:p-8 lg:p-10">
          
          {/* Top Babak Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-red-600 text-white uppercase tracking-wider">
                  Babak {currentEvent.babak} dari 4
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  🗓️ {currentEvent.periode}
                </span>
              </div>
              <h3 className="font-heading font-black text-xl sm:text-3xl text-slate-900">
                {currentEvent.judulBabak}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold italic mt-1">
                "{currentEvent.tagline}"
              </p>
            </div>

            {/* Quick Completion / Reader Button */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              {currentEvent.babak === 4 && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    onOpenReader();
                  }}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm shadow-md transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Flag className="w-4 h-4 fill-white" />
                  <span>Dengar Pembacaan</span>
                </button>
              )}

              <button
                onClick={() => handleFinishBabak(currentEvent.babak)}
                disabled={completedBabak.includes(currentEvent.babak)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  completedBabak.includes(currentEvent.babak)
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 cursor-default'
                    : 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20 active:scale-95'
                }`}
              >
                {completedBabak.includes(currentEvent.babak) ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Babak Dikuasai (+50 XP)</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Tandai Paham (+50 XP)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Rangkuman Naratif Siswa */}
          <div className="my-6 sm:my-8 bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/70 shadow-xs">
            <h4 className="font-heading font-black text-base sm:text-lg text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-red-600 rounded-full inline-block"></span>
              Rangkuman Materi Sejarah
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {currentEvent.ringkasan}
            </p>
          </div>

          {/* Special Feature: Perbedaan Pendapat Golongan Muda vs Golongan Tua (Babak 2) */}
          {currentEvent.perbedaanPendapat && (
            <div className="my-6 sm:my-8">
              <h4 className="font-heading font-black text-base sm:text-lg text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-red-600" />
                Duel Pemikiran: Golongan Muda vs Golongan Tua
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                
                {/* Golongan Muda Card */}
                <div className="bg-red-50/80 border-2 border-red-200 rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-sm">
                      ⚡
                    </span>
                    <div>
                      <h5 className="font-heading font-black text-sm sm:text-base text-red-900">
                        Golongan Muda (Revolusioner)
                      </h5>
                      <p className="text-xs text-red-700 font-medium">Penuh semangat & berani ambil risiko</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {currentEvent.perbedaanPendapat.golonganMuda.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Golongan Tua Card */}
                <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                      ⚖️
                    </span>
                    <div>
                      <h5 className="font-heading font-black text-sm sm:text-base text-blue-900">
                        Golongan Tua (Diplomatis)
                      </h5>
                      <p className="text-xs text-blue-700 font-medium">Bijaksana & mengutamakan keselamatan rakyat</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {currentEvent.perbedaanPendapat.golonganTua.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-center gap-2">
                <span>💡</span>
                <span>
                  <strong>Nilai Pancasila:</strong> Meski sempat berbeda haluan, kedua golongan tidak bermusuhan melainkan mencari titik temu lewat musyawarah mufakat demi kemerdekaan bangsa!
                </span>
              </div>
            </div>
          )}

          {/* Poin Penting Catatan Ringkas */}
          <div className="my-6">
            <h4 className="font-heading font-black text-sm sm:text-base text-slate-800 mb-3 flex items-center gap-2">
              <BookCheck className="w-4 h-4 text-emerald-600" />
              Poin Kunci yang Sering Keluar di Ujian SMP:
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {currentEvent.poinPenting.map((point, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="font-medium leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Fact / Tahukah Kamu */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400/30 text-amber-800 flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <span className="font-heading font-black text-xs sm:text-sm text-amber-950 uppercase tracking-wide">
                Fakta Unik Sejarah (Tahukah Kamu?):
              </span>
              <p className="text-xs sm:text-sm text-amber-900 mt-1 font-medium leading-relaxed">
                {currentEvent.funFact}
              </p>
            </div>
          </div>

          {/* Kuis Kilat Babak Ini */}
          <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50/50 rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-5 h-5 text-red-600" />
              <h5 className="font-heading font-black text-sm sm:text-base text-slate-900">
                Uji Kilat Babak {currentEvent.babak}:
              </h5>
            </div>
            
            <p className="text-xs sm:text-sm font-bold text-slate-800 mb-3">
              {currentEvent.kuisKilat.pertanyaan}
            </p>

            <div className="space-y-2">
              {currentEvent.kuisKilat.pilihan.map((option, idx) => {
                const selected = quizAnswers[currentEvent.babak] === idx;
                const isCorrect = idx === currentEvent.kuisKilat.jawabanBenar;
                const hasAnswered = quizAnswers[currentEvent.babak] !== undefined;

                let btnStyle = "bg-white hover:bg-slate-100 text-slate-700 border-slate-200";
                if (hasAnswered) {
                  if (isCorrect) {
                    btnStyle = "bg-emerald-50 text-emerald-900 border-emerald-500 font-bold";
                  } else if (selected && !isCorrect) {
                    btnStyle = "bg-rose-50 text-rose-900 border-rose-500";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnswered}
                    onClick={() => handleQuizAnswer(currentEvent.babak, idx, currentEvent.kuisKilat.jawabanBenar)}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[11px] font-black flex items-center justify-center">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </span>
                    {hasAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-600" />}
                    {hasAnswered && selected && !isCorrect && <X className="w-4 h-4 text-rose-600" />}
                  </button>
                );
              })}
            </div>

            {showExplanation[currentEvent.babak] && (
              <div className="mt-3 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium">
                <strong>Penjelasan Guru:</strong> {currentEvent.kuisKilat.penjelasan}
              </div>
            )}
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-200/80">
            <button
              onClick={() => handleSelectTab(Math.max(1, activeTab - 1))}
              disabled={activeTab === 1}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                activeTab === 1 ? 'opacity-40 cursor-not-allowed text-slate-400' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Babak Sebelumnya</span>
            </button>

            <span className="text-xs font-bold text-slate-400">
              {activeTab} / 4
            </span>

            <button
              onClick={() => handleSelectTab(Math.min(4, activeTab + 1))}
              disabled={activeTab === 4}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                activeTab === 4 ? 'opacity-40 cursor-not-allowed text-slate-400' : 'text-red-600 hover:bg-red-50'
              }`}
            >
              <span>Babak Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
