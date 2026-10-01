import Link from "next/link";
import { logout } from "@/app/(auth)/login/action";
import { createClient } from "@/lib/supabase/server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = user
    ? await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle()
    : { data: null };

  return (
    <div className="min-h-screen">
      {profile?.role === "admin" && (
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/admin/dashboard" className="font-bold">
              Admin Panel
            </Link>

            <nav className="flex items-center gap-4">
              <span className="text-sm text-gray-400">{user?.email}</span>
              <Link href="/admin/dashboard">Dashboard</Link>
              <Link href="/admin/proyek">Proyek</Link>
              <Link href="/admin/skill">Skill</Link>

              <form action={logout}>
                <button type="submit" className="rounded-lg border px-3 py-2">
                  Logout
                </button>
              </form>
            </nav>
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}