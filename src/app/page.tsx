"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

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