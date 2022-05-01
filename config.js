import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBhlhjjm_-pG2eIP3kCZ3g84w5j1Mp1qbU",
    authDomain: "e-ride-421f7.firebaseapp.com",
    projectId: "e-ride-421f7",
    storageBucket: "e-ride-421f7.appspot.com",
    messagingSenderId: "450642575287",
    appId: "1:450642575287:web:c1b5c35d9b199d22c3b232"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


