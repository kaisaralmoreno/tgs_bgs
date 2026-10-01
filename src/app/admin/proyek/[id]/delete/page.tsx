import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteProyek } from "../../actions";
import { requireAdmin } from "@/lib/auth/admin";

export default async function HapusProyekPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { supabase } = await requireAdmin();
  const { data: project, error } = await supabase
    .from("projects")
    .select("id, title")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">Konfirmasi Hapus</h1>
      <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
        <p>Hapus proyek ini?</p>
        <p className="mt-2 font-semibold">{project.title}</p>
        <p className="mt-3 text-sm text-red-300">Tindakan ini tidak dapat dibatalkan.</p>
        <form action={deleteProyek} className="mt-6 flex gap-3">
          <input type="hidden" name="id" value={project.id} />
          <button type="submit" className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-500">
            Ya, Hapus
          </button>
          <Link href="/admin/proyek" className="rounded-lg border border-white/20 px-4 py-2">
            Batal
          </Link>
        </form>
      </div>
    </div>
  );
}