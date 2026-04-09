"use server";

import { signAdminSession, clearAdminSession } from "@/lib/auth";
import { verifyAdminPassword } from "@/lib/password";
import { redirect } from "next/navigation";

export type LoginFormState = { ok: false; message: string } | null;

export async function loginAction(
  _prev: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  const password = String(formData.get("password") ?? "");
  if (!process.env.ADMIN_PASSWORD) {
    return { ok: false, message: "ADMIN_PASSWORD is not configured on the server." };
  }
  if (!verifyAdminPassword(password)) {
    return { ok: false, message: "Invalid password." };
  }
  await signAdminSession();
  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login");
}
