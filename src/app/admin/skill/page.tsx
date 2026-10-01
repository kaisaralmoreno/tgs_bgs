import Link from "next/link";
import { createSkill } from "./actions";
import { requireAdmin } from "@/lib/auth/admin";

export default async function SkillAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const params = await searchParams;
  const { supabase } = await requireAdmin();
  const { data: skills, error } = await supabase
    .from("skills")
    .select("id, name, sort_order")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link href="/admin/dashboard" className="text-sm text-gray-400 hover:text-white">
            Dashboard
          </Link>
          <h1 className="mt-3 text-3xl font-bold">Kelola Skill</h1>
        </div>
        <p className="text-sm text-gray-400">{skills?.length ?? 0} skill</p>
      </div>

      {params.success && (
        <p role="status" className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
          {params.success}
        </p>
      )}

      {error && (
        <p role="alert" className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-300">
          Gagal mengambil skill: {error.message}. Pastikan tabel `skills` sudah tersedia di Supabase.
        </p>
      )}

      <section className="border-y border-white/10 py-6">
        <h2 className="mb-4 text-xl font-semibold">Tambah skill</h2>
        <form action={createSkill} className="grid gap-4 sm:grid-cols-[1fr_10rem_auto] sm:items-end">
          <label className="block text-sm">
            Nama skill
            <input name="name" required className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3" placeholder="TypeScript" />
          </label>
          <label className="block text-sm">
            Urutan
            <input name="sort_order" type="number" defaultValue="0" className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3" />
          </label>
          <button type="submit" className="rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-gray-200">
            Tambah
          </button>
        </form>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Daftar skill</h2>
        {skills && skills.length > 0 ? (
          <div className="divide-y divide-white/10 border-y border-white/10">
            {skills.map((skill) => (
              <div key={skill.id} className="flex flex-wrap items-center justify-between gap-4 py-4">
                <div>
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-sm text-gray-500">Urutan {skill.sort_order}</p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/skill/${skill.id}/edit`} className="rounded-lg border border-white/20 px-3 py-2 text-sm hover:bg-white/10">
                    Edit
                  </Link>
                  <Link href={`/admin/skill/${skill.id}/delete`} className="rounded-lg border border-red-500/40 px-3 py-2 text-sm text-red-300 hover:bg-red-500/10">
                    Hapus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : !error ? (
          <p className="border-y border-white/10 py-6 text-gray-400">Belum ada skill.</p>
        ) : null}
      </section>
    </div>
  );
}