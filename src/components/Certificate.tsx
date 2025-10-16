"use client";

import Image from "next/image";
import { HyperText } from "./magicui/hyper-text";

const images = [
  "/CertificateEnigma.jpeg",
  "/Rahman-Umardi-Belajar-Linux-dari-Nol-Sertifikat-Belajar-Linux-dari-Nol-LMS-ID-Networkers_page-0001.jpg",
  "/Rahman-Umardi-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers_page-0001.jpg",
];

export default function Carousel() {
  return (
    <section className="flex justify-center items-center w-full py-16 px-4">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto border-[16px] border-white rounded-2xl shadow-2xl overflow-hidden bg-white">
        {/* Header inside container */}
        <div className="text-center py-6 border-b border-gray-200 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {/* Certification */}
            <HyperText>certification </HyperText>
          </h2>
        </div>

        {/* Scrollable area */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full snap-center flex justify-center items-center p-4"
            >
              <Image
                src={src}
                alt={`certificate ${i + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[80vh] lg:max-h-[65vh] object-contain border border-gray-300 rounded-lg"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="text-center py-2 text-sm text-gray-500 bg-white border-t">
          ← Swipe or scroll to view more certificates →
        </div>
      </div>
    </section>
  );
}
