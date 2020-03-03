import firebase from 'firebase/app'; //base features of firebase library
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyubq279nIDRcI5ZRr0p3KCMwHm50zMuY",
    authDomain: "marioplan-48fe6.firebaseapp.com",
    databaseURL: "https://marioplan-48fe6.firebaseio.com",
    projectId: "marioplan-48fe6",
    storageBucket: "marioplan-48fe6.appspot.com",
    messagingSenderId: "1034808279980",
    appId: "1:1034808279980:web:0541cd415341bfc4dab009",
    measurementId: "G-2018BC23Y2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //initializes the firestore
  firebase.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics();
  
  export default firebase;