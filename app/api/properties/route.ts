import { adminDb } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

/**
 * GET /api/properties
 * List all properties
 */
export async function GET() {
  try {
    const snap = await adminDb.collection("properties").get();

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error("GET /properties error:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/properties
 * Add a new property
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const docRef = await adminDb.collection("properties").add({
      ...body,
      createdAt: Date.now(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error("POST /properties error:", error);
    return NextResponse.json(
      { error: "Failed to create property" },
      { status: 500 }
    );
  }
}

