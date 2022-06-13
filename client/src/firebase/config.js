
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDpNSELlYZzYgRJf-t1PtDq_m-a3jrM5GY",
  authDomain: "banki-430c8.firebaseapp.com",
  projectId: "banki-430c8",
  storageBucket: "banki-430c8.appspot.com",
  messagingSenderId: "43298563469",
  appId: "1:43298563469:web:eb50366ba5a3f83348c9c4"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
