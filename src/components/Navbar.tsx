"use client";

import { useState } from 'react'; 
import Link from "next/link";
import { usePathname } from 'next/navigation'; 
import { 
    FaHome, 
    FaLaptopCode, 
    FaGraduationCap, 
    FaCertificate, 
    FaToolbox, 
    FaBars, 
    FaTimes,
    FaLightbulb // 🆕 ikon untuk Skills
} from "react-icons/fa";
import { cn } from "@/lib/utils"; 

// 🆕 Tambahkan Skills di daftar navigasi
const navItems = [
  { href: "#home", label: "Home", icon: FaHome },
  { href: "#skills", label: "Skills", icon: FaLightbulb },
  { href: "#projects", label: "Projects", icon: FaLaptopCode },
  { href: "#workexperience", label: "Work Experience", icon: FaToolbox },
  { href: "#education", label: "Education", icon: FaGraduationCap },
  { href: "#certification", label: "Certificates", icon: FaCertificate },
];

export default function Navbar({ showPdf }: { showPdf: boolean }) { // Tambahkan prop showPdf
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  
  const pathname = usePathname();

  if (showPdf || pathname.includes('/cv/preview')) { // Tambahkan kondisi showPdf
    return null; 
  }

  return (
    <>
      <nav 
        className={cn(
            "fixed top-4 left-0 right-0 z-[100] mx-auto w-[95%] md:w-[90%] lg:w-[80%]"
        )}
      >
        <div className="flex items-center justify-between h-12 px-4 bg-white/70 backdrop-blur-sm shadow-lg rounded-xl border border-gray-100/50">
            
            <Link 
                href="/" 
                onClick={closeMenu} 
                className="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-300 min-w-max"
            >
                RahmanDev
            </Link>

            {/* Navigasi Utama (Desktop/Tablet) */}
            <div className="hidden md:flex flex-1 justify-center gap-4"> 
                {navItems.map((item, index) => (
                    <Link 
                        key={index}
                        href={item.href}
                        className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 text-sm px-2 py-1 rounded-lg hover:bg-gray-100 
                                   hover:scale-105 hover:-translate-y-0.5 transform" 
                    >
                        <item.icon size={16} className="text-gray-500 group-hover:text-blue-600 transition-colors" /> 
                        {item.label}
                    </Link>
                ))}
            </div>
            
            <button 
                className="md:hidden text-gray-800 hover:text-blue-600 p-1 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                aria-label="Toggle navigation menu"
            >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

        </div>
      </nav>

      {/* Dropdown Menu Mobile */}
      <div 
          className={cn(
              "fixed top-[4.5rem] left-0 right-0 z-50 transition-all duration-300 overflow-hidden",
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none" 
          )}
      >
          <div className="mx-auto w-[95%] bg-white shadow-xl rounded-xl border border-gray-100 py-3 space-y-2">
              {navItems.map((item, index) => (
                  <Link 
                      key={index}
                      href={item.href}
                      onClick={closeMenu} 
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium border-l-4 border-transparent hover:border-blue-600"
                  >
                      <item.icon size={18} />
                      {item.label}
                  </Link>
              ))}
          </div>
      </div>
    </>
  );
}
