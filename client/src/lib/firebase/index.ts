import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseUrl: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const firebase = initializeApp(firebaseConfig)
const isEmulating = window.location.hostname === "localhost";
if (isEmulating) {

  const auth = getAuth();
  connectAuthEmulator(auth, "http://localhost:9099");

  const storage = getStorage();
  connectStorageEmulator(storage, "localhost", 9199);

  const db = getFirestore(firebase);
  connectFirestoreEmulator(db, 'localhost', 8880);

  const functions = getFunctions(firebase);
  connectFunctionsEmulator(functions, "localhost", 5001);
}

export const firebaseApp = () => { return firebase };

export default firebase;
