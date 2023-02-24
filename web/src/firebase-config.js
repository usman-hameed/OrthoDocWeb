import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmtnJyu49FXn9pCpSvQuLJfPvYTkzCV6E",
  authDomain: "orthodoc-4a9ee.firebaseapp.com",
  projectId: "orthodoc-4a9ee",
  storageBucket: "orthodoc-4a9ee.appspot.com",
  messagingSenderId: "1096470858479",
  appId: "1:1096470858479:web:c65c5c5123863e6512e91a",
  measurementId: "G-YK8HJ08L0H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const authentication = getAuth(app);
export const storage = getStorage(app);