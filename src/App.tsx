/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * =========================================================================
 * APLIKASI PEMBELAJARAN INTERAKTIF: LORONG WAKTU KEMERDEKAAN
 * Media Pembelajaran Pendidikan Pancasila Kelas 7 SMP
 * =========================================================================
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { FiguresGallery } from './components/FiguresGallery';
import { MiniGamesSection } from './components/MiniGamesSection';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';
import { ProclamationModal } from './components/ProclamationModal';
import { soundManager } from './utils/audio';

export default function App() {
  // Status Babak Garis Waktu yang telah diselesaikan siswa
  const [completedBabak, setCompletedBabak] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('lorong_waktu_babak');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Status Game 1: Teka-teki Naskah
  const [isGame1Solved, setIsGame1Solved] = useState<boolean>(() => {
    try {
      return localStorage.getItem('lorong_waktu_game1') === 'true';
    } catch {
      return false;
    }
  });

  // Skor Game 2: Trivia Tokoh
  const [game2Score, setGame2Score] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('lorong_waktu_game2');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  // Skor Kuis Akhir (0-100)
  const [quizScore, setQuizScore] = useState<number | null>(() => {
    try {
      const saved = localStorage.getItem('lorong_waktu_quiz');
      return saved !== null ? parseInt(saved, 10) : null;
    } catch {
      return null;
    }
  });

  // Status Suara & Modal Pembaca Naskah
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isReaderOpen, setIsReaderOpen] = useState<boolean>(false);

  // Simpan progres ke LocalStorage agar tidak hilang saat reload
  useEffect(() => {
    try {
      localStorage.setItem('lorong_waktu_babak', JSON.stringify(completedBabak));
    } catch {
      // ignore
    }
  }, [completedBabak]);

  useEffect(() => {
    try {
      localStorage.setItem('lorong_waktu_game1', isGame1Solved ? 'true' : 'false');
    } catch {
      // ignore
    }
  }, [isGame1Solved]);

  useEffect(() => {
    try {
      localStorage.setItem('lorong_waktu_game2', game2Score.toString());
    } catch {
      // ignore
    }
  }, [game2Score]);

  useEffect(() => {
    try {
      if (quizScore !== null) {
        localStorage.setItem('lorong_waktu_quiz', quizScore.toString());
      }
    } catch {
      // ignore
    }
  }, [quizScore]);

  // Kalkulasi Total Pengalaman (XP) & Lencana Agen Sejarah
  const totalXp = 
    (completedBabak.length * 50) + 
    (isGame1Solved ? 100 : 0) + 
    (game2Score * 20) + 
    (quizScore ?? 0);

  let badgesCount = 0;
  if (completedBabak.length === 4) badgesCount += 1;
  if (isGame1Solved) badgesCount += 1;
  if (game2Score >= 4) badgesCount += 1;
  if (quizScore !== null && quizScore >= 80) badgesCount += 1;

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundManager.setMuted(nextMuted);
  };

  const handleCompleteBabak = (babakNum: number) => {
    if (!completedBabak.includes(babakNum)) {
      setCompletedBabak(prev => [...prev, babakNum]);
    }
  };

  const handleGame1Success = () => {
    setIsGame1Solved(true);
  };

  const handleGame2ScoreChange = (score: number) => {
    setGame2Score(score);
  };

  const handleQuizCompleted = (score: number) => {
    setQuizScore(score);
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/20 text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        totalXp={totalXp}
        badgesCount={badgesCount}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenReader={() => setIsReaderOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section (Beranda) */}
        <Hero
          completedBabakCount={completedBabak.length}
          isGame1Solved={isGame1Solved}
          game2Score={game2Score}
          quizScore={quizScore}
          onOpenReader={() => setIsReaderOpen(true)}
        />

        {/* 3. Peta Perjalanan Sejarah (Timeline Interaktif 4 Babak) */}
        <TimelineSection
          completedBabak={completedBabak}
          onCompleteBabak={handleCompleteBabak}
          onOpenReader={() => setIsReaderOpen(true)}
        />

        {/* 4. Flashcard Tokoh Kunci (Detektif Sejarah) */}
        <FiguresGallery />

        {/* 5. Mini Games Edukatif (Teka-Teki Susun Naskah & Kuis Cepat) */}
        <MiniGamesSection
          onGame1Success={handleGame1Success}
          onGame2ScoreChange={handleGame2ScoreChange}
          isGame1Solved={isGame1Solved}
          game2Score={game2Score}
        />

        {/* 6. Latihan Soal Interaktif (Uji Pemahaman Kelas 7) */}
        <QuizSection
          onQuizCompleted={handleQuizCompleted}
          savedScore={quizScore}
        />

      </main>

      {/* 7. Footer dengan Pesan Kebangsaan & Nilai Pancasila */}
      <Footer />

      {/* Modal Penampil Naskah Klad & Otentik dengan Narator Audio */}
      <ProclamationModal
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
      />

    </div>
  );
}
