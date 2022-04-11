// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWdsX87AazIfR41spuDuYhzqXX4W38Hfs",
    authDomain: "ema-john-simple-10ecc.firebaseapp.com",
    projectId: "ema-john-simple-10ecc",
    storageBucket: "ema-john-simple-10ecc.appspot.com",
    messagingSenderId: "731885756273",
    appId: "1:731885756273:web:6791f65d367a9cdd5a20d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;