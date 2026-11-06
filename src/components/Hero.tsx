/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Gamepad2, ArrowRight, Sparkles, CheckCircle2, Award, Flag } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface HeroProps {
  completedBabakCount: number;
  isGame1Solved: boolean;
  game2Score: number;
  quizScore: number | null;
  onOpenReader: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  completedBabakCount,
  isGame1Solved,
  game2Score,
  quizScore,
  onOpenReader,
}) => {
  const scrollTo = (id: string) => {
    soundManager.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-radial from-red-50/70 via-white to-amber-50/40">
      {/* Background Decorative Circles & Indonesian Flag Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-24 left-1/4 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-12 right-1/4 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Teacher's Friendly Greeting Banner */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/80 text-red-700 text-xs sm:text-sm font-extrabold border border-red-200 shadow-xs animate-bounce shadow-red-500/10">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Halo Agen Sejarah Muda Kelas 7! Misi Merdeka Menantimu 🇮🇩</span>
          </div>
        </div>

        {/* Hero Headline & Intro */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight sm:leading-none">
            Lorong Waktu Kemerdekaan: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-800">
              Misi Menuju 17 Agustus 1945
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Jelajahi detik-detik menegangkan lahirnya Republik Indonesia! Dari runtuhnya kekuasaan Jepang, drama Rengasdengklok, hingga berkumandangnya Proklamasi kemerdekaan.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo('garis-waktu')}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-600/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Compass className="w-5 h-5 text-amber-300" />
              <span>Mulai Petualangan</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('mini-games')}
              className="inline-flex items-center gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm sm:text-base border-2 border-slate-200 hover:border-red-300 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Gamepad2 className="w-5 h-5 text-red-600" />
              <span>Coba Mini Games</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onOpenReader();
              }}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-amber-100/70 hover:bg-amber-200/80 text-amber-900 font-bold text-sm border border-amber-300/80 transition-all cursor-pointer"
            >
              <Flag className="w-4 h-4 text-red-600 fill-red-600" />
              <span>Lihat Naskah Otentik</span>
            </button>
          </div>
        </div>

        {/* Dashboard Misi Agen Sejarah (Gamification Status Bar) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xl shadow-slate-200/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-black">
                  🎯
                </div>
                <div>
                  <h2 className="font-heading font-black text-base sm:text-lg text-slate-800">
                    Buku Catatan Misi Agen Sejarah
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">Selesaikan seluruh babak, pecahkan game, dan raih predikat pahlawan!</p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs font-bold text-slate-600">Status Misi:</span>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-300">
                  {completedBabakCount === 4 && isGame1Solved && game2Score >= 3 && quizScore !== null
                    ? '🎉 MISI PARIPURNA!'
                    : 'SEDANG BERJALAN'}
                </span>
              </div>
            </div>

            {/* 4 Mission Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              
              {/* Mission 1: Garis Waktu */}
              <div 
                onClick={() => scrollTo('garis-waktu')}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-red-50/50 border border-slate-200/70 hover:border-red-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-slate-500 group-hover:text-red-600">Babak 1 - 4</span>
                  {completedBabakCount === 4 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <span className="text-xs font-black text-slate-400">{completedBabakCount}/4</span>
                  )}
                </div>
                <h3 className="font-heading font-black text-sm text-slate-800">Garis Waktu</h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">Dari Jepang hingga Proklamasi</p>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2.5 overflow-hidden">
                  <div 
                    className="bg-red-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(completedBabakCount / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Mission 2: Detektif Tokoh */}
              <div 
                onClick={() => scrollTo('galeri-tokoh')}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-red-50/50 border border-slate-200/70 hover:border-red-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-slate-500 group-hover:text-red-600">Tokoh Kunci</span>
                  <Award className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="font-heading font-black text-sm text-slate-800">Galeri Tokoh</h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">8 Tokoh Penentu Sejarah</p>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2.5 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full w-full"></div>
                </div>
              </div>

              {/* Mission 3: Mini Games */}
              <div 
                onClick={() => scrollTo('mini-games')}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-red-50/50 border border-slate-200/70 hover:border-red-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-slate-500 group-hover:text-red-600">2 Permainan</span>
                  {isGame1Solved ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <span className="text-xs font-black text-amber-600">Mainkan!</span>
                  )}
                </div>
                <h3 className="font-heading font-black text-sm text-slate-800">Mini Games</h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">Susun Naskah & Tebak Tokoh</p>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2.5 overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(isGame1Solved ? 50 : 0) + (game2Score > 0 ? 50 : 0)}%` }}
                  ></div>
                </div>
              </div>

              {/* Mission 4: Uji Pemahaman */}
              <div 
                onClick={() => scrollTo('kuis-kemerdekaan')}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-red-50/50 border border-slate-200/70 hover:border-red-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-slate-500 group-hover:text-red-600">Kuis 5 Soal</span>
                  {quizScore !== null ? (
                    <span className="text-xs font-black text-red-600">{quizScore}/100</span>
                  ) : (
                    <span className="text-xs font-black text-slate-400">Siap Uji?</span>
                  )}
                </div>
                <h3 className="font-heading font-black text-sm text-slate-800">Kuis Merdeka</h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">Skor & Pembahasan Lengkap</p>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2.5 overflow-hidden">
                  <div 
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: quizScore !== null ? `${quizScore}%` : '0%' }}
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
