import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd7Me-YS-IVsrAWKN62bqVzKltznyUGoU",
  authDomain: "clone-c61eb.firebaseapp.com",
  projectId: "clone-c61eb",
  storageBucket: "clone-c61eb.appspot.com",
  messagingSenderId: "26244733393",
  appId: "1:26244733393:web:8adfd256aa5bf49327a8f0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
