import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';

const firebaseConfig = {
  databaseURL: "https://gb-project-b5903-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyBfF07kLtnU0EHJWnxd3zp06OhM4HQSbqM",
  authDomain: "gb-project-b5903.firebaseapp.com",
  projectId: "gb-project-b5903",
  storageBucket: "gb-project-b5903.appspot.com",
  messagingSenderId: "98970046189",
  appId: "1:98970046189:web:c0a189cb7ad558738e86e4"
};

firebase.initializeApp(firebaseConfig);