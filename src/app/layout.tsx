import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaisar Al Moreno | Portfolio",
  description: "Personal Portfolio Website of Kaisar Al Moreno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
          <source src="/videos/vidio%201.mp4" type="video/mp4" />
        </video>
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}