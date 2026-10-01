import { cookies } from "next/headers";
import { ADMIN_DOORPASS_COOKIE } from "@/lib/admin-doorpass";

export async function hasAdminDoorpass(): Promise<boolean> {
  const cookieStore = await cookies();

  return cookieStore.get(ADMIN_DOORPASS_COOKIE)?.value === "1";
}