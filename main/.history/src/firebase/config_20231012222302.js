// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDoyERfTVgW2koQGic7jzOWysaJcEOlxo",
  authDomain: "myblogapp-87566.firebaseapp.com",
  projectId: "myblogapp-87566",
  storageBucket: "myblogapp-87566.appspot.com",
  messagingSenderId: "337665643353",
  appId: "1:337665643353:web:86998447809f6fb864b248",
  measurementId: "G-1LE1N8G67W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();