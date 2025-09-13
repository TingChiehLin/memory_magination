import Image from "next/image";

import bgImage from "./assets/imgs/bg.jpg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_80px] items-center justify-items-center min-h-screen">
      <Image
        src={bgImage}
        alt="Background_BG"
        fill //makes the image positioned absolutely
        style={{ objectFit: "cover" }}
        className=""
        priority
      />
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
      <main className="relative z-10 flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-6xl font-bold">Memory & Magination</h1>
      </main>
      <footer className="relative z-10 w-full h-20 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-slate-700 font-medium">
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
