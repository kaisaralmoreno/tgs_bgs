import { Code2, Database } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
            About Me
          </p>

          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Building ideas
            <br />

            with{" "}
            <span className="text-zinc-500">
              code.
            </span>
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-zinc-400">
            saya adalah seorang pelajar Rekayasa Perangkat Lunak yang
            memiliki ketertarikan dalam dunia modifikasi dan permesinan, serta pengembangan website dan aplikasi.
             Saya senang belajar dan mengembangkan keterampilan saya dalam bidang teknologi, terutama dalam pengembangan web dan aplikasi.
            .
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Saya terus belajar berbagai teknologi modern untuk meningkatkan
            kemampuan dalam membuat aplikasi dan website yang menarik,
            responsif, dan bermanfaat.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">

              <Code2
                size={30}
                className="mb-5"
              />

              <h3 className="text-lg font-semibold">
                Web Development
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Membangun website modern dan responsif.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">

              <Database
                size={30}
                className="mb-5"
              />

              <h3 className="text-lg font-semibold">
                Database
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Merancang dan mengelola database aplikasi.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}