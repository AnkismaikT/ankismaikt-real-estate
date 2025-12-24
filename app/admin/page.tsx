import { requireAdmin } from "@/lib/requireAdmin";
import Link from "next/link";

export default async function AdminHome() {
  await requireAdmin();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      <ul className="space-y-2">
        <li>
          <Link href="/admin/properties" className="text-blue-600 underline">
            Manage Properties
          </Link>
        </li>
        <li>
          <Link href="/admin/logout" className="text-red-600 underline">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

