import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const authContex = createContext();

export const useAuth = () => {
  const context = useContext(authContex);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [userr, setUser] = useState({});

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const googleAuth = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <authContex.Provider value={{ signup, googleAuth, login, logOut, userr }}>
      {children}
    </authContex.Provider>
  );
}
