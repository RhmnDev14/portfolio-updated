import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// import { FlickeringGrid } from "@/components/magicui/flickering-grid"; // Tidak dipakai
import Certifications from "@/components/Certificate";
import Projects from "@/components/Projects";
import EducationList from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
// import { LightRays } from "@/components/light-rays"; // Tidak dipakai

// 🆕 Import komponen IconCloud
import { IconCloud } from "@/components/magicui/icon-cloud"; 
import { HyperText } from "@/components/magicui/hyper-text";
import { SkillCarousel } from "@/components/Skills";

// 🆕 Daftar Gambar/Ikon Keterampilan Inti (Skills)
// Catatan: Pastikan file-file ini ada di folder /public proyek Anda
const skillImages: string[] = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",      // Golang
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",  // PostgreSQL
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",       // Redis
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",      // Next.js
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",      // Docker
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", //java
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netbeans/netbeans-original.svg", //netbeans
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" // MongoDb
  // Tambahkan logo lain sesuai skills Anda
];

// 🆕 Definisikan Tipe untuk Data Pengalaman dan Pendidikan (Untuk Menghilangkan Implicit Any)
interface EducationItem {
    date: string;
    company: string;
    logoUrl: string;
    jurusan: string;
    description: string;
}

interface ExperienceItem {
    company: string;
    logoUrl: string;
    position: string;
    startDate: string;
    endDate?: string; // endDate bisa opsional
    description: string;
}


export default function Home() {
  const pendidikanData: EducationItem[] = [
    {
      date: "Sep 2022 - Sep 2026",
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
    {
      date: "Jun 2017 - Jun 2020",
      company: "SMK Arridho Depok",
      logoUrl: "/arridho.png",
      jurusan: "Accounting",
      description: "Recording financial transactions, preparing financial reports, cash management, taxation, and simple audits.",
    },
  ];

  const experiences: ExperienceItem[] = [
    {
      company: "PT PLN Icon Plus",
      logoUrl: "/iconplus.png",
      position: "Backend Developer",
      startDate: "Sep 2025",
      description:
        "Developing Listriqu system using Golang.",
    },
    {
      company: "PT Kreanova Pharmaret",
      logoUrl: "/roxy.png",
      position: "Backend Developer",
      startDate: "Dec 2024",
      endDate: "Sep 2025",
      description:
        "Developing roxy ecommerce oms system using Golang.",
    },
    {
      company: "PT Yamaha Musical Product Asia",
      logoUrl: "/yamaha.png",
      position: "Production Operator",
      startDate: "Jul 2023",
      endDate: "Jul 2024",
      description: "Carry out production processes and ensure product quality.",
    },
    {
      company: "PT Yamaha Music Manufacture Asia",
      logoUrl: "/yamaha.png",
      position: "Production Operator",
      startDate: "Aug 2020",
      endDate: "Feb 2023",
      description:
        "Carry out production processes and ensure product quality.",
    },
  ];

  return (
    <main className="relative flex flex-col min-h-screen bg-white overflow-x-hidden scroll-smooth">
      <div className="relative z-10">
        <Navbar />

        {/* 1. Hero Section (Home) */}
      <section
        id="home"
        className="h-screen flex items-center justify-center scroll-mt-16 px-0 md:px-8"
      >
        <Hero />
      </section>

        {/* 2. 🆕 SKILLS SECTION (Icon Cloud) */}
      <section
          id="skills" 
          className="flex-1 py-12 md:h-screen flex items-center justify-center scroll-mt-16 bg-white"
      >
          <div className="text-center p-4 w-full max-w-4xl">
              {/* Header dengan garis abu di bawahnya */}
              <div className="inline-block">
                  <HyperText>Skills</HyperText>
                  <div className="mt-2 w-500 h-[1px] bg-gray-300 mx-auto" />
              </div>

              <div className="flex justify-center items-center h-[50vh] md:h-[70vh]">
                  {/* Menggunakan array images untuk memuat logo */}
                  <SkillCarousel 
                      images={skillImages} 
                  />
              </div>
          </div>
      </section>

        {/* 3. Projects Section */}
        <section
          id="projects"
          className="flex-1 py-12 md:h-screen scroll-mt-16"
        >
          <Projects />
        </section>

        {/* 4. Work Experience */}
          <section
            id="workexperience"
            className="flex-1 py-12 md:h-screen scroll-mt-16"
          >
            <WorkExperience experiences={experiences} />
          </section>

          {/* 5. Education */}
          <section
            id="education"
            className="flex-1 py-12 md:h-screen scroll-mt-16"
          >
            <EducationList education={pendidikanData} />
          </section>

        {/* 6. Certification */}
        <section
          id="certification"
          className="flex-1 py-12 md:h-screen scroll-mt-16"
        >
          <Certifications />
        </section>

        <Footer />
      </div>
    </main>
  );
}