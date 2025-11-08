"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HyperText } from "./magicui/hyper-text";

const images = [
"/CertificateEnigma.jpeg",
"/Rahman-Umardi-Belajar-Linux-dari-Nol-Sertifikat-Belajar-Linux-dari-Nol-LMS-ID-Networkers_page-0001.jpg",
"/Rahman-Umardi-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers_page-0001.jpg",
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  // Cek apakah bisa discroll
  useEffect(() => {
  const el = containerRef.current;
  if (!el) return;

  const checkScroll = () => {
    setCanScroll(el.scrollWidth > el.clientWidth);
  };

  checkScroll();
  window.addEventListener("resize", checkScroll);
  return () => window.removeEventListener("resize", checkScroll);

  }, []);

  return (
  <section className="flex justify-center items-center w-full py-16 px-4">
    {/* Lebar container tetap max-w-6xl */}
    <div className="w-[90%] md:w-[80%] lg:w-[70%] max-w-6xl mx-auto border-[16px] border-white rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-b from-white to-gray-50">
    {/* Header */}
    <div className="text-center py-6 border-b border-gray-200 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        <HyperText>certification</HyperText>
      </h2>
    </div>
        {/* Scrollable area */}
        <div
          ref={containerRef}
          className={`
            flex gap-4 px-4 py-12 md:p-8
            ${canScroll ? "justify-start" : "justify-center"}
          } items-center overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 bg-white`}
          // 🚀 PERUBAHAN: Mengubah p-4 menjadi px-4 py-8. Ini meningkatkan padding atas dan bawah (tinggi) di mobile.
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full snap-center flex justify-center items-center transition-transform duration-500 ease-in-out"
              // 🆕 MENGHAPUS padding (p-6) dari sini
            >
              <div className="relative w-full flex justify-center items-center">
                <Image
                  src={src}
                  alt={`certificate ${i + 1}`}
                  width={1920}
                  height={1080}
                  // 🆕 Meningkatkan max-h menjadi 50vh untuk mengimbangi penghapusan padding
                  className="w-full h-auto max-h-[100vh] lg:max-h-[50vh] object-contain border border-gray-300 rounded-xl shadow-md"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint muncul hanya jika bisa scroll */}
        {canScroll && (
          <div className="text-center py-2 text-sm text-gray-500 bg-white border-t animate-pulse">
            ← Swipe to view more certificates →
          </div>
        )}
      </div>
  </section>
  );
}