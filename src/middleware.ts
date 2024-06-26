import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. /favicon.ico, /sitemap.xml (static files)
     */
    "/((?!api/|_next/|_static|vendor|_icons|_vercel|favicon.ico|sitemap.xml).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const token = (await getToken({ req })) as {
    email?: string;
    user?: {
      createdAt?: string;
    };
  };

  // if not authenticated and path is internal home then redirect to /signin
  if (!token?.email && path !== "/signin") {
    const loginURL = new URL("/signin", req.url);
    if (path !== "/") {
      loginURL.searchParams.set("next", encodeURIComponent(path));
    }
    return NextResponse.redirect(loginURL);
  }

  // if authenticated and path is /signin then redirect to /home
  if (token?.email && path === "/signin") {
    const homeURL = new URL("/team-slug/roadmaps", req.url);
    return NextResponse.redirect(homeURL);
  }

  return NextResponse.next();
}
