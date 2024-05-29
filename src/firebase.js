import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"  
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCt3Xq3YrDwVLmHryu3s3jSggb-cV6LZCI",
    authDomain: "videoportal-f7aa0.firebaseapp.com",
    projectId: "videoportal-f7aa0",
    storageBucket: "videoportal-f7aa0.appspot.com",
    messagingSenderId: "607772889608",
    appId: "1:607772889608:web:a77bea9240f4774b6137bd",
    measurementId: "G-RR0XNHKCTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
export const storage = getStorage(app);
export default db;
