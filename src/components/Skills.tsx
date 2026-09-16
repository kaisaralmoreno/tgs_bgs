import { skills } from "@/data/portfolio";

type SkillsProps = {
  search?: string;
};

export default function Skills({ search = "" }: SkillsProps) {
  const keyword = search.trim().toLowerCase();
  const matchedSkills =
    !keyword || skills.some((skill) => skill.toLowerCase().includes(keyword));

  const shouldShow = !keyword || matchedSkills;

  if (!shouldShow) {
    return null;
  }

  return (
    <section
      id="skills"
      className="border-y border-white/10 bg-zinc-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-sky-400">
          My Skills
        </p>

        <h2 className="mb-14 text-5xl font-bold md:text-6xl">
          Technologies I
          <br />
          <span className="text-sky-400">work with.</span>
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills
            .filter((skill) => !keyword || skill.toLowerCase().includes(keyword))
            .map((skill, index) => (
              <div
                key={skill}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/2 p-5 transition hover:border-sky-500/60 hover:bg-sky-950/30"
              >
                <span className="text-sm text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-medium">{skill}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}