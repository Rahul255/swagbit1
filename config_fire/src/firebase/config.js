import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxXMWQLHOpZz-C0HhkPHrHKtpcJCWb2rU",
    authDomain: "fir-682fa.firebaseapp.com",
    projectId: "fir-682fa",
    storageBucket: "fir-682fa.appspot.com",
    messagingSenderId: "388667375129",
    appId: "1:388667375129:web:7cb765c32f4f61e729f488",
    measurementId: "G-C6GMDGJYM2"
  };

export const Firebase = firebase.initializeApp(firebaseConfig)