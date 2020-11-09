import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvno14CZbyVThBpPZq7C1mOLXJhOM03fY",
    authDomain: "tinder-clone-5a640.firebaseapp.com",
    databaseURL: "https://tinder-clone-5a640.firebaseio.com",
    projectId: "tinder-clone-5a640",
    storageBucket: "tinder-clone-5a640.appspot.com",
    messagingSenderId: "883012867181",
    appId: "1:883012867181:web:c02ca03449b2551ead9b64",
    measurementId: "G-7R7SMS20DS"
  };

  /* const firebaseApp = */firebase.initializeApp(firebaseConfig)
  const database = firebase.firestore()

  export default database