import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDeC524vYHLXhi3HqgMlNm7btYsA8I1qbg",
  authDomain: "wannado-e2ab8.firebaseapp.com",
  projectId: "wannado-e2ab8",
  storageBucket: "wannado-e2ab8.appspot.com",
  messagingSenderId: "780731481468",
  appId: "1:780731481468:web:ed40699662133fe991f8f9"
}

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
