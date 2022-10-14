  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import {getAuth , GoogleAuthProvider} from 'firebase/auth'
  import {getFirestore} from 'firebase/firestore'

  //for images
  import {getStorage} from "firebase/storage"
   

  const firebaseConfig = {
    apiKey: "AIzaSyA6WUSxRwXHmlFVshHrXR6ahhBqKzHo2cQ",
    authDomain: "food-store-85.firebaseapp.com",
    projectId: "food-store-85",
    storageBucket: "food-store-85.appspot.com",
    messagingSenderId: "375314144127",
    appId: "1:375314144127:web:8bac58d9020d581c8dd84a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 // db =>data base
  export const  db = getFirestore(app)
  export const auth = getAuth(app);
  export const storage = getStorage(app);
  export const provider= new GoogleAuthProvider()