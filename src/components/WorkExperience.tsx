"use client";

import React, { useEffect, useRef, useState } from "react";
import { HyperText } from "@/components/magicui/hyper-text";

type Experience = {
  company: string;
  logoUrl?: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

type ExperienceListProps = {
  experiences: Experience[];
};

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
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
    <section className="flex justify-center items-center w-full py-16 px-4">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] **max-w-screen-xl** mx-auto border-[16px] border-white rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="text-center py-6 border-b border-gray-200 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
            <HyperText>Work Experience</HyperText>
          </h2>
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
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] h-[360px]
                snap-center flex flex-col justify-center items-center text-center
                bg-white border border-gray-100 rounded-2xl
                shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              "
            >
              {exp.logoUrl && (
                <img
                  src={exp.logoUrl}
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 object-contain mb-4 rounded-md"
                />
              )}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                {exp.position}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                {exp.startDate} - {exp.endDate || "Now"}
              </p>
              <p className="text-gray-700 font-medium text-base mb-3">
                {exp.company}
              </p>
              {exp.description && (
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 px-2">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        {canScroll && (
          <div className="text-center py-3 text-sm text-gray-500 bg-white border-t animate-pulse">
            ← Swipe to view more experiences →
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceList;
