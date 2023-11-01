// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfn68naHe_OqEWFVeq5qs8OnFo01AySps",
  authDomain: "assignment-react-ecomweb.firebaseapp.com",
  projectId: "assignment-react-ecomweb",
  storageBucket: "assignment-react-ecomweb.appspot.com",
  messagingSenderId: "371236182649",
  appId: "1:371236182649:web:2a412905445f75b0b692a8",
  databaseURL: "https://assignment-react-ecomweb-default-rtdb.asia-southeast1.firebasedatabase.app",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)

export {auth,db}