import { auth } from "../config/firebase";

export async function registerUser(email: string, password: string) {
const userRecord = await auth.createUser({
    email,
    password,
});

await auth.setCustomUserClaims(userRecord.uid, { role: "user" });

return userRecord;
}

export async function setUserRole(uid: string, role: "admin" | "user") {
await auth.setCustomUserClaims(uid, { role });
return { uid, role };
}
