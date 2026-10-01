import Link from "next/link";
import { createProyek } from "./actions";
import { requireAdmin } from "@/lib/auth/admin";

export default async function ProyekAdminPage({
  searchParams,
}: {
  searchParams: Promise<{
    error?: string;
    success?: string;
  }>;
}) {
  const params = await searchParams;
  const { supabase } = await requireAdmin();

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: false });

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Kelola Proyek</h1>
        <p className="mt-2 text-gray-400">
          Kelola proyek portfolio kamu.
        </p>
      </div>

      {params.error && (
        <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {params.error}
        </div>
      )}

      {params.success && (
        <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400">
          {params.success}
        </div>
      )}

      {/* FORM TAMBAH */}
      <div className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-5 text-xl font-semibold">
          Tambah Proyek
        </h2>

        <form action={createProyek} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Nomor Proyek
            </label>

            <input
              name="project_number"
              required
              placeholder="04"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Judul
            </label>

            <input
              name="title"
              required
              placeholder="Website E-Commerce"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Kategori
            </label>

            <input
              name="category"
              required
              placeholder="Web Development"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Deskripsi
            </label>

            <textarea
              name="description"
              required
              rows={4}
              placeholder="Deskripsi proyek..."
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Technologies
            </label>

            <input
              name="technologies"
              placeholder="Next.js, TypeScript, Supabase"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />

            <p className="mt-1 text-xs text-gray-500">
              Pisahkan dengan koma.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              URL Gambar
            </label>

            <input
              name="image"
              placeholder="/images/project.jpg"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Link Proyek
            </label>

            <input
              name="link"
              placeholder="https://..."
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="featured"
            />
            <span>Featured project</span>
          </label>

          <button
            type="submit"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-gray-200"
          >
            Simpan Proyek
          </button>
        </form>
      </div>

      {/* DAFTAR PROYEK */}
      <div>
        <h2 className="mb-5 text-xl font-semibold">
          Daftar Proyek
        </h2>

        {error && (
          <div className="rounded-lg bg-red-500/10 p-4 text-red-400">
            Gagal mengambil data proyek: {error.message}
          </div>
        )}

        {projects && projects.length > 0 && (
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full">
              <thead className="border-b border-white/10 bg-white/5">
                <tr>
                  <th className="px-4 py-3 text-left">No</th>
                  <th className="px-4 py-3 text-left">Judul</th>
                  <th className="px-4 py-3 text-left">Kategori</th>
                  <th className="px-4 py-3 text-left">Teknologi</th>
                  <th className="px-4 py-3 text-left">Aksi</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-white/10"
                  >
                    <td className="px-4 py-4">
                      {project.project_number}
                    </td>

                    <td className="px-4 py-4 font-medium">
                      {project.title}
                    </td>

                    <td className="px-4 py-4">
                      {project.category}
                    </td>

                    <td className="px-4 py-4">
                      {project.technologies?.join(", ") || "-"}
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/proyek/${project.id}/edit`}
                          className="rounded-lg border border-white/20 px-3 py-2 text-sm hover:bg-white/10"
                        >
                          Edit
                        </Link>
                        <Link
                          href={`/admin/proyek/${project.id}/delete`}
                          className="rounded-lg border border-red-500/40 px-3 py-2 text-sm text-red-300 hover:bg-red-500/10"
                        >
                          Hapus
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!error && (!projects || projects.length === 0) && (
          <div className="rounded-xl border border-white/10 p-6 text-gray-400">
            Belum ada proyek.
          </div>
        )}
      </div>
    </div>
  );
}