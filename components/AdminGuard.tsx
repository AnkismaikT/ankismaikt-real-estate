"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // simple auth check via cookie
    const isLoggedIn = document.cookie
      .split("; ")
      .find((row) => row.startsWith("admin-auth="))
      ?.split("=")[1];

    if (!isLoggedIn) {
      router.replace("/admin/login");
    }
  }, [router]);

  return <>{children}</>;
}

