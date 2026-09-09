import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">

          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Selected Projects
          </p>

          <h2 className="text-5xl font-bold md:text-6xl">
            Things I've
            <br />

            <span className="text-zinc-500">
              built.
            </span>
          </h2>

        </div>

        <div className="space-y-5">

          {projects.map((project) => (

            <a
              key={project.id}
              href={project.link}
              className="group block rounded-2xl border border-white/10 p-6 transition hover:border-white/30 hover:bg-white/3 md:p-10"
            >

              <div className="grid gap-8 md:grid-cols-[100px_1fr_auto]">

                <span className="text-2xl text-zinc-600">
                  {project.number}
                </span>

                <div>

                  <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-semibold md:text-5xl">
                    {project.title}
                  </h3>

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

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={20} />
                </div>

              </div>

            </a>

          ))}

        </div>
      </div>
    </section>
  );
}