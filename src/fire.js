import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; //new update to import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAhI2xliyj7v1Low6cBgnFvtvJqgrZGQDY",
  authDomain: "final-login-c4148.firebaseapp.com",
  projectId: "final-login-c4148",
  storageBucket: "final-login-c4148.appspot.com",
  messagingSenderId: "700494650074",
  appId: "1:700494650074:web:1399b858d7f6a1bfd663e3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

//hello