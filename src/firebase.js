import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCP6_GeZs5sKT6hm21lzK3fuj01V2jD8SA",
  authDomain: "reels-clone-53bd7.firebaseapp.com",
  projectId: "reels-clone-53bd7",
  storageBucket: "reels-clone-53bd7.appspot.com",
  messagingSenderId: "935509691172",
  appId: "1:935509691172:web:ff06a4c273a885e7dc01b1",
  measurementId: "G-ZBBMFEFCBZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
