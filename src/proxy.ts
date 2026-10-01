import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import {
  ADMIN_DOORPASS_COOKIE,
  isValidAdminDoorpass,
} from "@/lib/admin-doorpass";

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/admin") {
    const doorpass = request.nextUrl.searchParams.get("doorpass");

    if (doorpass && isValidAdminDoorpass(doorpass)) {
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.set(ADMIN_DOORPASS_COOKIE, "1", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/admin",
        maxAge: 10 * 60,
      });
      response.headers.set("Referrer-Policy", "no-referrer");
      return response;
    }
  }

  return updateSession(request);
}

export const config = {
  matcher: ["/admin/:path*"],
};