
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsUx74_59c0tSnpX7uyjE2oqhkiAVmcr8",
  authDomain: "chatapp-6ed7d.firebaseapp.com",
  projectId: "chatapp-6ed7d",
  storageBucket: "chatapp-6ed7d.appspot.com",
  messagingSenderId: "465912426611",
  appId: "1:465912426611:web:e802aabbc6f65d76873a06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(); 