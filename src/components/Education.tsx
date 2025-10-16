"use client";

import React from "react";
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
  return (
    <section
      className="
        my-8 bg-white p-6 rounded-lg shadow-md
        w-[90%] sm:w-[85%] md:max-w-3xl
        mx-auto
      "
    >
      <h2 className="mb-6 border-b border-gray-300 pb-2 text-center">
        <HyperText>Education</HyperText>
      </h2>

      {/* Scroll area with dynamic height */}
      <div
        className="
          rounded-lg p-4
          md:border md:border-gray-200 
          max-h-[500px] md:max-h-[600px] 
          overflow-y-auto
        "
      >
        <ul className="space-y-6">
          {education.map((edu, idx) => (
            <li
              key={idx}
              className="
                flex flex-col items-center text-center
                p-4 border border-gray-200 rounded-lg
                shadow-sm hover:shadow-md transition bg-white
              "
            >
              {edu.logoUrl && (
                <img
                  src={edu.logoUrl}
                  alt={`${edu.company} logo`}
                  className="w-16 h-16 object-contain mb-4 rounded-md"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{edu.company}</h3>
                <span className="text-gray-500 text-sm">{edu.date}</span>
                {edu.jurusan && (
                  <p className="text-gray-700 font-medium mt-1">
                    {edu.jurusan}
                  </p>
                )}
                {edu.description && (
                  <p className="text-gray-600 mt-2">{edu.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EducationList;
