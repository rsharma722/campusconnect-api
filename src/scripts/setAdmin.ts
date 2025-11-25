import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

if (!admin.apps.length) {
admin.initializeApp({
    credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
});
}

const auth = admin.auth();

async function setAdmin() {
const uid = process.env.ADMIN_UID;

if (!uid) {
    console.error("ERROR: Missing ADMIN_UID in .env file!");
    process.exit(1);
}

try {
    await auth.setCustomUserClaims(uid, { role: "admin" });
    console.log("Admin role added to user:", uid);
} catch (err) {
    console.error("Failed to set admin role:", err);
}
}

setAdmin();
