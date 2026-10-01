"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/admin";

export async function createProyek(formData: FormData): Promise<void> {
  const projectNumber = formData.get("project_number")?.toString().trim();
  const title = formData.get("title")?.toString().trim();
  const category = formData.get("category")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const technologies = formData.get("technologies")?.toString();
  const image = formData.get("image")?.toString().trim();
  const link = formData.get("link")?.toString().trim();

  if (!projectNumber || !title || !category || !description) {
    throw new Error("Semua field wajib diisi");
  }

  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("projects").insert({
    project_number: projectNumber,
    title,
    category,
    description,
    technologies: technologies
      ? technologies.split(",").map((item) => item.trim()).filter(Boolean)
      : [],
    image: image || null,
    link: link || null,
    featured: formData.get("featured") === "on",
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/proyek");
  revalidatePath("/", "page");
  redirect("/admin/proyek?success=Proyek%20berhasil%20ditambahkan");
}

export async function updateProyek(formData: FormData): Promise<void> {
  const id = formData.get("id")?.toString();
  const projectNumber = formData.get("project_number")?.toString().trim();
  const title = formData.get("title")?.toString().trim();
  const category = formData.get("category")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const technologies = formData.get("technologies")?.toString();
  const image = formData.get("image")?.toString().trim();
  const link = formData.get("link")?.toString().trim();

  if (!id || !projectNumber || !title || !category || !description) {
    throw new Error("Semua field wajib diisi");
  }

  const { supabase } = await requireAdmin();
  const { error } = await supabase
    .from("projects")
    .update({
      project_number: projectNumber,
      title,
      category,
      description,
      technologies: technologies
        ? technologies.split(",").map((item) => item.trim()).filter(Boolean)
        : [],
      image: image || null,
      link: link || null,
      featured: formData.get("featured") === "on",
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/proyek");
  revalidatePath("/", "page");
  redirect(`/admin/proyek?success=${encodeURIComponent("Proyek berhasil diperbarui")}`);
}

export async function deleteProyek(formData: FormData): Promise<void> {
  const id = formData.get("id")?.toString();

  if (!id) {
    throw new Error("ID proyek tidak valid");
  }

  const { supabase } = await requireAdmin();
  const { data, error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Proyek tidak ditemukan atau tidak dapat dihapus");
  }

  revalidatePath("/admin/proyek");
  revalidatePath("/", "page");
  redirect("/admin/proyek?success=Proyek%20berhasil%20dihapus");
}