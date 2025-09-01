"use client";

import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-16 bg-white shadow-md px-4 md:px-8 flex items-center justify-between">
      {/* Kiri: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1 focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyPortfolio
        </Link>
      </div>

      {/* Tengah: Menu desktop */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      {/* Kanan: Dock */}
      {/* Kanan: Dock */}
      <div className="h-full flex items-center -mt-6">
        {" "}
        {/* naik 4px */}
        <Dock className="!h-9 flex items-center gap-2">
          <DockIcon>
            <a
              href="https://www.linkedin.com/in/rahman-umardi-9a750b25b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </DockIcon>
          <DockIcon>
            <a
              href="https://github.com/RhmnDev14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </DockIcon>
          <DockIcon>
            <a
              href="https://wa.me/6281284502736"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="mailto:rahmanumardi@gmail.com">
              <FaEnvelope />
            </a>
          </DockIcon>
        </Dock>
      </div>

      {/* Dropdown mobile */}
      {isOpen && (
        <ul className="absolute top-16 left-4 bg-white shadow-md rounded-md flex flex-col gap-2 p-4 w-40 md:hidden">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
