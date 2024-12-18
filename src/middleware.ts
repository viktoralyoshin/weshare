import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/auth-token.service";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;

  const publicRoutes = ["/"];
  const protectedRoutes = ["/feed"];

  const path = request.nextUrl.pathname;

  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.includes(path);
  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  if (isProtectedRoute && refreshToken) return NextResponse.next();
  if (isProtectedRoute) return NextResponse.redirect(new URL("/", url));

  if (isPublicRoute && refreshToken)
    return NextResponse.redirect(new URL("/feed", url));
  if (isPublicRoute) return NextResponse.next();

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
