// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXe26JgLfvb-mYWlrE0VFcZQvSfGcmvFQ",
  authDomain: "mafia-92cce.firebaseapp.com",
  projectId: "mafia-92cce",
  storageBucket: "mafia-92cce.appspot.com",
  messagingSenderId: "1014769594739",
  appId: "1:1014769594739:web:ad66dd1948abc219379506",
  measurementId: "G-SK4RJHX1KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);