import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhDfSgC4pW8fdUMZIDZcpQbjDDZJ2IL48",
  authDomain: "todo-app-5fee6.firebaseapp.com",
  databaseURL: "https://todo-app-5fee6-default-rtdb.firebaseio.com",
  projectId: "todo-app-5fee6",
  storageBucket: "todo-app-5fee6.appspot.com",
  messagingSenderId: "975799127949",
  appId: "1:975799127949:web:239372b6ab1b9c4dc8f7c4",
  measurementId: "G-0XG3FST2YY",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { setDoc };
export const auth = getAuth(firebaseApp);
export { db };

//https://todo-app-5fee6.web.app
