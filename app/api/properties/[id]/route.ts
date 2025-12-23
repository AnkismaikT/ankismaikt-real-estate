import { adminDb } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const formData = await req.formData();
  const method = formData.get("_method");

  if (method === "PUT") {
    await adminDb.collection("properties").doc(params.id).update({
      title: formData.get("title"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      updatedAt: Date.now(),
    });

    return NextResponse.redirect(
      new URL("/admin/properties", req.url)
    );
  }

  return NextResponse.json({ error: "Invalid request" }, { status: 400 });
}

