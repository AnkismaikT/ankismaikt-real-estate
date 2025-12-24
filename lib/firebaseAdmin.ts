import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID as string,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL as string,
      privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY as string).replace(
        /\\n/g,
        "\n"
      ),
    }),
  });
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();

