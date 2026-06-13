"use client";

import React, { useEffect, useRef, useState } from "react";
import { HyperText } from "@/components/magicui/hyper-text";

type EducationItem = {
  company: string;
  logoUrl?: string;
  jurusan?: string;
  date: string;
  description?: string;
};

type EducationListProps = {
  education: EducationItem[];
};

const EducationList: React.FC<EducationListProps> = ({ education }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkScroll = () => {
      setCanScroll(el.scrollWidth > el.clientWidth);
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <section className="flex justify-center w-full py-10 px-4">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header (gaya Skills) */}
        <div className="text-center mb-10">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
              <HyperText>Education</HyperText>
            </h2>
            <div className="mt-2 w-32 h-[1px] bg-gray-300 mx-auto" />
          </div>
        </div>

        {/* Scrollable or centered cards */}
        <div
          ref={scrollRef}
          className={`
            flex gap-6 py-8 px-6
            ${canScroll ? "overflow-x-auto justify-start" : "justify-center"}
            snap-x snap-mandatory scroll-smooth
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
          `}
          style={{ scrollBehavior: "smooth" }}
        >
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] h-[360px]
                snap-center flex flex-col justify-center items-center text-center
                bg-white border border-gray-100 rounded-2xl
                shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              "
            >
              {edu.logoUrl && (
                <img
                  src={edu.logoUrl}
                  alt={`${edu.company} logo`}
                  className="w-20 h-20 object-contain mb-4 rounded-md"
                />
              )}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                {edu.company}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{edu.date}</p>
              {edu.jurusan && (
                <p className="text-gray-700 font-medium text-base mb-3">
                  {edu.jurusan}
                </p>
              )}
              {edu.description && (
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 px-2">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Scroll hint */}
       {canScroll && (
          <div className="text-center py-3 text-sm text-gray-500 animate-pulse">
            ← Swipe to view more experiences →
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationList;
