// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (NEW project)
const firebaseConfig = {
    apiKey: "AIzaSyCwD4dVH_onGUbH5Z6EIU2w6WG_FkukLa8",
    authDomain: "todo-app-4a9ca.firebaseapp.com",
    projectId: "todo-app-4a9ca",
    storageBucket: "todo-app-4a9ca.firebasestorage.app",
    messagingSenderId: "469051408516",
    appId: "1:469051408516:web:528f7bee4b8bb94ac302d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services export
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
