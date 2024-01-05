// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD29ya3zAOYa1OHCKH1XXfh3Rjt_fUx1nA",
  authDomain: "vite-contact-8e659.firebaseapp.com",
  projectId: "vite-contact-8e659",
  storageBucket: "vite-contact-8e659.appspot.com",
  messagingSenderId: "493184456352",
  appId: "1:493184456352:web:09260756a5a1631fac9bc5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);