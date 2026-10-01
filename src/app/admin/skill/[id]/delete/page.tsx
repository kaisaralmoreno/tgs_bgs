import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteSkill } from "../../actions";
import { requireAdmin } from "@/lib/auth/admin";

export default async function DeleteSkillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { supabase } = await requireAdmin();
  const { data: skill, error } = await supabase
    .from("skills")
    .select("id, name")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!skill) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">Konfirmasi Hapus Skill</h1>
      <div className="border-y border-red-500/30 py-6">
        <p>Hapus skill <strong>{skill.name}</strong>?</p>
        <form action={deleteSkill} className="mt-6 flex gap-3">
          <input type="hidden" name="id" value={skill.id} />
          <button type="submit" className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white">Ya, Hapus</button>
          <Link href="/admin/skill" className="rounded-lg border border-white/20 px-4 py-2">Batal</Link>
        </form>
      </div>
    </div>
  );
}