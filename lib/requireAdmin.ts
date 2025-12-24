import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminAuth } from "@/lib/firebaseAdmin";
import { ADMIN_EMAILS } from "@/lib/admin";

export async function requireAdmin() {
  const cookieStore = cookies();
  const session = cookieStore.get("__session")?.value;

  if (!session) {
    redirect("/login");
  }

  try {
    const decoded = await adminAuth.verifySessionCookie(session, true);

    if (!decoded.email || !ADMIN_EMAILS.includes(decoded.email)) {
      redirect("/");
    }

    return decoded;
  } catch (err) {
    redirect("/login");
  }
}

