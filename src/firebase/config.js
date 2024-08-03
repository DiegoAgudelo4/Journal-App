// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb0LhrcwkzHiBLAujjnkj9H_2X-X5Fi2U",
  authDomain: "curso-react-9ff02.firebaseapp.com",
  projectId: "curso-react-9ff02",
  storageBucket: "curso-react-9ff02.appspot.com",
  messagingSenderId: "13010889516",
  appId: "1:13010889516:web:85398a958f584eca9e5a89"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);