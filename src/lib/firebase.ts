// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyrHbTBsH8IMk42W6I-ebyjeXAzgXdTBg",
  authDomain: "business-cms-e72b5.firebaseapp.com",
  projectId: "business-cms-e72b5",
  storageBucket: "business-cms-e72b5.firebasestorage.app",
  messagingSenderId: "927442829627",
  appId: "1:927442829627:web:be1cfee11417de87f4771e",
  measurementId: "G-7JL0QHW7MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);