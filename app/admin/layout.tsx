"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminGuard from "@/components/AdminGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const hasAuth = document.cookie
      .split("; ")
      .some((row) => row.startsWith("admin-auth="));
    setLoggedIn(hasAuth);
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <AdminGuard>
      <div className="min-h-screen flex flex-col">
        <nav className="flex gap-6 p-4 border-b border-gray-800 bg-black text-white">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/properties">Properties</Link>

          <div className="ml-auto">
            {!loggedIn ? (
              <Link href="/admin/login" className="underline">
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="underline">
                Logout
              </button>
            )}
          </div>
        </nav>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </AdminGuard>
  );
}

