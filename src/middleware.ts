import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { authSecretKey } from "@/lib/auth-secret";

const COOKIE = "admin_session";

function isLocalhost(host: string) {
  const h = host.split(":")[0] ?? host;
  return h === "localhost" || h === "127.0.0.1" || h === "[::1]";
}

function forceHttpsIfNeeded(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const proto = request.headers.get("x-forwarded-proto");
  if (proto === "http" && !isLocalhost(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }
  return null;
}

export async function middleware(request: NextRequest) {
  const httpsRedirect = forceHttpsIfNeeded(request);
  if (httpsRedirect) {
    return httpsRedirect;
  }

  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const key = authSecretKey();
  if (!key) {
    return new NextResponse("Server misconfiguration: set AUTH_SECRET (16+ characters).", { status: 500 });
  }

  const token = request.cookies.get(COOKIE)?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    await jwtVerify(token, key);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
