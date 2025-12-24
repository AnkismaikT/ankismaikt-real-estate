import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("__session")?.value;

  if (!session) {
    return NextResponse.json({ loggedIn: false });
  }

  return NextResponse.json({ loggedIn: true });
}

