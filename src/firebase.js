// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYO2Eoq8RiCcJENhZDvcJV6gO3BbL2y0E",
  authDomain: "todo-app-53d2e.firebaseapp.com",
  projectId: "todo-app-53d2e",
  storageBucket: "todo-app-53d2e.appspot.com",
  messagingSenderId: "617108813505",
  appId: "1:617108813505:web:41934122529059d91c0640",
  measurementId: "G-T6VPEWD8Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export{ database };