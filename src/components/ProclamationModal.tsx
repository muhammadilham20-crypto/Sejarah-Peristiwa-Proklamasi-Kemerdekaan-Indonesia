/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, VolumeX, X, Flag, FileText, Sparkles, BookOpen } from 'lucide-react';
import { FULL_PROCLAMATION_TEXT } from '../data/historyData';
import { speakIndonesian, stopSpeaking, soundManager } from '../utils/audio';

interface ProclamationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProclamationModal: React.FC<ProclamationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState<'otentik' | 'klad' | 'perbandingan'>('otentik');

  if (!isOpen) return null;

  const handlePlayAudio = () => {
    soundManager.playClick();
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      const textToRead = "Proklamasi. Kami bangsa Indonesia dengan ini menyatakan kemerdekaan Indonesia. Hal-hal yang mengenai pemindahan kekuasaan dan lain-lain, diselenggarakan dengan cara saksama dan dalam tempo yang sesingkat-singkatnya. Jakarta, hari 17 bulan 8 tahun 05. Atas nama bangsa Indonesia, Soekarno Hatta.";
      speakIndonesian(textToRead, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handleClose = () => {
    stopSpeaking();
    setIsPlayingAudio(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center text-xl shadow-md shadow-red-500/20">
              <Flag className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
                Naskah Proklamasi Kemerdekaan
              </h3>
              <p className="text-xs text-slate-500 font-medium">Jl. Pegangsaan Timur 56, Jakarta Pusat</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action: Dengarkan Suara & Tab Pilihan */}
        <div className="my-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('otentik');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                activeTab === 'otentik' ? 'bg-white text-red-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Naskah Otentik (Ketik)
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('klad');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                activeTab === 'klad' ? 'bg-white text-red-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Naskah Klad (Tulis Tangan)
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('perbandingan');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                activeTab === 'perbandingan' ? 'bg-white text-red-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Perbedaan Ejaan
            </button>
          </div>

          <button
            onClick={handlePlayAudio}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
              isPlayingAudio
                ? 'bg-red-600 text-white animate-pulse'
                : 'bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Hentikan Suara</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                <span>Dengarkan Pembacaan</span>
              </>
            )}
          </button>
        </div>

        {/* Content Box */}
        {activeTab === 'otentik' && (
          <div className="bg-amber-50/70 p-5 sm:p-7 rounded-2xl border-2 border-amber-200 text-slate-800 shadow-inner">
            <div className="flex items-center justify-between text-xs font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
              <span>Diketik oleh: Sayuti Melik</span>
              <span>17 Agustus 1945</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed tracking-wide text-slate-900 font-bold text-center py-4">
              {FULL_PROCLAMATION_TEXT.otentik}
            </pre>
          </div>
        )}

        {activeTab === 'klad' && (
          <div className="bg-yellow-50/80 p-5 sm:p-7 rounded-2xl border-2 border-yellow-200 text-slate-800 shadow-inner">
            <div className="flex items-center justify-between text-xs font-bold text-yellow-800 mb-4 pb-2 border-b border-yellow-200">
              <span>Ditulis tangan langsung oleh: Ir. Soekarno</span>
              <span>Dini hari, 17 Agustus 1945</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed tracking-wide text-slate-900 font-medium text-center py-4 italic">
              {FULL_PROCLAMATION_TEXT.klad}
            </pre>
            <p className="text-[11px] text-yellow-900 text-center font-medium mt-2">
              (Naskah asli tulisan tangan ini sempat dibuang ke tempat sampah, lalu diselamatkan oleh wartawan B.M. Diah!)
            </p>
          </div>
        )}

        {activeTab === 'perbandingan' && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-1">1. Perubahan Kata "Tempoh"</strong>
              <span>Pada naskah klad tertulis <em>"tempoh"</em>, diubah oleh Sayuti Melik menjadi <em>"tempo"</em>.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-1">2. Perubahan Frasa Penandatangan</strong>
              <span>Pada naskah klad tertulis <em>"Wakil2 bangsa Indonesia"</em>, diubah menjadi <em>"Atas nama bangsa Indonesia"</em> atas usul pemuda Sukarni.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-1">3. Penulisan Penanggalan</strong>
              <span>Pada naskah klad tertulis <em>"Djakarta, 17 - 8 - '05"</em>, diketik menjadi <em>"Djakarta, hari 17 boelan 8 tahoen '05"</em> (Tahun 05 adalah tahun 2605 kalender Jepang).</span>
            </div>
          </div>
        )}

        {/* Makna Nilai Pancasila */}
        <div className="mt-5 p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-950 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Pesan Pendidikan Pancasila:</strong> {FULL_PROCLAMATION_TEXT.maknaPancasila}
          </p>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={handleClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black transition-colors cursor-pointer"
          >
            Tutup Naskah
          </button>
        </div>

      </div>
    </div>
  );
};
