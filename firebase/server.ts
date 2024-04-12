import admin, { type ServiceAccount } from "firebase-admin";
import serviceAccount from "../serviceAccount.json";

export const loadFirebase = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
  console.log("[FIREBASE] Connected");
};
