/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, ArrowUp, Flag, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { downloadStandaloneHtml } from '../utils/exportStandaloneHtml';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 relative border-t-4 border-red-600 print:hidden">
      
      {/* Motivasi Kebangsaan Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        
        <div className="bg-gradient-to-r from-red-950/80 via-slate-800 to-red-950/80 p-6 sm:p-8 rounded-3xl border border-red-800/40 mb-10 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/30 text-amber-300 text-xs font-black uppercase mb-3 border border-red-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pesan Nilai-Nilai Luhur Pancasila</span>
          </div>
          
          <h3 className="font-heading font-black text-lg sm:text-2xl text-white max-w-2xl mx-auto leading-snug">
            "Kemerdekaan Bukanlah Akhir Perjuangan, Melainkan Titik Tolak Membangun Generasi Emas Indonesia!"
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Teruslah belajar dengan tekun, junjung tinggi toleransi keberagaman, gotong royong, dan cintai tanah air Indonesia seutuhnya. Kalian adalah agen penerus bangsa!
          </p>

          <div className="mt-5 inline-block font-heading font-black text-xs sm:text-sm tracking-widest text-amber-400 uppercase">
            — BHINNEKA TUNGGAL IKA —
          </div>
        </div>

        {/* Footer Navigation & Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-xs">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center text-white text-xl">
              🇮🇩
            </div>
            <div>
              <p className="font-heading font-black text-sm text-white">Lorong Waktu Kemerdekaan</p>
              <p className="text-slate-400">Media Pembelajaran Pendidikan Pancasila Kelas 7 SMP</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 font-bold">
            <a href="#garis-waktu" onClick={() => soundManager.playClick()} className="hover:text-white transition-colors">
              Garis Waktu
            </a>
            <a href="#galeri-tokoh" onClick={() => soundManager.playClick()} className="hover:text-white transition-colors">
              Tokoh Pahlawan
            </a>
            <a href="#mini-games" onClick={() => soundManager.playClick()} className="hover:text-white transition-colors">
              Mini Games
            </a>
            <a href="#kuis-kemerdekaan" onClick={() => soundManager.playClick()} className="hover:text-white transition-colors">
              Kuis Merdeka
            </a>
            <button
              onClick={() => {
                soundManager.playClick();
                downloadStandaloneHtml();
              }}
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Unduh File Mandiri (.html)</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-2 cursor-pointer font-bold"
            title="Kembali ke atas"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Signature */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>oleh Guru Penggerak Pendidikan Pancasila untuk Siswa Kelas 7 Indonesia.</span>
          </p>

          <div className="flex items-center gap-2">
            <Flag className="w-3.5 h-3.5 text-red-500" />
            <span>Merdeka Belajar • Indonesia Emas 2045</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
