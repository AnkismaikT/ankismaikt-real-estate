export const dynamic = "force-dynamic";
export const revalidate = 0;

import { adminDb } from "@/lib/firebaseAdmin";
import EnquiryForm from "@/components/EnquiryForm";

export const dynamic = "force-dynamic";

type Property = {
  title?: string;
  description?: string;
  price?: number;
};

export default async function PropertyDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  // ✅ REQUIRED in Next.js 16
  const { id } = await props.params;

  const snap = await adminDb
    .collection("properties")
    .doc(id)
    .get();

  if (!snap.exists) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Property not found</h1>
      </div>
    );
  }

  const property = snap.data() as Property;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      {/* Image placeholder */}
      <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-500">
        Property Image
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">
          {property.title}
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          {property.description}
        </p>

        <div className="text-2xl font-bold text-blue-600">
          ₹ {property.price?.toLocaleString("en-IN")}
        </div>
      </div>

      <EnquiryForm propertyId={id} />

      <a href="/properties" className="inline-block text-sm underline">
        ← Back to properties
      </a>
    </div>
  );
}

