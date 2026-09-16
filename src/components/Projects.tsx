"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { projects } from "@/data/portfolio";

type ProjectsProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function Projects({ search, onSearchChange }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Featured",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    let result = [...projects];

    if (activeFilter === "Featured") {
      result = result.filter((project) => project.featured);
    } else if (activeFilter !== "All") {
      result = result.filter((project) => project.category === activeFilter);
    }

    if (!keyword) {
      return result;
    }

    return result.filter((project) => {
      const searchableText = [
        project.title,
        project.category,
        project.description,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(keyword);
    });
  }, [activeFilter, search]);

  return (
    <section id="projects" className="px-6 pb-28 pt-36 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-sky-400">
            Selected Projects
          </p>

          <h2 className="text-5xl font-bold md:text-6xl">
            Things I've
            <br />
            <span className="text-sky-400">built.</span>
          </h2>
        </div>

        <div className="mb-8 flex flex-col items-start gap-3 md:flex-row md:items-center">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search portfolio..."
              aria-label="Search portfolio"
              className="w-full rounded-full border border-white/10 bg-zinc-950/70 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          {search && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="rounded-full border border-sky-500/50 px-4 py-2 text-sm text-sky-300 transition hover:bg-sky-600 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeFilter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={[
                  "rounded-full border px-4 py-2 text-sm transition",
                  isActive
                    ? "border-sky-500 bg-sky-600 text-white"
                    : "border-white/10 bg-zinc-950/50 text-zinc-300 hover:border-sky-500/60 hover:text-white",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        {search && (
          <p className="mb-6 text-sm text-zinc-400">
            Showing {filteredProjects.length} result{filteredProjects.length === 1 ? "" : "s"} for "{search}"
          </p>
        )}

        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-zinc-950/30 p-10 text-center">
            <p className="text-xl font-medium text-white">No projects found.</p>
            <p className="mt-2 text-zinc-400">
              Try another keyword like "Next.js", "ecommerce", or "design".
            </p>
            <button
              type="button"
              onClick={() => {
                onSearchChange("");
                setActiveFilter("All");
              }}
              className="mt-5 rounded-full border border-sky-500/50 px-4 py-2 text-sm text-sky-400 transition hover:bg-sky-600 hover:text-white"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group block rounded-2xl border border-white/10 p-6 transition hover:border-sky-500/60 hover:bg-sky-950/20 md:p-10"
              >
                {project.image && (
                  <div className="mb-8 overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={project.image}
                      alt={`Preview ${project.title}`}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )}

                <div className="grid gap-8 md:grid-cols-[100px_1fr_auto]">
                  <span className="text-2xl text-zinc-600">{project.number}</span>

                  <div>
                    <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
                      {project.category}
                    </p>

                    <h3 className="text-3xl font-semibold md:text-5xl">{project.title}</h3>

                    <p className="mt-5 max-w-2xl leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/50 transition group-hover:bg-sky-600 group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
