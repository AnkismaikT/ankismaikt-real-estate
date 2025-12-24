import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const jwtSecret = process.env.JWT_SECRET;

    // ✅ HARD GUARD — prevents build crash
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is missing");
    }

    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
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

