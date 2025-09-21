"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bentoSection = document.getElementById("bento");
      if (!bentoSection) return;

      // Show button when the user scrolls past the Bento section
      setVisible(window.scrollY > bentoSection.offsetTop - 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="cursor-pointer group fixed right-6 bottom-6 z-50 p-4 rounded-full bg-cyan-300 text-white shadow-lg hover:bg-violet-400 transition"
      aria-label="Scroll to top"
    >
      <ArrowUpIcon
        className="w-6 h-6 group-hover:cursor-pointer"
        aria-hidden="true"
      />
    </button>
  );
}
