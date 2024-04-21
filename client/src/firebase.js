// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mind-me-bbffd.firebaseapp.com",
  projectId: "mind-me-bbffd",
  storageBucket: "mind-me-bbffd.appspot.com",
  messagingSenderId: "249044766631",
  appId: "1:249044766631:web:dd7a7af6aa67d2426f7082"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);