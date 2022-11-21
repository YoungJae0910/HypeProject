// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeM1HQy3QYATmz15UJhlrd34uK1F4PMVw",
  authDomain: "firstlogin-9f741.firebaseapp.com",
  projectId: "firstlogin-9f741",
  storageBucket: "firstlogin-9f741.appspot.com",
  messagingSenderId: "760169275198",
  appId: "1:760169275198:web:8dcfb77be70f235e07966f",
  measurementId: "G-G7J89Y1JGH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
