// Import tipe Metadata dari Next.js untuk SEO dan judul halaman
import type { Metadata } from "next";

// Import file CSS global yang dipakai di semua halaman
import "./globals.css";

// Metadata halaman untuk browser tab dan deskripsi SEO
export const metadata: Metadata = {
  title: "Kaisar Al Moreno | Portfolio",
  description: "Personal Portfolio Website of Kaisar Al Moreno",
};

// Layout utama aplikasi: semua halaman akan masuk ke sini lewat children
export default function RootLayout({
  children,
}: Readonly<{
  // children berisi halaman yang sedang dibuka, misalnya Home, About, Project
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Video background layar penuh untuk menambah efek visual */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/project1.png"
          aria-hidden="true"
          className="site-background-video"
        >
          {/* File video yang dipakai sebagai background */}
          <source src="/videos/vidio%201.mp4" type="video/mp4" />
        </video>

        {/* Wrapper untuk semua konten halaman agar tampil di atas video background */}
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}