import Link from "next/link";
import { notFound } from "next/navigation";
import { updateSkill } from "../../actions";
import { requireAdmin } from "@/lib/auth/admin";

export default async function EditSkillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { supabase } = await requireAdmin();
  const { data: skill, error } = await supabase
    .from("skills")
    .select("id, name, sort_order")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!skill) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <Link href="/admin/skill" className="text-sm text-gray-400 hover:text-white">Kembali ke skill</Link>
      <h1 className="my-5 text-3xl font-bold">Edit Skill</h1>
      <form action={updateSkill} className="space-y-4 border-y border-white/10 py-6">
        <input type="hidden" name="id" value={skill.id} />
        <label className="block text-sm">
          Nama skill
          <input name="name" required defaultValue={skill.name} className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3" />
        </label>
        <label className="block text-sm">
          Urutan
          <input name="sort_order" type="number" required defaultValue={skill.sort_order} className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3" />
        </label>
        <div className="flex gap-3 pt-2">
          <button type="submit" className="rounded-lg bg-white px-5 py-3 font-semibold text-black">Simpan Perubahan</button>
          <Link href="/admin/skill" className="rounded-lg border border-white/20 px-5 py-3">Batal</Link>
        </div>
      </form>
    </div>
  );
}