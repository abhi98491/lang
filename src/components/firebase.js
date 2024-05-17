// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlIFlSvovK_4tRgGHxHlp5rovDoIGlYgo",
  authDomain: "languagelearning-d1dc4.firebaseapp.com",
  projectId: "languagelearning-d1dc4",
  storageBucket: "languagelearning-d1dc4.appspot.com",
  messagingSenderId: "589303686067",
  appId: "1:589303686067:web:8661c7e460b618492661c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;