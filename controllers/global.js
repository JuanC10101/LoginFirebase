// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js'
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx9tG6VOzyet2uPm1xx6xaz2lK31ViDNo",
  authDomain: "nube-7d372.firebaseapp.com",
  projectId: "nube-7d372",
  storageBucket: "nube-7d372.appspot.com",
  messagingSenderId: "390500540793",
  appId: "1:390500540793:web:252d21c225945879a68fa8",
  measurementId: "G-PKCQ0WR02Z"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics();
const auth = getAuth(app);

//Metodo inicio de sesion

export const loginValidation = (email, password)=>
  signInWithEmailAndPassword(auth, email, password)
  
  /*
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  */