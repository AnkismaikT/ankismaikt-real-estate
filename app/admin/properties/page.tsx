import Link from "next/link";
import { adminDb } from "@/lib/firebaseAdmin";

export default async function AdminPropertiesPage() {
  const snap = await adminDb.collection("properties").orderBy("createdAt", "desc").get();

  const properties = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Admin Properties</h1>

      {properties.length === 0 && (
        <p className="text-gray-500">No properties found.</p>
      )}

      <div className="space-y-4">
        {properties.map((p: any) => (
          <div
            key={p.id}
            className="flex items-center justify-between rounded-md border p-4"
          >
            <div>
              <h2 className="font-medium">{p.title}</h2>
              <p className="text-sm text-gray-500">{p.location}</p>
            </div>

            <div className="flex gap-4">
              <Link
                href={`/admin/properties/${p.id}/edit`}
                className="text-blue-600 hover:underline"
              >
                Edit
              </Link>

              {/* DELETE BUTTON TEMPORARILY REMOVED
                  Backend + API still exist
                  Will be re-added as Client Component */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

