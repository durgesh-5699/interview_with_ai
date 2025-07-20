import { initializeApp , getApp , getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdKoRJgNLp0W0mgvTOHx9Hk1VKkHHjm3o",
    authDomain: "prepwise-46f2b.firebaseapp.com",
    projectId: "prepwise-46f2b",
    storageBucket: "prepwise-46f2b.firebasestorage.app",
    messagingSenderId: "738014856419",
    appId: "1:738014856419:web:4550004a65e0b49876f1d6",
    measurementId: "G-EVS4RYS2TV"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp() ;

export const auth = getAuth(app) ;

export const db = getFirestore(app);