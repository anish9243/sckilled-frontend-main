import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

// @ts-ignore
if (!firebase?.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "sckilled-9ebbb.firebaseapp.com",
    projectId: "sckilled-9ebbb",
    storageBucket: "sckilled-9ebbb.appspot.com",
    messagingSenderId: "743546942200",
    appId: process.env.REACT_APP_API_ID,
    measurementId: "G-B2Y3N302ZZ",
  });
} else {
  //@ts-ignore
  firebase.app();
}

// @ts-ignore
export var db = firebase.firestore();

export default firebase;
