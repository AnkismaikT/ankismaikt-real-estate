import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    // 🔐 REQUIRED ENV VAR
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET is missing in environment variables");
    }

    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // ✅ Create token safely
    const token = sign(
      { email },
      jwtSecret,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
      success: true,
      token,
    });
  } catch (error: any) {
    console.error("LOGIN API ERROR:", error.message);

    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}

