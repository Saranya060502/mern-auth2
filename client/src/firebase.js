// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-123e7.firebaseapp.com",
  projectId: "mern-auth-123e7",
  storageBucket: "mern-auth-123e7.appspot.com",
  messagingSenderId: "1072901682481",
  appId: "1:1072901682481:web:6cd52c870812227622ac10",
  measurementId: "G-87HX8VR4QL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);