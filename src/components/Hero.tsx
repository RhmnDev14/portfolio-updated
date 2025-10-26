"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { HyperText } from "@/components/magicui/hyper-text";
import { FaRegFilePdf } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

// Impor untuk Dock Social Media
import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { cn } from "@/lib/utils"; 
import React from "react"; 

// Mengimpor TypingAnimation dari magicui
import { TypingAnimation } from "@/components/magicui/terminal"; 

// Deklarasi Interface untuk Props
interface ComponentProps {
  children: React.ReactNode;
  className?: string; 
}

// Komponen Dummy pengganti Terminal 
const AnimatedSpan = ({ children, className }: ComponentProps) => <span className={cn(className)}>{children}</span>;


// Data untuk ikon sosial/kontak
const socialItems = [
    { href: "https://www.linkedin.com/in/rahman-umardi-9a750b25b/", label: "LinkedIn", icon: FaLinkedin }, 
    { href: "https://github.com/RhmnDev14", label: "GitHub", icon: FaGithub },       
    { href: "https://wa.me/6281284502736", label: "WhatsApp", icon: FaWhatsapp },     
    { href: "mailto:rahmanumardi@gmail.com", label: "Email", icon: FaEnvelope },     
];

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
});

export default function Hero() {
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPdf ? "hidden" : "auto";
  }, [showPdf]);

  return (
    <section className="relative w-full px-4 md:px-8 pt-24 pb-8 md:pt-28 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14 w-full max-w-7xl mx-auto">
        
        {/* Kolom 1: Header ucapan selamat datang (DIHILANGKAN di mobile, ditampilkan di desktop) */}
        <div className="hidden md:block w-full md:w-1/2 text-center md:text-left order-1 md:order-none">
          
          {/* 🆕 Baris Pertama: Ditambahkan whitespace-nowrap */}
          <TypingAnimation 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-500 dark:text-blue-400 md:drop-shadow-lg leading-snug mb-1 whitespace-nowrap"
          >
            Hello! I&apos;m Rahman Umardi 👋.
          </TypingAnimation>
          
          {/* Baris Kedua: Lebar Maksimal Ditingkatkan menjadi max-w-lg (tetap) */}
          <TypingAnimation 
            className="block text-base font-semibold text-gray-700 dark:text-gray-300 mt-3 max-w-lg" 
          >
            a showcase of dedication, innovation, and continuous growth in software development.
          </TypingAnimation>
        </div>

        {/* Kolom 2: Konten Kanan (Foto di atas Dock Social Media) */}
        <div className="flex flex-col gap-8 md:gap-8 w-full md:w-1/2 order-2 md:order-none items-center"> 

          {/* FOTO */}
          <div className="flex justify-center w-full">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden transition-transform duration-300">
              <img
                src="/Gemini_Generated_Image_1ajo331ajo331ajo (1).png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DOCK SOCIAL MEDIA */}
          <div className="flex flex-col gap-2 w-full md:max-w-md text-left items-center">
            
            <HyperText 
                className="text-xl font-bold tracking-tight text-gray-800 dark:text-white"
            >
                Connect with Me
            </HyperText>
            
            <div className="w-1/3 h-0.5 bg-blue-500 rounded-full mb-1" />

            {/* Dock komponen utama */}
            <Dock className="p-2 bg-white/70 backdrop-blur-sm border border-gray-100/50 shadow-xl">
                {socialItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group flex flex-col items-center justify-center p-1 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5" 
                    >
                        <DockIcon className="bg-transparent text-gray-700 hover:text-blue-600 transition-colors">
                            <item.icon size={20} /> 
                        </DockIcon>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 
                                         mb-2 px-2 py-1 bg-gray-700 text-white text-[10px] font-medium 
                                         rounded-md shadow-lg whitespace-nowrap opacity-0 
                                         group-hover:opacity-100 transition-opacity duration-300 z-20">
                            {item.label}
                        </span>
                    </a>
                ))}
            </Dock>

            {/* Tombol CV */}
            <div className="flex flex-col items-center gap-3 w-full"> 
              <InteractiveHoverButton onClick={() => setShowPdf(true)}>
                CV
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
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