
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepwise-70ed1.firebaseapp.com",
  projectId: "prepwise-70ed1",
  storageBucket: "prepwise-70ed1.firebasestorage.app",
  messagingSenderId: "438753407686",
  appId: "1:438753407686:web:8ece05423e00b95cec5dc7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}