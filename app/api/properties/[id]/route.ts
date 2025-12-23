import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

interface Context {
  params: Promise<{
    id: string;
  }>;
}

// GET property
export async function GET(
  req: Request,
  context: Context
) {
  const { id } = await context.params;

  const doc = await adminDb.collection("properties").doc(id).get();

  if (!doc.exists) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ id: doc.id, ...doc.data() });
}

// UPDATE property
export async function PUT(
  req: Request,
  context: Context
) {
  const { id } = await context.params;
  const body = await req.json();

  await adminDb.collection("properties").doc(id).update({
    ...body,
    updatedAt: new Date(),
  });

  return NextResponse.json({ success: true });
}

// DELETE property
export async function DELETE(
  req: Request,
  context: Context
) {
  const { id } = await context.params;

  await adminDb.collection("properties").doc(id).delete();

  return NextResponse.json({ success: true });
}

