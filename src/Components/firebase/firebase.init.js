// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD80zDdxl8yMZuE_dSW7Av8VWdevYclGnc",
    authDomain: "b-7-m-10-m-4-ema-john.firebaseapp.com",
    projectId: "b-7-m-10-m-4-ema-john",
    storageBucket: "b-7-m-10-m-4-ema-john.appspot.com",
    messagingSenderId: "209172971797",
    appId: "1:209172971797:web:bc39e7286665354884e91c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;