/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Award, Sparkles, BookOpen, Download } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { downloadStandaloneHtml } from '../utils/exportStandaloneHtml';

interface NavbarProps {
  totalXp: number;
  badgesCount: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenReader: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  totalXp,
  badgesCount,
  isMuted,
  onToggleMute,
  onOpenReader,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Garis Waktu', href: '#garis-waktu' },
    { label: 'Galeri Tokoh', href: '#galeri-tokoh' },
    { label: 'Mini Games', href: '#mini-games' },
    { label: 'Kuis Kemerdekaan', href: '#kuis-kemerdekaan' },
  ];

  const handleNavClick = (href: string) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-red-100 shadow-xs transition-all">
      {/* Pita Merah Putih di Atas Sekali */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/2 bg-red-600"></div>
        <div className="h-full w-1/2 bg-white border-b border-slate-200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Judul Aplikasi */}
          <a 
            href="#beranda" 
            onClick={() => soundManager.playClick()}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <span className="text-xl sm:text-2xl">🇮🇩</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-red-600 transition-colors">
                  Lorong Waktu
                </span>
                <span className="bg-red-100 text-red-700 text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-full border border-red-200">
                  SMP Kls 7
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Pendidikan Pancasila</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-red-600 hover:bg-red-50/80 rounded-xl transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Student Status & Control Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* XP Badge */}
            <div 
              title="Poin Pengalaman Sejarah Kamu"
              className="hidden sm:flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1.5 rounded-full text-xs font-bold shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>{totalXp} XP</span>
              {badgesCount > 0 && (
                <span className="flex items-center gap-1 bg-amber-200/60 px-1.5 py-0.5 rounded-full text-[10px]">
                  <Award className="w-3 h-3 text-amber-700" />
                  {badgesCount}
                </span>
              )}
            </div>

            {/* Tombol Baca Naskah Otentik */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenReader();
              }}
              className="hidden sm:flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              title="Buka Teks Naskah Proklamasi Klad & Otentik"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Naskah Asli</span>
            </button>

            {/* Tombol Unduh File Mandiri Offline untuk Guru */}
            <button
              onClick={() => {
                soundManager.playClick();
                downloadStandaloneHtml();
              }}
              className="hidden md:flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              title="Unduh File HTML Mandiri untuk digunakan Offline di Komputer Sekolah"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Unduh Offline</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => {
                onToggleMute();
                soundManager.playClick();
              }}
              className="p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-red-600 hover:bg-red-50 border border-slate-200 transition-colors cursor-pointer"
              aria-label={isMuted ? 'Nyalakan Efek Suara' : 'Matikan Efek Suara'}
              title={isMuted ? 'Nyalakan Efek Suara' : 'Matikan Efek Suara'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 text-slate-700 hover:text-red-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-5 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>{totalXp} XP Diperoleh</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenReader();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Naskah Asli</span>
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  downloadStandaloneHtml();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh</span>
              </button>
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-2.5 text-base font-bold text-slate-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
