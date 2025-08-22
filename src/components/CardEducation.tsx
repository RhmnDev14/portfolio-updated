import React from "react";

interface Education {
  id: number;
  logo: string;
  school: string;
  major: string;
  period: string;
  description: string;
}

const educationList: Education[] = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Universitas_Indraprasta_PGRI_Logo.png",
    school: "Universitas Indraprasta PGRI",
    major: "Teknik Informatika",
    period: "2022 - Sekarang",
    description: "Sedang menempuh pendidikan S1 di bidang Teknik Informatika.",
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/High_School_Logo.svg/1024px-High_School_Logo.svg.png",
    school: "SMK Islam Arridho Depok",
    major: "Akuntansi",
    period: "2017 - 2020",
    description: "Fokus pada bidang ilmu pengetahuan alam dan komputer.",
  },
];

export default function EducationList() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {educationList.map((edu) => (
        <div
          key={edu.id}
          className="card bg-base-100 w-80 shadow-md hover:shadow-xl transition-shadow"
        >
          <figure className="px-10 pt-10">
            <img
              src={edu.logo}
              alt={edu.school}
              className="rounded-xl w-24 h-24 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{edu.school}</h2>
            <p className="italic text-sm">
              {edu.major} | {edu.period}
            </p>
            <p>{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
