"use client";

import Image from "next/image";

import bgImage from "./assets/imgs/bg.jpg";
import NavBar from "@/layouts/NavBar";
import BentoGrid from "@/layouts/BentoGrid";
import ScrollToTopButton from "./Components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section id="hero" className="relative h-screen w-full">
        <Image
          src={bgImage}
          alt="Background_BG"
          fill
          style={{ objectFit: "cover" }}
          draggable={false}
          className="pointer-events-none"
          onContextMenu={(e) => e.preventDefault()}
          priority
        />

        <div className="relative z-10 flex flex-col h-full">
          <header className="w-full max-w-7xl mx-auto px-6 lg:px-0 py-6">
            <NavBar />
          </header>

          <div className="flex flex-1 flex-col items-center justify-center gap-y-6">
            <h1 className="text-3xl md:text-7xl font-bold text-center text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Childhood memories and imagination
            </h1>
            <span className="text-3xl text-center text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Curiosity | Creativity | Vision
            </span>
          </div>
        </div>
      </section>

      <section id="bento" className="bg-slate-900">
        <BentoGrid />
      </section>

      <ScrollToTopButton />

      <footer className="relative z-10 w-full h-20 bg-slate-800 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-white font-medium text-sm">
          © Copyright 2025. Developed by{" "}
          <a
            className="cursor-pointer hover:text-white"
            href="https://github.com/TingChiehLin/memory_magination"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ting Chieh Lin
          </a>
        </span>
      </footer>
    </div>
  );
}
