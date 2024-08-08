// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSBQbX2XgJIJiXqqlWYw8gzO4VUNdGByM",
  authDomain: "ai-travel-planner-app-f856a.firebaseapp.com",
  projectId: "ai-travel-planner-app-f856a",
  storageBucket: "ai-travel-planner-app-f856a.appspot.com",
  messagingSenderId: "453741646208",
  appId: "1:453741646208:web:54c0082ecacf1d2603b165"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

