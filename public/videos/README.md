# Folder video portofolio

Gunakan folder ini untuk menaruh file video proyek Anda.

Cara kerja:
1. Salin video Anda ke folder ini, misalnya: demo-portfolio.mp4
2. Panggil video di komponen page dengan path /videos/nama-file.mp4
3. Pastikan format file didukung seperti .mp4 atau .webm

Contoh penggunaan:

<video src="/videos/demo-portfolio.mp4" controls poster="/project1.png" className="w-full rounded-2xl">
  Browser Anda tidak mendukung tag video.
</video>

Tips:
- Gunakan video pendek agar halaman lebih ringan.
- Kompres ukuran video agar loading lebih cepat.
- Buat poster image agar preview terlihat sebelum video diputar.
