import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/10 bg-zinc-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
          My Skills
        </p>

        <h2 className="mb-14 text-5xl font-bold md:text-6xl">
          Technologies I
          <br />

          <span className="text-zinc-500">
            work with.
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <div
              key={skill}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/2 p-5 transition hover:border-white/30 hover:bg-white/5"
            >
              <span className="text-sm text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-medium">
                {skill}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}