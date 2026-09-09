import {
  Camera,
  Mail
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-5xl text-center">

        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold tracking-tighter md:text-8xl">
          Let's build
          <br />

          <span className="text-zinc-500">
            something.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-zinc-400">
          Tertarik untuk berdiskusi mengenai teknologi atau sebuah proyek?
          Jangan ragu untuk menghubungi saya.
        </p>

        <a
          href="mailto:emailkamu@gmail.com"
          className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-zinc-300"
        >
          <Mail size={19} />

          Send Me a Message
        </a>

        <div className="mt-16 flex justify-center gap-8">

          

          <a
            href="#"
            className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <Camera size={20} />

            Instagram
          </a>

        </div>

      </div>
    </section>
  );
}