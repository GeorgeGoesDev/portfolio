import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCzyKd2QVDf14xUwsLrQgAPWtEkIvQNH-I",
    authDomain: "portfolio-24310.firebaseapp.com",
    projectId: "portfolio-24310",
    storageBucket: "portfolio-24310.appspot.com",
    messagingSenderId: "765958474836",
    appId: "1:765958474836:web:281375db3df7fb460db1c1",
    measurementId: "G-H156SQJRZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



export const dbConnection = db;
export const authenticator = auth;
export const dbStorage = storage;


