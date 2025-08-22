import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CardEducation from "@/components/CardEducation";
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

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Background grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={6}
        gridGap={6}
        flickerChance={0.08}
        // color="#00ff99"
        color="rgba(0,0,0,0.1)" // grid abu tipis biar light
      />

      {/* Content di atas background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <CardEducation />

        <div className="flex justify-center">
          <IconCloud
            icons={[
              <DiGo key="go" size={100} color="#00ADD8" />, // Go
              <DiJava key="java" size={100} color="#007396" />, // Java
              <DiJsBadge key="js" size={100} color="#F7DF1E" />, // JavaScript
              <DiPostgresql key="postgres" size={100} color="#4169E1" />, // PostgreSQL
              <DiRedis key="redis" size={100} color="#DC382D" />, // Redis
              <DiMysql key="mysql" size={100} color="#4479A1" />, // MySQL
              <DiHtml5 key="html5" size={100} color="#E34F26" />, // HTML5
              <DiCss3 key="css3" size={100} color="#1572B6" />, // CSS3
              <DiDocker key="docker" size={100} color="#2496ED" />, // Docker
              <DiGit key="git" size={100} color="#F05032" />, // Git
              <DiLinux key="linux" size={100} color="#FCC624" />, // Linux
              <DiVisualstudio key="vscode" size={100} color="#007ACC" />, // VS Code
            ]}
          />
        </div>

        <Footer />
      </div>
    </main>
  );
}
