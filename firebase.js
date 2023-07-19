
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBULVRHhkdBN55UBcAIbGj0t5uNkovzJg",
  authDomain: "data-4e4d6.firebaseapp.com",
  projectId: "data-4e4d6",
  storageBucket: "data-4e4d6.appspot.com",
  messagingSenderId: "63465258637",
  appId: "1:63465258637:web:676a86dd60692ac31e2cc4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);