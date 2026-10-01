import AdminDashboardView from "@/features/admin/components/AdminDashboardView";
import { requireAdmin } from "@/lib/auth/admin";

export default async function AdminDashboardPage() {
  const { supabase } = await requireAdmin();
  const [{ count: projectCount }, { count: skillCount }] = await Promise.all([
    supabase.from("projects").select("id", { count: "exact", head: true }),
    supabase.from("skills").select("id", { count: "exact", head: true }),
  ]);

  return (
    <AdminDashboardView
      projectCount={projectCount ?? 0}
      skillCount={skillCount ?? 0}
    />
  );
}