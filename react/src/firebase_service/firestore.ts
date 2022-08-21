import { app } from "./firebase";
import {
  getFirestore,
  Firestore,
  collection,
  getDocs,
} from "firebase/firestore";

// Firestore instance
const firestore: Firestore = getFirestore(app);

/**
 * Example of get data from firebase
 */
export async function getDataFromCollection(): Promise<any> {
  const sampleCollection = collection(firestore, "COLLECTION_PATH");
  return await getDocs(sampleCollection);
}
