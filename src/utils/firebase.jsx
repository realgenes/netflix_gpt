// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoO5nZqc5BM2YyVeBKuJ7dirm8GAD9cEM",
  authDomain: "netflix-gpt-4d76e.firebaseapp.com",
  projectId: "netflix-gpt-4d76e",
  storageBucket: "netflix-gpt-4d76e.firebasestorage.app",
  messagingSenderId: "889510932808",
  appId: "1:889510932808:web:5831bbe0533d66a635037d",
  measurementId: "G-RQ689MEVB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
export const auth = getAuth();