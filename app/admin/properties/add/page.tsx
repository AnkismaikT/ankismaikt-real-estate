"use client";

import { useRouter } from "next/navigation";

export default function AddPropertyPage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    await fetch("/api/properties", {
      method: "POST",
      body: JSON.stringify(body),
    });

    router.push("/admin/properties");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Add Property</h1>

      <input
        name="title"
        placeholder="Title"
        className="border p-2 w-full"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        className="border p-2 w-full"
      />

      <input
        name="price"
        placeholder="Price"
        type="number"
        className="border p-2 w-full"
        required
      />

      <button className="bg-black text-white px-4 py-2">
        Add Property
      </button>
    </form>
  );
}

