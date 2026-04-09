import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";
import { authSecretKey } from "@/lib/auth-secret";

const COOKIE = "admin_session";

function getSecretKey() {
  const k = authSecretKey();
  if (!k) {
    throw new Error("AUTH_SECRET must be set (min 16 characters)");
  }
  return k;
}

export async function signAdminSession() {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecretKey());

  const jar = await cookies();
  jar.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function getSession() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload;
  } catch {
    return null;
  }
}

export async function verifyTokenString(token: string) {
  const k = authSecretKey();
  if (!k) return false;
  try {
    await jwtVerify(token, k);
    return true;
  } catch {
    return false;
  }
}

export async function requireAdmin() {
  const s = await getSession();
  if (!s) redirect("/admin/login");
}
