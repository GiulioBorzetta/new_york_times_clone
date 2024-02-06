import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  PhoneAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJuDswbTNwqkQdOcIe1wWJWJ25zGZb0RU",
  authDomain: "newyorktimes-clone-196e9.firebaseapp.com",
  projectId: "newyorktimes-clone-196e9",
  storageBucket: "newyorktimes-clone-196e9.appspot.com",
  messagingSenderId: "529709835243",
  appId: "1:529709835243:web:3192fe37542b386984efae",
  measurementId: "G-8QLS090XRT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new PhoneAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
