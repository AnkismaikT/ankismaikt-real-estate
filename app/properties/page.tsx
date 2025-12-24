export const dynamic = "force-dynamic";
export const revalidate = 0;

import { adminDb } from "@/lib/firebaseAdmin";
import Link from "next/link";

export default async function PropertiesPage() {
  const snap = await adminDb
    .collection("properties")
    .orderBy("createdAt", "desc")
    .get();

  const properties = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Properties</h1>

      {properties.length === 0 && <p>No properties found.</p>}

      {properties.map((p: any) => (
        <div key={p.id} className="border p-4 rounded">
          <h2 className="font-medium">{p.title}</h2>
          <p className="text-sm text-gray-500">{p.location}</p>
          <Link
            href={`/properties/${p.id}`}
            className="text-blue-600 underline"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
}

