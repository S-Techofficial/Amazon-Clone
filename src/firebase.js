import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCBjVSjQW8Xe4Wwe1iJW5Pk8RBn77K7Qmo",
    authDomain: "clone-82bc3.firebaseapp.com",
    databaseURL: "https://clone-82bc3.firebaseio.com",
    projectId: "clone-82bc3",
    storageBucket: "clone-82bc3.appspot.com",
    messagingSenderId: "351882293118",
    appId: "1:351882293118:web:f4f3e0351263326d040d2f",
    measurementId: "G-J0BL2Y7YFT"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};