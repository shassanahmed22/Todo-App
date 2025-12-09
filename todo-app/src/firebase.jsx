// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDpHGkJKgJ_-kd6Bumx7stJMVCt_Vg_6Ag",
    authDomain: "todo-app-72de8.firebaseapp.com",
    projectId: "todo-app-72de8",
    storageBucket: "todo-app-72de8.firebasestorage.app",
    messagingSenderId: "396214122668",
    appId: "1:396214122668:web:758e842e5dc112e6600709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Authentication
export const auth = getAuth(app);

// 🔵 Google Provider
export const googleProvider = new GoogleAuthProvider();

// 🗄️ Firestore Database
export const db = getFirestore(app);
