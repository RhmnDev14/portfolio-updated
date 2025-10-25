"use client";

import Link from "next/link";
// Import Icon untuk Menu Navigasi (pastikan Anda menginstal react-icons)
import { FaHome, FaLaptopCode, FaGraduationCap, FaCertificate, FaToolbox, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { cn } from "@/lib/utils"; // Pastikan Anda memiliki fungsi cn untuk menggabungkan kelas

// Data untuk ikon navigasi (di Dock)
const navItems = [
  { href: "#home", label: "Home", icon: FaHome },
  { href: "#projects", label: "Projects", icon: FaLaptopCode },
  { href: "#workexperience", label: "Work Experience", icon: FaToolbox },
  { href: "#education", label: "Education", icon: FaGraduationCap },
  { href: "#certification", label: "Certificates", icon: FaCertificate },
];

// Data untuk ikon sosial/kontak (di Navbar Atas dan Dock Mobile)
const socialItems = [
    { href: "https://www.linkedin.com/in/rahman-umardi-9a750b25b/", label: "LinkedIn", icon: FaLinkedin }, 
    { href: "https://github.com/RhmnDev14", label: "GitHub", icon: FaGithub },       
    { href: "https://wa.me/6281284502736", label: "WhatsApp", icon: FaWhatsapp },     
    { href: "mailto:rahmanumardi@gmail.com", label: "Email", icon: FaEnvelope },     
];

export default function Navbar() {

  return (
    <>
      {/* 1. Navbar Atas (Logo dan Kontak Desktop) */}
      <nav 
        className={cn(
            "fixed top-4 left-0 right-0 z-[100] mx-auto w-[95%] md:w-[90%] lg:w-[80%]",
        )}
      >
        <div className="flex items-center justify-between h-12 px-4 bg-white/70 backdrop-blur-sm shadow-lg rounded-xl border border-gray-100/50">
            
            {/* Logo Kiri */}
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">
                RahmanDev
            </Link>

            {/* Ikon Kontak Kanan (Hanya di Desktop) - DIBUAT INTERAKTIF */}
            <div className="hidden md:flex gap-4 text-gray-600">
                {socialItems.map((item, index) => (
                    // Tambahkan GROUP dan RELATIVE untuk Tooltip
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group hover:text-blue-600 transition-colors"
                    >
                        <item.icon size={20} />
                        {/* Label Pop-up Desktop */}
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 
                                        mb-2 px-2 py-1 bg-gray-700 text-white text-[10px] 
                                        rounded-md shadow-lg whitespace-nowrap opacity-0 
                                        group-hover:opacity-100 transition-opacity duration-300 z-20">
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>

            {/* Tombol Kontak Mobile (Jika Dock tidak cukup menampung) */}
            <div className="md:hidden">
              <a href="#certification" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                Contact
              </a>
            </div>

        </div>
      </nav>

      {/* 2. Floating Dock (Navigasi dan Sosmed Mobile) */}
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <Dock className="p-2 pointer-events-auto bg-black/70 backdrop-blur-sm border border-gray-700/50">
            
            {/* Nav Items - Dengan Efek Timbul dan Tooltip */}
            {navItems.map((item) => (
                <Link 
                    key={item.href} 
                    href={item.href} 
                    // Efek Timbul dan Group untuk Tooltip
                    className="flex flex-col items-center justify-center p-1 group relative transition-all duration-300 hover:scale-110 hover:-translate-y-1" 
                >
                    <DockIcon className="bg-transparent text-white/80 hover:text-blue-400 transition-colors">
                        <item.icon size={20} />
                    </DockIcon>
                    {/* Label Navigasi */}
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 
                                     mb-2 px-2 py-1 bg-gray-700 text-white text-[10px] font-medium 
                                     rounded-md shadow-lg whitespace-nowrap opacity-0 
                                     group-hover:opacity-100 transition-opacity duration-300 z-20">
                        {item.label}
                    </span>
                </Link>
            ))}

            {/* Pemisah dan Social Items di Mobile - Dengan Efek Timbul dan Tooltip */}
            <div className="md:hidden border-l border-gray-600 ml-1 pl-2 flex gap-1">
                {socialItems.map((item, index) => ( 
                    // Efek Timbul dan Group untuk Tooltip
                    <div key={index} className="relative group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                        <DockIcon className="bg-transparent text-white/80 hover:text-blue-400 transition-colors">
                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                <item.icon size={20} />
                            </a>
                        </DockIcon>
                        {/* Label Sosial Mobile */}
                         <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 
                                         mb-2 px-2 py-1 bg-gray-700 text-white text-[10px] 
                                         rounded-md shadow-lg whitespace-nowrap opacity-0 
                                         group-hover:opacity-100 transition-opacity duration-300 z-20">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </Dock>
      </div>
    </>
  );
}