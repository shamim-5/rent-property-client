// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjk1nyaGQTlgopHWqP9PjL1-et8UngYDE",
  authDomain: "rent-property-123.firebaseapp.com",
  projectId: "rent-property-123",
  storageBucket: "rent-property-123.appspot.com",
  messagingSenderId: "759412737822",
  appId: "1:759412737822:web:bdacca59e755aced06eb0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
