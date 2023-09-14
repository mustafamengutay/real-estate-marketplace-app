import { initializeApp } from "firebase/app";

// Import getFirestore
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB8tNvhclvKPbe6UyZCVfJONlFVOd0dqFM",
    authDomain: "house-marketplace-app-c2e78.firebaseapp.com",
    projectId: "house-marketplace-app-c2e78",
    storageBucket: "house-marketplace-app-c2e78.appspot.com",
    messagingSenderId: "58575611981",
    appId: "1:58575611981:web:931513e2c40c45b8121404"
};

initializeApp(firebaseConfig);

export const db = getFirestore();