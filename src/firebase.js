// require("dotenv").config();
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID

  // apiKey: "AIzaSyDKEzpt0pDNOs6S3MgZH7xcvkPoT8TmCyo",
  // authDomain: "chatapp-514e7.firebaseapp.com",
  // projectId: "chatapp-514e7",
  // storageBucket: "chatapp-514e7.appspot.com",
  // messagingSenderId: "40798905359",
  // appId: "1:40798905359:web:79303a9a01f2d529042f7a"
};
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db = getFirestore();