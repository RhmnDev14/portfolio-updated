"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/CertificateEnigma.jpeg",
  "/Rahman-Umardi-Belajar-Linux-dari-Nol-Sertifikat-Belajar-Linux-dari-Nol-LMS-ID-Networkers_page-0001.jpg",
  "/Rahman-Umardi-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers_page-0001.jpg",
];

export default function Carousel() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto border-[16px] border-white rounded-2xl shadow-2xl overflow-hidden bg-white">
        {/* Carousel */}
        <div className="carousel w-full relative flex-1">
          {images.map((src, i) => (
            <div
              key={i}
              className={`carousel-item w-full flex justify-center items-center transition-opacity duration-700 ${
                active === i ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              <Image
                src={src}
                alt={`carousel ${i + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[80vh] lg:max-h-[65vh] object-contain"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation + Buttons */}
        <div className="flex items-center justify-center gap-4 py-3 border-t border-gray-200 bg-white">
          {/* Prev Button */}
          <button
            onClick={() =>
              setActive((active - 1 + images.length) % images.length)
            }
            className="bg-white shadow-md border rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full ${
                  active === i ? "bg-blue-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setActive((active + 1) % images.length)}
            className="bg-white shadow-md border rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
