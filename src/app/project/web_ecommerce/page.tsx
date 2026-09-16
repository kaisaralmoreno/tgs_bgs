import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, CheckCircle2, Code2, ShoppingCart, Sparkles } from "lucide-react";

const features = [
  "Tampilan storefront modern dan menarik",
  "Produk ditampilkan dengan kategori yang rapi",
  "Desain UX yang fokus pada konversi pembelian",
  "Layout responsif untuk desktop dan mobile",
];

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Ecommerce UI"];

export default function WebEcommercePage() {
  return (
    <main className="portfolio-shell min-h-screen px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-zinc-300 transition hover:border-sky-500/60 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/30">
          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
                Web Application
              </p>

              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Web <span className="text-sky-400">Ecommerce</span>
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1">
                  <CalendarDays size={14} />
                  2026
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1">
                  <ShoppingCart size={14} />
                  Online Store
                </span>
              </div>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300">
                Web Ecommerce adalah platform belanja online yang dirancang dengan tampilan modern dan fokus pada pengalaman pengguna saat membeli produk.
                Proyek ini dibuat untuk menghadirkan kerangka toko digital yang mudah dibaca, cepat dinavigasi, dan nyaman diakses dari berbagai perangkat.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-500/40 bg-sky-950/30 px-3 py-2 text-xs font-medium text-sky-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Visit Project
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-zinc-900 p-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                <img
                  src="/project2.png"
                  alt="Web Ecommerce preview"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-8 border-t border-white/10 bg-zinc-950/60 p-6 md:p-10 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Sparkles className="text-sky-400" size={20} />
                <h2 className="text-2xl font-bold">Project Highlights</h2>
              </div>

              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-sky-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <Code2 className="text-sky-400" size={20} />
                <h2 className="text-2xl font-bold">What I Built</h2>
              </div>

              <p className="leading-relaxed text-zinc-300">
                Saya membangun antarmuka toko online yang fokus pada estetika, struktur produk, dan kemudahan navigasi. Desain yang saya pilih bertujuan untuk membuat calon pembeli lebih cepat memahami produk, melihat kebutuhan utama, dan merasa nyaman saat menjelajahi katalog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
