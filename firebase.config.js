// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUYRLc3rAw8hETG9wOrAcVMZJKsJaXECQ",
  authDomain: "portfoliodatas-c773c.firebaseapp.com",
  projectId: "portfoliodatas-c773c",
  storageBucket: "portfoliodatas-c773c.firebasestorage.app",
  messagingSenderId: "1051249554184",
  appId: "1:1051249554184:web:d6c30ee4ea7a494a6bf2bd",
  measurementId: "G-R5XYE4686G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;