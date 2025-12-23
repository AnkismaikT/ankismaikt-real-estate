import { adminDb } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

type Property = {
  id: string;
  title?: string;
  description?: string;
  price?: number;
};

export default async function PropertiesPage() {
  const snap = await adminDb.collection("properties").get();

  const properties: Property[] = snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as any),
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">
        Available Properties
      </h1>

      {properties.length === 0 && (
        <p className="text-gray-500">
          No properties available.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {properties.map((p) => (
          <div
            key={p.id}
            className="bg-white border rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >
            {/* Image placeholder */}
            <div className="h-52 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-sm">
              Property Image
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">
                {p.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {p.description}
              </p>

              <div className="flex items-center justify-between pt-4">
                <span className="text-lg font-bold text-blue-600">
                  ₹ {p.price?.toLocaleString("en-IN")}
                </span>

                {/* ✅ EXACT LINK YOU ASKED FOR */}
                <a
                  href={`/properties/${p.id}`}
                  className="text-sm px-4 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

