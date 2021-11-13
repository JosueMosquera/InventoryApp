// Import the functions you need from the SDKs you need

import 'firebase/firestore';
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyB2RjTYi_oBvHkIcpz6iczJ4hhdBZFTd6w",
  authDomain: "inventarioapp-bbde7.firebaseapp.com",
  projectId: "inventarioapp-bbde7",
  storageBucket: "inventarioapp-bbde7.appspot.com",
  messagingSenderId: "695983260677",
  appId: "1:695983260677:web:1c39decbcbb7e4f25a486c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const googleAuthProvider=new GoogleAuthProvider()
export{
    firebaseConfig,
    db,
    googleAuthProvider,
}