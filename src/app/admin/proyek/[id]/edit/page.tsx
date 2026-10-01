import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/auth/admin";
import { updateProyek } from "../../actions";

export default async function EditProyekPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { supabase } = await requireAdmin();

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-bold">
          Proyek tidak ditemukan
        </h1>

        <p className="mt-2 text-gray-400">
          ID proyek: {id}
        </p>

        <Link
          href="/admin/proyek"
          className="mt-6 inline-block rounded-lg border px-4 py-2"
        >
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Edit Proyek
        </h1>

        <p className="mt-2 text-gray-400">
          Mengedit: {project.title}
        </p>
      </div>

      <form action={updateProyek} className="space-y-5">
        <input
          type="hidden"
          name="id"
          value={project.id}
        />

        <div>
          <label className="mb-2 block">
            Nomor Proyek
          </label>

          <input
            name="project_number"
            required
            defaultValue={project.project_number}
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            Judul
          </label>

          <input
            name="title"
            required
            defaultValue={project.title}
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            Kategori
          </label>

          <input
            name="category"
            required
            defaultValue={project.category}
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            Deskripsi
          </label>

          <textarea
            name="description"
            required
            defaultValue={project.description}
            rows={5}
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            Technologies
          </label>

          <input
            name="technologies"
            defaultValue={
              project.technologies?.join(", ") ?? ""
            }
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            URL Gambar
          </label>

          <input
            name="image"
            defaultValue={project.image ?? ""}
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            Link Proyek
          </label>

          <input
            name="link"
            defaultValue={project.link ?? ""}
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={project.featured}
          />
          Featured
        </label>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-black"
          >
            Simpan Perubahan
          </button>

          <Link
            href="/admin/proyek"
            className="rounded-lg border border-white/20 px-5 py-3"
          >
            Batal
          </Link>
        </div>
      </form>
    </div>
  );
}