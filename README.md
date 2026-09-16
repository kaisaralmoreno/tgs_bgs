# KAISAR AL MORENO - Portfolio

Website portofolio personal milik Kaisar Al Moreno, seorang pelajar Rekayasa Perangkat Lunak dari Jawa Timur yang tertarik pada pengembangan web, desain UI, teknologi digital, modifikasi, dan permesinan.

Website ini digunakan untuk memperkenalkan diri, menampilkan kemampuan teknis, memamerkan proyek, dan membuka jalur komunikasi dengan pengunjung.

## Fitur Utama

- Landing page responsif dengan navigasi desktop dan menu mobile.
- Hero section dengan profil, lokasi, dan tombol menuju bagian proyek.
- Bagian About tentang minat pada web development dan database.
- Daftar skill teknologi dari data terpusat.
- Pencarian portofolio berdasarkan judul, kategori, deskripsi, atau teknologi.
- Filter proyek berdasarkan kategori dan status Featured.
- Halaman detail untuk setiap proyek.
- Pemutar musik dengan kontrol play/pause, progress, restart, dan volume.
- Bagian kontak melalui email dan Instagram.
- Tema visual gelap dengan aksen merah, animasi latar, dan layout responsif.

## Daftar Proyek

### 1. KAISAR News

Platform berita dengan tampilan modern dan responsif. Proyek ini menekankan penyajian informasi yang terstruktur, kategori berita yang rapi, navigasi sederhana, dan pengalaman membaca yang nyaman di desktop maupun mobile.

- Kategori: Web Development
- Teknologi: Next.js, TypeScript, Tailwind CSS, Responsive UI
- Halaman: `/project/kaisar_news`

### 2. Web Ecommerce

Konsep aplikasi toko online dengan storefront modern, katalog produk, kategori yang rapi, dan pengalaman pengguna yang berfokus pada proses pembelian.

- Kategori: Web Application
- Status: Featured
- Teknologi: Next.js, TypeScript, Tailwind CSS, Ecommerce UI
- Halaman: `/project/web_ecommerce`

### 3. KAISAR PERCUSION

Konsep desain dan marketplace untuk produk alat drumband. Proyek ini menampilkan citra brand yang profesional, modern, energik, dan sesuai dengan kebutuhan produk musik serta performance.

- Kategori: Web Application
- Status: Dalam tahap pengembangan
- Teknologi: Figma, UI Design, Branding, Product Showcase
- Halaman: `/project/kaisar_percusion`

## Teknologi

- [Next.js 16](https://nextjs.org/) dengan App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React untuk ikon antarmuka
- HTML dan CSS
- React Compiler

Skill yang ditampilkan pada halaman portofolio juga mencakup IoT, Supabase, Figma, dan MySQL.

## Struktur Proyek

```text
src/
├── app/
│   ├── page.tsx                    # Halaman utama portofolio
│   ├── layout.tsx                  # Layout dan metadata global
│   ├── globals.css                 # Style global dan animasi latar
│   └── project/                    # Halaman detail proyek
├── components/                     # Komponen UI halaman utama
└── data/portfolio.ts               # Data skill dan proyek

public/
├── music/                          # File audio portofolio
├── foto.jpeg                       # Foto profil
├── project1.png                    # Preview KAISAR News
├── project2.png                    # Preview Web Ecommerce
└── project3.png                    # Preview KAISAR PERCUSION
```

## Menjalankan Proyek

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Script NPM

```bash
npm run dev      # Menjalankan server development
npm run build    # Membuat build production
npm run start    # Menjalankan build production
```

## Rute Halaman

| Rute | Keterangan |
| --- | --- |
| `/` | Halaman utama portofolio |
| `/project/kaisar_news` | Detail proyek KAISAR News |
| `/project/web_ecommerce` | Detail proyek Web Ecommerce |
| `/project/kaisar_percusion` | Detail proyek KAISAR PERCUSION |

## Konfigurasi Kontak

Alamat email pada tombol kontak saat ini masih menggunakan alamat contoh `emailkamu@gmail.com`. Ganti alamat tersebut di `src/components/Contact.tsx` sebelum dipublikasikan.

## Status Pengembangan

Proyek aktif dikembangkan sebagai portofolio personal. KAISAR PERCUSION masih berada pada tahap konsep dan pengembangan, sedangkan tombol `Visit Project` pada halaman detail masih menggunakan tautan placeholder.
