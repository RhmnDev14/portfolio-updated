import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { FlickeringGrid } from "@/components/magicui/flickering-grid"; // ⬅️ import dulu
import {
  DiGo,
  DiJava,
  DiJsBadge,
  DiPostgresql,
  DiRedis,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiDocker,
  DiGit,
  DiLinux,
  DiVisualstudio,
} from "react-icons/di";
import Certifications from "@/components/Certificate";
import ExperienceEducationWrapper from "@/components/ExperienceEducation";

export default function Home() {
  const pendidikanData = [
    {
      date: "Sep 2022 - Sep2026",
      company: "Indraprasta PGRI University",
      logoUrl: "/unindra.png",
      jurusan: "Informatics Engineering",
      description: "IPK 3.2/4.0",
    },
    {
      date: "Aug 2025 - Oct 2025",
      company: "Enigma Camp",
      logoUrl: "/enigma.png",
      jurusan: "Bootcamp",
      description: "Backend with Golang",
    },
  ];

  const experiences = [
    {
      company: "PT Kreanova Pharmaret",
      logoUrl: "/roxy.png",
      position: "Backend Developer",
      startDate: "Dec 2022",
      description:
        "Mengembangkan API untuk sistem internal menggunakan Golang.",
    },
    {
      company: "PT Yamaha Musical Product Asia",
      logoUrl: "/yamaha.png",
      position: "Production Operator",
      startDate: "Jul 2023",
      endDate: "Jul 2024",
      description: "Mengawasi proses produksi dan memastikan kualitas produk.",
    },
    {
      company: "PT Yamaha Music Manufacture Asia",
      logoUrl: "/yamaha.png",
      position: "Production Operator",
      startDate: "Aug 2020",
      endDate: "Feb 2023",
      description:
        "Mengembangkan API untuk sistem internal menggunakan Golang.",
    },
  ];
  return (
    <main className="relative flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Background grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={6}
        gridGap={6}
        flickerChance={0.08}
        color="rgba(0,0,0,0.1)"
      />

      {/* Content di atas background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Container untuk Education & WorkExperience */}
        <ExperienceEducationWrapper
          education={pendidikanData}
          experiences={experiences}
        />

        <Certifications />

        <Footer />
      </div>
    </main>
  );
}
