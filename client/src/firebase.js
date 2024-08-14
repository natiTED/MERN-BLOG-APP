// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-66b81.firebaseapp.com",
  projectId: "mern-blog-app-66b81",
  storageBucket: "mern-blog-app-66b81.appspot.com",
  messagingSenderId: "16505104352",
  appId: "1:16505104352:web:a1caa51953857facfbed85",
  measurementId: "G-HSDX2796MZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
