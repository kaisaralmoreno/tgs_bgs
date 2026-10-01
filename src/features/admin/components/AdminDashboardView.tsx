"use client";

import { useState } from "react";
import Link from "next/link";
import { FolderKanban, Wrench } from "lucide-react";
import About from "@/features/dashboard/components/About";
import Contact from "@/features/dashboard/components/Contact";
import Hero from "@/features/dashboard/components/Hero";
import Projects from "@/features/dashboard/components/Projects";
import Skills from "@/features/dashboard/components/Skills";
import Footer from "@/components/layout/Footer";
import MusicPlayer from "@/components/common/MusicPlayer";

export default function AdminDashboardView({
  projectCount,
  skillCount,
}: {
  projectCount: number;
  skillCount: number;
}) {
  const [search, setSearch] = useState("");

  return (
    <div className="portfolio-shell">
      <section className="border-b border-white/10 bg-zinc-950/90 px-6 pb-8 pt-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-sky-400">
            Admin Dashboard
          </p>
          <h1 className="text-3xl font-bold text-white">Portfolio overview</h1>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/admin/proyek"
              className="flex min-h-24 items-center justify-between border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-500/60"
            >
              <span className="flex items-center gap-3">
                <FolderKanban aria-hidden="true" className="text-sky-400" />
                <span>
                  <span className="block font-semibold text-white">Kelola proyek</span>
                  <span className="text-sm text-zinc-400">{projectCount} proyek</span>
                </span>
              </span>
              <span aria-hidden="true" className="text-xl text-zinc-500">→</span>
            </Link>

            <Link
              href="/admin/skill"
              className="flex min-h-24 items-center justify-between border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-500/60"
            >
              <span className="flex items-center gap-3">
                <Wrench aria-hidden="true" className="text-emerald-400" />
                <span>
                  <span className="block font-semibold text-white">Kelola skill</span>
                  <span className="text-sm text-zinc-400">{skillCount} skill</span>
                </span>
              </span>
              <span aria-hidden="true" className="text-xl text-zinc-500">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Hero />
      <MusicPlayer search={search} />
      <About search={search} />
      <Skills search={search} />
      <Projects search={search} onSearchChange={setSearch} />
      <Contact search={search} />
      <Footer />
    </div>
  );
}