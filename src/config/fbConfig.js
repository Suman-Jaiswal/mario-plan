import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 var firebaseConfig = {
    apiKey: "AIzaSyCnNMc9I6cZVx_13Ip1us_97SDYjejXRC4",
    authDomain: "mario-plan-4062c.firebaseapp.com",
    projectId: "mario-plan-4062c",
    storageBucket: "mario-plan-4062c.appspot.com",
    messagingSenderId: "969490995373",
    appId: "1:969490995373:web:b78c8942a2d747fde64e24",
    measurementId: "G-744SBQZLBZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;