import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_EMAILS } from "@/lib/admin";
import { adminAuth } from "@/lib/firebaseAdmin";

export async function requireAdmin() {
  // ✅ Next.js 16: cookies() is async
  const cookieStore = await cookies();
  const session = cookieStore.get("__session")?.value;

  // ❌ No session → go home
  if (!session) {
    redirect("/");
  }

  try {
    const decoded = await adminAuth.verifySessionCookie(session, true);

    // ❌ Not admin email → go home
    if (!decoded.email || !ADMIN_EMAILS.includes(decoded.email)) {
      redirect("/");
    }

    // ✅ Admin verified
    return decoded;
  } catch (err) {
    redirect("/");
  }
}

