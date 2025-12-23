"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    const ok = confirm("Delete this property?");
    if (!ok) return;

    await fetch(`/api/properties/${id}`, {
      method: "DELETE",
    });

    router.push("/admin/properties");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="text-red-600 hover:underline"
    >
      Delete
    </button>
  );
}

