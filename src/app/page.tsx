import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Certifications from "@/components/Certificate";
import Projects from "@/components/Projects";
import EducationList from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import { LightRays } from "@/components/light-rays";

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
      description: "Backend with golang",
    },
    {
      date: "Jun 2017 - Jun 2020",
      company: "SMK Arridho Depok",
      logoUrl: "/arridho.png",
      jurusan: "Accounting",
      description: "Recording financial transactions, preparing financial reports, cash management, taxation, and simple audits.",
    },
  ];

  const experiences = [
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
    // testtt
    <main className="relative flex flex-col min-h-screen bg-white overflow-x-hidden scroll-smooth">
      {/* Background grid */}
      {/* <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={6}
        gridGap={6}
        flickerChance={0.08}
        color="rgba(0,0,0,0.1)"
      /> */}
      <LightRays/>

      {/* Content di atas background */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex items-center justify-center scroll-mt-16"
        >
          <Hero />
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen py-20 flex items-center justify-center scroll-mt-16"
        >
          <Projects />
        </section>

        {/* Work Experience & Education */}
        <div className="flex flex-col md:flex-row md:gap-8 gap-6 w-[90%] sm:w-[85%] md:w-full max-w-6xl mx-auto my-8 md:my-20">
          <section
            id="workexperience"
            className="flex-1 py-12 md:h-screen scroll-mt-16"
          >
            <WorkExperience experiences={experiences} />
          </section>
          <section
            id="education"
            className="flex-1 py-12 md:h-screen scroll-mt-16"
          >
            <EducationList education={pendidikanData} />
          </section>
        </div>

        {/* Certification */}
        <section
          id="certification"
          className="py-12 md:h-screen flex items-center justify-center scroll-mt-16"
        >
          <Certifications />
        </section>

        <Footer />
      </div>
    </main>
  );
}
