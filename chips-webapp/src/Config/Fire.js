import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBxmpyzMiKMrx6hPRAu16DJSWXQyz9HmUY",
    authDomain: "chips-5380b.firebaseapp.com",
    databaseURL: "https://chips-5380b.firebaseio.com",
    projectId: "chips-5380b",
    storageBucket: "chips-5380b.appspot.com",
    messagingSenderId: "869618511922",
    appId: "1:869618511922:web:51917c43d75b74f0f6cc2b",
    measurementId: "G-3ZRZFS165D"
  });

  class Firebase {
    constructor() {
    
      this.auth = firebase.auth();
      this.db = firebase.firestore();
    }

  }
  export default new Firebase();