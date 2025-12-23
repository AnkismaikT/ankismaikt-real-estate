import { adminDb } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const propertiesSnap = await adminDb.collection("properties").get();
  const enquiriesSnap = await adminDb.collection("enquiries").get();

  return (
    <main style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Admin Dashboard
      </h1>

      <div style={{ marginTop: "24px" }}>
        <p>Total Properties: {propertiesSnap.size}</p>
        <p>Total Enquiries: {enquiriesSnap.size}</p>
      </div>
    </main>
  );
}

