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
        {children}
      </body>
    </html>
  );
}