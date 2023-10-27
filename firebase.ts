import {getApp, getApps, initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getFunctions} from 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyCscE5QwmhY5d6v3iDuOB1v9aIuCNJyfN4",
  authDomain: "saas-chat-translator-b194b.firebaseapp.com",
  projectId: "saas-chat-translator-b194b",
  storageBucket: "saas-chat-translator-b194b.appspot.com",
  messagingSenderId: "621279207817",
  appId: "1:621279207817:web:fa98cbac8c0002d3ea0158",
  measurementId: "G-0F8FLY4MH2",
};

//Check App if it's already initialize
//if it is already initialize get the app else initialize the app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)

export{db, auth, functions}