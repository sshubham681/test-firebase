import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxtDzOvx4WjIDmrYnLuHFW4S9AiYbJryw",
  authDomain: "insta-clone-2b831.firebaseapp.com",
  projectId: "insta-clone-2b831",
  storageBucket: "insta-clone-2b831.appspot.com",
  messagingSenderId: "867897081981",
  appId: "1:867897081981:web:a36a00581d3d02e3b47114",
  measurementId: "G-D2XTX9CMDK"
};

firebase.initializeApp(firebaseConfig);

export default firebase;