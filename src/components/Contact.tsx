import { Camera, Mail } from "lucide-react";

type ContactProps = {
  search?: string;
};

export default function Contact({ search = "" }: ContactProps) {
  const keyword = search.trim().toLowerCase();
  const searchableText = [
    "Get In Touch",
    "Let's build something",
    "technology",
    "project",
    "email",
    "message",
    "instagram",
    "social",
    "contact",
  ].join(" ").toLowerCase();

  const shouldShow = !keyword || searchableText.includes(keyword);

  if (!shouldShow) {
    return null;
  }

  return (
    <section id="contact" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-sky-400">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold tracking-tighter md:text-8xl">
          Let's build
          <br />
          <span className="text-sky-400">something.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-zinc-400">
          Tertarik untuk berdiskusi mengenai teknologi atau sebuah proyek? Jangan ragu
          untuk menghubungi saya.
        </p>

        <a
          href="mailto:emailkamu@gmail.com"
          className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full border border-sky-500 bg-sky-950/60 px-6 py-3 font-semibold text-sky-200 shadow-[0_0_22px_rgba(14,165,233,0.65)] transition hover:scale-105 hover:bg-sky-600 hover:text-white hover:shadow-[0_0_32px_rgba(56,189,248,0.9)]"
        >
          <Mail size={19} />
          Send Me a Message
        </a>

        <div className="mt-16 flex justify-center gap-8">
          <a
            href="https://instagram.com/kam_good_day"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-sky-500 bg-sky-950/60 px-6 py-3 font-semibold text-sky-200 shadow-[0_0_22px_rgba(14,165,233,0.65)] transition hover:scale-105 hover:bg-sky-600 hover:text-white hover:shadow-[0_0_32px_rgba(56,189,248,0.9)]"
          >
            <Camera size={21} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}