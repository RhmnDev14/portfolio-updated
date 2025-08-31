"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { HyperText } from "@/components/magicui/hyper-text";
import { FaRegFilePdf } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

// ✅ dynamic import PdfViewer, ssr off
const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
});

export default function Hero() {
  const [showPdf, setShowPdf] = useState(false);

  // Lock/unlock body scroll saat modal aktif
  useEffect(() => {
    document.body.style.overflow = showPdf ? "hidden" : "auto";
  }, [showPdf]);

  return (
    <div className="relative">
      {/* Konten Hero utama */}
      <div
        className={`hero bg-transparent min-h-screen transition-opacity duration-300 ${
          showPdf ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="hero-content flex-col lg:flex-row-reverse lg:items-start lg:gap-12">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-lg shadow-black/40 border-4 border-white/80 transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Terminal>
              <TypingAnimation>
                &gt; npx create-dev rahmanumardi@latest init
              </TypingAnimation>
              <AnimatedSpan className="text-green-500">
                ✔ Setting up environment.
              </AnimatedSpan>
              <AnimatedSpan className="text-green-500">
                ✔ Setting up clean architecture.
              </AnimatedSpan>
              <AnimatedSpan className="text-green-500">
                ✔ Loading skills: Go, Java, JavaScript.
              </AnimatedSpan>
              <AnimatedSpan className="text-green-500">
                ✔ Connected to PostgreSQL · MySQL · Redis.
              </AnimatedSpan>
              <AnimatedSpan className="text-green-500">
                ✔ Enabling REST API · WebSocket · gRPC.
              </AnimatedSpan>
              <AnimatedSpan className="text-green-500">
                ✔ Configuring Docker & Nginx Gateway.
              </AnimatedSpan>
              <AnimatedSpan className="text-green-500">
                ✔ Experienced with Linux (Ubuntu) · CLI · Bash.
              </AnimatedSpan>
              <TypingAnimation className="text-muted-foreground">
                Success! Software Developer profile initialized.
              </TypingAnimation>
            </Terminal>

            {/* Button untuk buka modal */}
            <InteractiveHoverButton onClick={() => setShowPdf(true)}>
              CV
            </InteractiveHoverButton>
          </div>
        </div>
      </div>

      {/* Modal CV */}
      {showPdf && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-xl shadow-xl w-[90%] h-[80%] md:w-[70%] md:h-[75%] flex flex-col overflow-hidden">
            {/* Header */}
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

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto p-2">
              <PdfViewer file="/RahmanUmardi.pdf" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
