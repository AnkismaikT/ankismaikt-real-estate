import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req: Request) {
  const data = await req.json();
  await addDoc(collection(db, "enquiries"), {
    ...data,
    createdAt: Date.now()
  });
  return new Response("OK");
}

