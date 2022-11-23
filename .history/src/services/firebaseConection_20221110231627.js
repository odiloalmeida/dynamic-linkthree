import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBOxN3Gistey76iPnRjE158QUbYnj2s028",
  authDomain: "dev3-1d524.firebaseapp.com",
  projectId: "dev3-1d524",
  storageBucket: "dev3-1d524.appspot.com",
  messagingSenderId: "574592255692",
  appId: "1:574592255692:web:d95596bcdf39ca604d2469",
  measurementId: "G-NBDTCJJBLW"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };