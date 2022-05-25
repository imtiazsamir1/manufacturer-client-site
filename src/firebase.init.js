import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKcroCEhiZCqx5YIwsZWVzbNB3BYCcxCg",
  authDomain: "bike-parts-5e55f.firebaseapp.com",
  projectId: "bike-parts-5e55f",
  storageBucket: "bike-parts-5e55f.appspot.com",
  messagingSenderId: "582157339585",
  appId: "1:582157339585:web:17ff7e5d3db42b14437d40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
