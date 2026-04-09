import Link from "next/link";
import { LoginForm } from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-100 px-4 dark:bg-stone-950">
      <div className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <h1 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
          Admin sign-in
        </h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          Enter the site password configured in <code className="text-xs">ADMIN_PASSWORD</code>.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
        <Link
          href="/"
          className="mt-6 block text-center text-sm text-amber-700 underline underline-offset-4 dark:text-amber-400"
        >
          ← Back to site
        </Link>
      </div>
    </div>
  );
}
