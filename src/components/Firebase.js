import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdLGu-AFYqCIwrk-3jyVewWCyECyYjk44",
  authDomain: "eshop-a938f.firebaseapp.com",
  projectId: "eshop-a938f",
  storageBucket: "eshop-a938f.appspot.com",
  messagingSenderId: "353193465739",
  appId: "1:353193465739:web:3126c24c2d754f832b018e",
  measurementId: "G-WT4YN4DZ7X"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
