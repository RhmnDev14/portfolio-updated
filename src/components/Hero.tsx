"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { HyperText } from "@/components/magicui/hyper-text";
import { FaRegFilePdf } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
});

export default function Hero() {
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPdf ? "hidden" : "auto";
  }, [showPdf]);

  return (
    // PERBAIKAN: Meningkatkan padding-top di mobile dari pt-24 menjadi pt-32 (memberi ruang ekstra)
    <section className="relative w-full px-4 md:px-8 pt-32 md:pt-28 flex flex-col items-center justify-center">
      {/* Kontainer utama - items-center di mobile, md:items-center di desktop (rata tengah vertikal) */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-10 md:gap-14 w-full max-w-7xl mx-auto">
        
        {/* Kolom 1: Header ucapan selamat datang (Kiri di desktop) */}
        <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-none">
          <TypingAnimation className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-400 dark:text-blue-400 drop-shadow-lg leading-snug">
            Welcome to My Portfolio 👋
          </TypingAnimation>
          {/* Kalimat 2: Hanya muncul di desktop (hidden md:block) */}
          <TypingAnimation className="hidden md:block text-sm md:text-xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
            a showcase of dedication, innovation, and continuous growth in software development.
          </TypingAnimation>
        </div>

        {/* Kolom 2: Konten Kanan (Foto di atas Terminal, Rata Tengah di desktop) */}
        <div className="flex flex-col gap-10 md:gap-8 w-full md:w-1/2 order-2 md:order-none items-center md:items-center">

          {/* FOTO (Di atas Terminal di desktop) */}
          <div className="flex justify-center md:justify-center w-full">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden transition-transform duration-300">
              <img
                src="/Gemini_Generated_Image_1ajo331ajo331ajo (1).png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Terminal + tombol (Di bawah Foto di desktop) */}
          <div className="flex flex-col gap-4 w-full md:max-w-md text-left items-center">
            <Terminal className="text-left bg-white shadow-2xl w-full">
              <TypingAnimation className="text-sm md:text-base text-gray-500">
                  &gt; npx create-dev rahmanumardi@latest init
              </TypingAnimation>
              <AnimatedSpan className="text-cyan-400">
                ✔ Setting up environment.
              </AnimatedSpan>
              <AnimatedSpan className="text-cyan-400">
                ✔ Setting up Clean Architecture · Microservice Architecture.
              </AnimatedSpan>
              <AnimatedSpan className="text-cyan-400">
                ✔ Loading skills: Go · Java · JavaScript.
              </AnimatedSpan>
              <AnimatedSpan className="text-cyan-400">
                ✔ Connected to PostgreSQL · MySQL · Redis · MongoDB.
              </AnimatedSpan>
              <AnimatedSpan className="text-cyan-400">
                ✔ Enabling REST API · WebSocket · gRPC.
              </AnimatedSpan>
              <AnimatedSpan className="text-cyan-400">
                ✔ Configuring Docker.
              </AnimatedSpan>
              <AnimatedSpan className="text-cyan-400">
                ✔ Experienced with Linux (Ubuntu) · CLI · Bash.
              </AnimatedSpan>
              <TypingAnimation className="text-sm md:text-base text-gray-500">
                Success! Software Developer profile initialized.
              </TypingAnimation>
            </Terminal>

            {/* Tombol CV (Rata tengah di mobile & desktop) */}
            <div className="mt-2 flex flex-col items-center md:items-center gap-3 w-full">
              <InteractiveHoverButton onClick={() => setShowPdf(true)}>
                CV
              </InteractiveHoverButton>

              {/* Scroll Down indicator for mobile */}
              {/* <div className="flex flex-col items-center text-blue-600 md:hidden animate-bounce mt-2">
                <IoIosArrowDown className="text-2xl" />
                <span className="text-xs">Scroll Down</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down untuk desktop (Rata tengah bawah) */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-row items-center text-blue-600 animate-bounce z-10">
        <IoIosArrowDown className="text-3xl mr-2" />
        <span className="text-sm">
          Scroll down to explore more about my work and journey.
        </span>
      </div> */}

      {/* Modal CV */}
      {showPdf && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-xl shadow-xl w-[90%] h-[80%] md:w-[70%] md:h-[75%] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b">
              <ShinyButton onClick={() => setShowPdf(false)}>
                <IoIosArrowBack />
              </ShinyButton>
              <HyperText>CV</HyperText>
              <a
                href="/RahmanUmardi.pdf"
                download="Rahman-Umardi-CV.pdf"
                className="ml-2"
              >
                <ShinyButton>
                  <FaRegFilePdf />
                </ShinyButton>
              </a>
            </div>
            <div className="flex-1 overflow-auto p-2">
              <PdfViewer file="/RahmanUmardi.pdf" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}