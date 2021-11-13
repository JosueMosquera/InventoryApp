// Import the functions you need from the SDKs you need

import 'firebase/firestore';
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_APP_ID
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