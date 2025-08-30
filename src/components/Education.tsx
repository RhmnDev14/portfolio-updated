"use client";

import React, { useEffect, useRef, useState } from "react";

interface PendidikanItem {
  tahun: string;
  institusi: string;
  logo?: string;
  jurusan?: string;
  keterangan?: string;
}

interface PendidikanProps {
  data: PendidikanItem[];
}

export default function Pendidikan({ data }: PendidikanProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Simple scroll fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (data.length === 0) return null;

  const item = data[0]; // hanya kuliah

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-[90%] md:max-w-3xl mx-auto my-12 p-6 bg-white rounded-xl shadow-lg transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold text-black mb-8 text-center border-b border-gray-300 pb-2">
        Education
      </h2>

      <div className="flex flex-col items-center text-center">
        {/* Logo langsung, tanpa background */}
        {item.logo && (
          <div className="mb-4">
            <img
              src={item.logo}
              alt={item.institusi}
              className="w-auto h-16 object-contain"
            />
          </div>
        )}

        {/* Text */}
        <div className="flex flex-col items-center text-center">
          <span className="text-gray-500 text-sm">{item.tahun}</span>
          <h3 className="text-black font-semibold text-xl mt-1">
            {item.institusi}
          </h3>
          {item.jurusan && (
            <p className="text-gray-700 text-sm mt-1">{item.jurusan}</p>
          )}
          {item.keterangan && (
            <p className="text-gray-600 text-xs mt-1">{item.keterangan}</p>
          )}
        </div>
      </div>
    </div>
  );
}
