import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXe26JgLfvb-mYWlrE0VFcZQvSfGcmvFQ",
  authDomain: "mafia-92cce.firebaseapp.com",
  projectId: "mafia-92cce",
  storageBucket: "mafia-92cce.appspot.com",
  messagingSenderId: "1014769594739",
  appId: "1:1014769594739:web:ad66dd1948abc219379506",
  measurementId: "G-SK4RJHX1KF"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);