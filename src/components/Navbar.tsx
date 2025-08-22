"use client";

import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar bg-white px-6 sticky top-0 z-50 h-14 flex items-center justify-between">
      {/* Hamburger + Logo (mobile) */}
      <div className="flex items-center gap-2 md:hidden">
        <div className="dropdown">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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

        {/* Logo dekat hamburger */}
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
        <ul className="menu menu-horizontal px-1 gap-6 font-medium text-white">
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

      {/* Dock (selalu tampil) */}
      <div className="relative -top-4">
        <Dock>
          <DockIcon>
            <FaLinkedin />
          </DockIcon>
          <DockIcon>
            <FaGithub />
          </DockIcon>
          <DockIcon>
            <FaWhatsapp />
          </DockIcon>
          <DockIcon>
            <FaInstagram />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
