"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/admin";

export async function createSkill(formData: FormData): Promise<void> {
  const name = formData.get("name")?.toString().trim();
  const sortOrderValue = formData.get("sort_order")?.toString();
  const sortOrder = sortOrderValue ? Number(sortOrderValue) : 0;

  if (!name || !Number.isInteger(sortOrder)) {
    throw new Error("Nama dan urutan skill harus valid");
  }

  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("skills").insert({
    name,
    sort_order: sortOrder,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/skill");
  revalidatePath("/", "page");
  redirect("/admin/skill?success=Skill%20berhasil%20ditambahkan");
}

export async function updateSkill(formData: FormData): Promise<void> {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString().trim();
  const sortOrderValue = formData.get("sort_order")?.toString();
  const sortOrder = sortOrderValue ? Number(sortOrderValue) : 0;

  if (!id || !name || !Number.isInteger(sortOrder)) {
    throw new Error("Data skill tidak valid");
  }

  const { supabase } = await requireAdmin();
  const { error } = await supabase
    .from("skills")
    .update({ name, sort_order: sortOrder })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/skill");
  revalidatePath("/", "page");
  redirect("/admin/skill?success=Skill%20berhasil%20diperbarui");
}

export async function deleteSkill(formData: FormData): Promise<void> {
  const id = formData.get("id")?.toString();

  if (!id) {
    throw new Error("ID skill tidak valid");
  }

  const { supabase } = await requireAdmin();
  const { data, error } = await supabase
    .from("skills")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Skill tidak ditemukan atau tidak dapat dihapus");
  }

  revalidatePath("/admin/skill");
  revalidatePath("/", "page");
  redirect("/admin/skill?success=Skill%20berhasil%20dihapus");
}