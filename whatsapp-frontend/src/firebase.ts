// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCCS1xb3G5-uBd-uIl67t1VWyg9ga0_Q4",
  authDomain: "whatsapp-mern-3569f.firebaseapp.com",
  projectId: "whatsapp-mern-3569f",
  storageBucket: "whatsapp-mern-3569f.firebasestorage.app",
  messagingSenderId: "574388953918",
  appId: "1:574388953918:web:c4bd1c0d7b461b34e5c26f",
  measurementId: "G-1KX6CYBGDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
