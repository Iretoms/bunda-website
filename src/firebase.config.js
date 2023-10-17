import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbpNkpAsHPzNPgiUKMIdNGuMrA1Bhozr4",
  authDomain: "bunda-solutions.firebaseapp.com",
  projectId: "bunda-solutions",
  storageBucket: "bunda-solutions.appspot.com",
  messagingSenderId: "873445868948",
  appId: "1:873445868948:web:8b25ea8570ae4481d83b81"
};


// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()