"use client";

import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";

interface SkillGridProps {
  images: string[];
}

const skillNames: Record<string, string> = {
  "go-original.svg": "Golang",
  "postgresql-original.svg": "PostgreSQL",
  "redis-original.svg": "Redis",
  "nextjs-original.svg": "Next.js",
  "docker-original.svg": "Docker",
  "java-original.svg": "Java",
  "typescript-original.svg": "TS",
  "mongodb-original.svg": "MongoDB",
  "fiber-original.svg": "Fiber",
  "git-original.svg": "Git",
  "gin.png": "Gin",
  "linux-original.svg": "Linux",
  "grpc.png": "Grpc",
  "postman-original.svg":"Postman",
  "rabbitmq-original.svg":"RabbitMQ",
  "grafana-original.svg":"Grafana"
};

const getSkillName = (url: string): string => {
  try {
    const filename = url.split("/").pop() || "";
    if (filename.includes(".svg")) {
      return (
        skillNames[filename] ||
        filename.replace(/[-_]/g, " ").replace(".svg", "").trim()
      );
    }
    if (filename.includes(".png")) {
      return (
        skillNames[filename] ||
        filename.replace(".png", "").trim()
      );
    }
  } catch {
    return "Skill";
  }
  return "Skill";
};

export const SkillGrid: React.FC<SkillGridProps> = ({ images }) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      
      {/* 🚀 HEADER SKILLS BARU */}
      <div className="text-center mb-10">
        <div className="inline-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
            <HyperText>Skills</HyperText>
          </h2>
          {/* Garis pemisah di bawah header */}
          <div className="mt-2 w-32 h-[1px] bg-gray-300 mx-auto" />
        </div>
      </div>
      {/* --------------------- */}

      <div
        className="
          grid grid-cols-4 gap-6 
          justify-items-center items-center
          sm:gap-8 md:gap-10
        "
      >
        {images.map((src, index) => {
          const skillName = getSkillName(src);
          return (
            <div
              key={index}
              className="
                group flex flex-col items-center justify-center
                w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
                rounded-xl shadow-md bg-white dark:bg-gray-800
                ring-1 ring-gray-200 dark:ring-gray-700
                transition-transform duration-300 hover:scale-105
              "
              aria-label={skillName}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                <img
                  src={src}
                  alt={skillName}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-center text-gray-700 dark:text-gray-300">
                {skillName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
