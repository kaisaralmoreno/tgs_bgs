import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-sky-400">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-bold leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
              KAISAR AL
              <br />
              <span className="text-sky-400">MORENO.</span>
            </h1>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                Seorang pelajar jurusan{" "}
                <span className="text-white">Rekayasa Perangkat Lunak</span>{" "}
                yang tertarik dalam dunia Web Development, UI Design, dan teknologi digital.
              </p>

              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Location
                </p>

                <p className="mt-2 text-xl">East Java, Indonesia</p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="flex items-center gap-3 rounded-full bg-sky-600 px-6 py-4 font-medium text-white transition hover:bg-sky-500"
              >
                View My Work
                <ArrowDownRight size={18} />
              </a>

              <a
                href="#about"
                className="rounded-full border border-sky-500/50 px-6 py-4 transition hover:border-sky-400"
              >
                About Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl bg-sky-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-zinc-900 shadow-2xl shadow-sky-900/30">
              <img
                src="/foto.jpeg"
                alt="Hero portrait"
                className="h-125 w-full object-cover grayscale transition duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}