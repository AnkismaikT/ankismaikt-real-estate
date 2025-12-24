import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = body.token;

    if (!token) {
      return NextResponse.json(
        { error: "Missing token" },
        { status: 400 }
      );
    }

    // Verify Firebase ID token
    await adminAuth.verifyIdToken(token);

    // Create session cookie
    const sessionCookie = await adminAuth.createSessionCookie(token, {
      expiresIn: 5 * 24 * 60 * 60 * 1000, // 5 days
    });

    // Next.js 16: cookies() is async
    const cookieStore = await cookies();
    cookieStore.set("__session", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("LOGIN API ERROR:", error);
    return NextResponse.json(
      { error: "Session creation failed" },
      { status: 401 }
    );
  }
}

