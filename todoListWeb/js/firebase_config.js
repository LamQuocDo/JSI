// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtNr_phMsAAVm5iCQVGXhnkfSYUiEOuJI",
  authDomain: "jsi40-117b9.firebaseapp.com",
  projectId: "jsi40-117b9",
  storageBucket: "jsi40-117b9.firebasestorage.app",
  messagingSenderId: "245109949983",
  appId: "1:245109949983:web:41a8ef1a3cf35d88f1372a",
  measurementId: "G-REBM5R67BQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);