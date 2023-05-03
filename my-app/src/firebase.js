import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0oudVuIPzOe0rgiSH8mqKzvlI-Kb1Fhs",
  authDomain: "project-todo-38a89.firebaseapp.com",
  projectId: "project-todo-38a89",
  storageBucket: "project-todo-38a89.appspot.com",
  messagingSenderId: "297497060062",
  appId: "1:297497060062:web:a801e4df90d512b6fe184f",
  measurementId: "G-9B811406FR",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { setDoc };
export const auth = getAuth(firebaseApp);
export { db };

//https://project-todo-38a89.firebaseapp.com/__/auth/handler <<face-auth
