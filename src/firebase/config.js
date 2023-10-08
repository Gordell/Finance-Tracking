import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyASHghGw3U6jixPMNLdY6PMLcO2LwzPzXk",
    authDomain: "my-money-ca653.firebaseapp.com",
    projectId: "my-money-ca653",
    storageBucket: "my-money-ca653.appspot.com",
    messagingSenderId: "422707446262",
    appId: "1:422707446262:web:760162ad42772b866847d7"
  }

//   init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//  timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }