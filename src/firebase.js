



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6V-uM9n1Dzi7wSEt4ZkdbcWw3_jWs-o4",
  authDomain: "city-266f9.firebaseapp.com",
  projectId: "city-266f9",
  storageBucket: "city-266f9.appspot.com",
  messagingSenderId: "392879370187",
  appId: "1:392879370187:web:c0ebb9e2c659475a45904e",
  measurementId: "G-7GG3NK9R3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();