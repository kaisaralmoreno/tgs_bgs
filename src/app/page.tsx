"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/features/dashboard/components/Hero";
import About from "@/features/dashboard/components/About";
import Skills from "@/features/dashboard/components/Skills";
import Projects from "@/features/dashboard/components/Projects";
import Contact from "@/features/dashboard/components/Contact";
import Footer from "@/components/layout/Footer";
import MusicPlayer from "@/components/common/MusicPlayer";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="portfolio-shell">
      <Navbar />

      <Hero />

      <MusicPlayer search={search} />

      <About search={search} />

      <Skills search={search} />

      <Projects search={search} onSearchChange={setSearch} />

      <Contact search={search} />

      <Footer />
    </main>
  );
}