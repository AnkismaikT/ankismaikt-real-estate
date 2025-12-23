import { adminDb } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

// LIST PROPERTIES
export async function GET() {
  const snap = await adminDb.collection("properties").get();

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return NextResponse.json(data);
}

// ADD PROPERTY
export async function POST(req: Request) {
  const body = await req.json();

  const doc = await adminDb.collection("properties").add({
    ...body,
    createdAt: Date.now(),
  });

  return NextResponse.json({ id: doc.id });
}

