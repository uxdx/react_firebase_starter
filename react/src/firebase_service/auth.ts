import { app } from "./firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
  UserCredential,
  Auth,
} from "firebase/auth";
import { useEffect, useState } from "react";

// Firebase Auth instance
const auth: Auth = getAuth(app);

// Google auth provider
const provider: GoogleAuthProvider = new GoogleAuthProvider();

export function getCurrentUser(): User | null {
  return auth.currentUser;
}

// export async function getCurrentUserToken() {
//   return await auth.currentUser?.getIdToken();
// }

export async function logInWithGooglePopup(): Promise<UserCredential> {
  return await signInWithPopup(auth, provider);
}

export async function logout(): Promise<void> {
  return await signOut(auth);
}
/**
 * Custom Hook.
 * Detact current user state change.
 */
// export function useCurrentAuthState(): User | null {
//   const [userState, setUserState] = useState<User | null>(null);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setUserState(user);
//     });
//   });

//   return userState;
// }
