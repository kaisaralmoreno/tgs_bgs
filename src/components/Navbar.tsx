"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        <a
          href="#home"
          className="text-xl font-bold tracking-tighter"
        >
          KAISAR<span className="text-sky-400">.</span>
        </a>

        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#home" className="hover:text-white">
            Home
          </a>

          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#skills" className="hover:text-white">
            Skills
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-sky-500/50 px-5 py-2 text-sm transition hover:bg-sky-600 hover:text-white md:block"
        >
          Let's Talk
        </a>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0a] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-zinc-400">

            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}