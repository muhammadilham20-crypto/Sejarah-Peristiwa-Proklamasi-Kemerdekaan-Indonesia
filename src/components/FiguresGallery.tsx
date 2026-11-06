/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Quote, HelpCircle, Check, Award, Eye, RotateCw } from 'lucide-react';
import { HISTORICAL_FIGURES } from '../data/historyData';
import { HistoricalFigure } from '../types/history';
import { soundManager } from '../utils/audio';

interface FiguresGalleryProps {
  onUnlockFigure?: (id: string) => void;
}

export const FiguresGallery: React.FC<FiguresGalleryProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeFigure, setActiveFigure] = useState<HistoricalFigure | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const categories = ['Semua', 'Proklamator', 'Golongan Muda', 'Golongan Tua', 'Tokoh Pendukung'];

  const filteredFigures = selectedCategory === 'Semua'
    ? HISTORICAL_FIGURES
    : HISTORICAL_FIGURES.filter((fig) => fig.kategori === selectedCategory);

  const toggleFlip = (id: string) => {
    soundManager.playClick();
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openDetail = (fig: HistoricalFigure) => {
    soundManager.playClick();
    setActiveFigure(fig);
  };

  return (
    <section id="galeri-tokoh" className="py-16 sm:py-24 bg-amber-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Detektif Sejarah Junior</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Flashcard Tokoh Kunci Kemerdekaan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Kenali pahlawan bangsa yang mengorbankan jiwa, raga, dan pikiran demi terwujudnya Indonesia Merdeka. Klik kartu untuk membalik & menemukan fakta rahasia mereka!
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-sm shadow-red-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Figures Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredFigures.map((fig) => {
            const isFlipped = !!flippedCards[fig.id];

            return (
              <div
                key={fig.id}
                className="group relative h-[360px] perspective-1000"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleFlip(fig.id)}
                >
                  
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
                    <div>
                      {/* Category Badge & Flip hint */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${fig.badgeWarna}`}>
                          {fig.kategori}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 group-hover:text-red-600 transition-colors">
                          <RotateCw className="w-3 h-3" />
                          <span>Balik</span>
                        </span>
                      </div>

                      {/* Avatar Illustration */}
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr ${fig.avatarBg} flex items-center justify-center text-white text-3xl shadow-md shadow-slate-300 mb-4 group-hover:scale-105 transition-transform`}>
                        {fig.id === 'soekarno' && '🇮🇩'}
                        {fig.id === 'hatta' && '📚'}
                        {fig.id === 'fatmawati' && '🧵'}
                        {fig.id === 'sayuti-melik' && '⌨️'}
                        {fig.id === 'sukarni' && '🔥'}
                        {fig.id === 'maeda' && '🏠'}
                        {fig.id === 'achmad-soebardjo' && '🤝'}
                        {fig.id === 'latief-suhud' && '🚩'}
                      </div>

                      {/* Name & Title */}
                      <div className="text-center">
                        <h3 className="font-heading font-black text-base text-slate-900 group-hover:text-red-600 transition-colors">
                          {fig.nama}
                        </h3>
                        <p className="text-xs text-red-600 font-bold mt-0.5">
                          {fig.gelar}
                        </p>
                      </div>

                      {/* Role summary */}
                      <div className="mt-4 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                        <p className="text-xs text-slate-600 font-semibold line-clamp-2">
                          {fig.peran}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                      <span>Klik untuk fakta rahasia</span>
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* BACK SIDE (FLIPPED) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-5 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-red-600/80 text-white">
                          Fakta Detektif
                        </span>
                        <RotateCw className="w-3.5 h-3.5 text-slate-400" />
                      </div>

                      <h4 className="font-heading font-bold text-sm text-amber-300">
                        {fig.nama}
                      </h4>

                      {/* Kutipan Inspiratif */}
                      <div className="my-3 p-3 rounded-xl bg-white/10 text-xs italic text-slate-200 border-l-2 border-amber-400">
                        <Quote className="w-3 h-3 text-amber-400 inline mr-1 -mt-1" />
                        {fig.kutipanTerkenal}
                      </div>

                      {/* Fakta Unik */}
                      <div className="text-xs text-slate-300 leading-relaxed font-normal">
                        <strong className="text-amber-400 block mb-0.5">Fakta Unik:</strong>
                        <p className="line-clamp-4">{fig.faktaUnik}</p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openDetail(fig);
                      }}
                      className="w-full py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Baca Kisah Lengkap</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Detail Tokoh Lengkap */}
        {activeFigure && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${activeFigure.avatarBg} flex items-center justify-center text-white text-2xl shadow-md`}>
                    {activeFigure.id === 'soekarno' && '🇮🇩'}
                    {activeFigure.id === 'hatta' && '📚'}
                    {activeFigure.id === 'fatmawati' && '🧵'}
                    {activeFigure.id === 'sayuti-melik' && '⌨️'}
                    {activeFigure.id === 'sukarni' && '🔥'}
                    {activeFigure.id === 'maeda' && '🏠'}
                    {activeFigure.id === 'achmad-soebardjo' && '🤝'}
                    {activeFigure.id === 'latief-suhud' && '🚩'}
                  </div>
                  <div>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${activeFigure.badgeWarna}`}>
                      {activeFigure.kategori}
                    </span>
                    <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 mt-1">
                      {activeFigure.nama}
                    </h3>
                    <p className="text-xs text-red-600 font-bold">{activeFigure.gelar}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveFigure(null);
                  }}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Detail Content */}
              <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Peran Utama dalam Kemerdekaan:</span>
                  </h4>
                  <p className="leading-relaxed bg-red-50/60 p-3 rounded-xl border border-red-100">
                    {activeFigure.detailPeran}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Quote className="w-4 h-4 text-red-500" />
                    <span>Kutipan Pahlawan:</span>
                  </h4>
                  <p className="italic bg-amber-50/70 p-3 rounded-xl border border-amber-200 text-amber-950">
                    {activeFigure.kutipanTerkenal}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    <span>Fakta Bersejarah yang Wajib Diketahui:</span>
                  </h4>
                  <p className="leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                    {activeFigure.faktaUnik}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveFigure(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Tutup Info Tokoh
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
