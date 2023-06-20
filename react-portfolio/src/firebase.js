
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDSQHqOKgpX8ui9m-2mkAUoMhbKMr4ER9s",
  authDomain: "leticiasilva-portfolio.firebaseapp.com",
  projectId: "leticiasilva-portfolio",
  storageBucket: "leticiasilva-portfolio.appspot.com",
  messagingSenderId: "366608973848",
  appId: "1:366608973848:web:3d55ea0e3e8bb4f3f6036d",
  measurementId: "G-WFVRJN16TB"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);