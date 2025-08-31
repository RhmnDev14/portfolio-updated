"use client";

import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 h-14 flex items-center justify-between 
      bg-white/80 backdrop-blur-md border-b border-white/30 px-4 md:px-6 lg:px-8"
    >
      {/* Hamburger + Logo (mobile) */}
      <div className="flex items-center gap-2 md:hidden">
        <div className="dropdown relative">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0 left-auto"
          >
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
        </div>

        <Link href="/" className="btn btn-ghost normal-case text-xl font-bold">
          MyPortfolio
        </Link>
      </div>

      {/* Logo (desktop) */}
      <div className="hidden md:flex flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl font-bold">
          MyPortfolio
        </Link>
      </div>

      {/* Menu desktop di tengah */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <ul className="menu menu-horizontal px-1 gap-6 font-medium text-black">
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
      </div>

      {/* Dock */}
      <div className="relative -top-4">
        <Dock>
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
    </nav>
  );
}
