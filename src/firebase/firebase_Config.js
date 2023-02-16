// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD6yPry0cHKUr2eTL-CLL5ZVBmY-pDwBNQ",
  authDomain: "torismapp-373a4.firebaseapp.com",
  projectId: "torismapp-373a4",
  storageBucket: "torismapp-373a4.appspot.com",
  messagingSenderId: "996319404703",
  appId: "1:996319404703:web:e0d39e2b724cd46cff38aa",
  measurementId: "G-VV3NQFY2MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export const db =getFirestore(app);
export {auth};

