"use client";

import React from "react";
import WorkExperience from "./WorkExperience";
import EducationList from "./Education";

type EducationItem = {
  company: string;
  logoUrl?: string;
  jurusan?: string;
  date: string;
  description?: string;
};

type ExperienceItem = {
  company: string;
  logoUrl?: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

interface WrapperProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
}

const ExperienceEducationWrapper: React.FC<WrapperProps> = ({
  experiences,
  education,
}) => {
  return (
    <div
      className="
        flex flex-col md:flex-row 
        md:gap-8 gap-6 
        w-[90%] sm:w-[85%] md:w-full
        max-w-full
        mx-auto my-12
      "
    >
      {/* Education */}
      <div className="flex-1 h-full">
        <EducationList education={education} />
      </div>

      {/* Work Experience */}
      <div className="flex-1 h-full">
        <WorkExperience experiences={experiences} />
      </div>
    </div>
  );
};

export default ExperienceEducationWrapper;
