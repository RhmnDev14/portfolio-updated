"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface SkillCarouselProps {
  images: string[];
}

const skillNames: Record<string, string> = {
  "go-original.svg": "Golang",
  "postgresql-original.svg": "PostgreSQL",
  "redis-original.svg": "Redis",
  "nextjs-original.svg": "Next.js",
  "docker-original.svg": "Docker",
  "java-original.svg": "Java",
  "netbeans-original.svg": "NetBeans IDE",
  "mongodb-original.svg": "MongoDB",
};

const getSkillName = (url: string): string => {
  try {
    const filename = url.split("/").pop() || "";
    if (filename.includes(".svg")) {
      return (
        skillNames[filename] ||
        filename.replace(/[-_]/g, " ").replace(".svg", "")
      );
    }
  } catch {
    return "Skill";
  }
  return "Skill";
};

export const SkillCarousel: React.FC<SkillCarouselProps> = ({ images }) => {
  const doubledImages = [...images, ...images];
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [isPaused, setIsPaused] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollDuration = images.length * 3;

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, doubledImages.length);
  }, [doubledImages.length]);

  const handleMouseEnter =
    (skillName: string, index: number) =>
    (e: React.MouseEvent<HTMLDivElement>) => {
      setHoveredSkill(skillName);
      setIsPaused(true);
      const target = itemRefs.current[index];
      if (target) {
        const rect = target.getBoundingClientRect();
        // ✅ gunakan scrollY agar posisi tooltip tidak salah
        setTooltipPos({
          x: rect.left + rect.width / 2,
          y: rect.top + window.scrollY - 12,
        });
      }
    };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
    setTooltipPos(null);
    setIsPaused(false);
  };

  const portalRoot =
    typeof document !== "undefined"
      ? document.getElementById("tooltip-root")
      : null;

  return (
    <div className="relative w-full overflow-x-hidden py-16">
      <div
        className={`flex ${
          isPaused ? "animate-scroll-paused" : "animate-scroll-infinite"
        }`}
        style={
          {
            "--scroll-duration": `${scrollDuration}s`,
            gap: "1.5rem",
          } as React.CSSProperties
        }
      >
        {doubledImages.map((src, index) => {
          const skillName = getSkillName(src);
          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center 
                         bg-white dark:bg-gray-900 p-3 rounded-xl shadow-lg transition-all duration-300 
                         hover:scale-110 cursor-pointer ring-2 ring-gray-100"
              onMouseEnter={handleMouseEnter(skillName, index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={src}
                alt={skillName}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.style.display = "none";
                }}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* Fade di sisi kiri-kanan */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/90 to-transparent dark:from-gray-900/90 pointer-events-none z-20"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/90 to-transparent dark:from-gray-900/90 pointer-events-none z-20"></div>

      {/* Tooltip */}
      {hoveredSkill && tooltipPos && portalRoot &&
        createPortal(
          <div
            className="absolute bg-gray-800 text-white text-xs px-3 py-1 rounded-lg shadow-xl z-[999] 
                       transition-opacity duration-200 pointer-events-none whitespace-nowrap"
            style={{
              left: tooltipPos.x,
              top: tooltipPos.y,
              transform: "translate(-50%, -100%)",
            }}
          >
            {hoveredSkill}
          </div>,
          portalRoot
        )}
    </div>
  );
};
