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
    <section className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 w-full max-w-6xl mx-auto px-4 md:px-6 pt-20 md:pt-28 min-h-screen">
      {/* Profile */}
      <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-lg shadow-black/40 border-4 border-white/80 flex-shrink-0 mb-6 md:mb-0">
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Terminal + CV button */}
      <div className="flex flex-col gap-4 w-full max-w-lg">
        <Terminal>
          <TypingAnimation>
            &gt; npx create-dev rahmanumardi@latest init
          </TypingAnimation>
          <AnimatedSpan className="text-green-500">
            ✔ Setting up environment.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Setting up Clean Architecture · Microservice Architecture.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Loading skills: Go · Java · JavaScript.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Connected to PostgreSQL · MySQL · Redis · MongoDB.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Enabling REST API · WebSocket · gRPC.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Configuring Docker.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Experienced with Linux (Ubuntu) · CLI · Bash.
          </AnimatedSpan>
          <TypingAnimation className="text-muted-foreground">
            Success! Software Developer profile initialized.
          </TypingAnimation>
        </Terminal>

        <div className="mt-2 flex flex-col items-center md:items-start gap-3">
          <InteractiveHoverButton onClick={() => setShowPdf(true)}>
            CV
          </InteractiveHoverButton>

          {/* Scroll Down indicator for mobile */}
          <div className="flex flex-col items-center text-gray-600 md:hidden animate-bounce mt-2">
            <IoIosArrowDown className="text-2xl" />
            <span className="text-xs">Scroll Down</span>
          </div>
        </div>
      </div>

      {/* Scroll down indicator for desktop */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-gray-600 animate-bounce">
        <IoIosArrowDown className="text-3xl" />
        <span className="text-sm">Scroll Down</span>
      </div>

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
