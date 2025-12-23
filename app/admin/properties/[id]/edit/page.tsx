import { adminDb } from "@/lib/firebaseAdmin";
import { redirect } from "next/navigation";
import DeleteButton from "../../DeleteButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPropertyPage({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    redirect("/admin/properties");
  }

  const ref = adminDb.collection("properties").doc(id);
  const snap = await ref.get();

  if (!snap.exists) {
    redirect("/admin/properties");
  }

  const data = snap.data() as any;

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-semibold mb-6">Edit Property</h1>

      <form className="space-y-4">
        <input
          defaultValue={data.title}
          disabled
          className="w-full border p-2 rounded bg-gray-100"
        />

        <input
          defaultValue={data.price}
          disabled
          className="w-full border p-2 rounded bg-gray-100"
        />

        <input
          defaultValue={data.location}
          disabled
          className="w-full border p-2 rounded bg-gray-100"
        />

        <textarea
          defaultValue={data.description}
          disabled
          className="w-full border p-2 rounded bg-gray-100"
          rows={4}
        />

        <div className="flex gap-6 items-center pt-4">
          <a
            href="/admin/properties"
            className="text-gray-600 hover:underline"
          >
            Back
          </a>

          <DeleteButton id={id} />
        </div>
      </form>

      <p className="mt-6 text-sm text-gray-500">
        Update action will be finalized via API route (stable path).
      </p>
    </div>
  );
}

