import firebase from 'firebase'

  // Initialize Firebase
var config = {
    apiKey: "AIzaSyDk0kjG3Hvt-Ja6vwQXrL3us7OvlkXWmh0",
    authDomain: "maalik-208115.firebaseapp.com",
    databaseURL: "https://maalik-208115.firebaseio.com",
    projectId: "maalik-208115",
    storageBucket: "maalik-208115.appspot.com",
    messagingSenderId: "449245001490"
  };

const firebaseApp = firebase.initializeApp(config);
const rootRef = firebase.database().ref();

export default rootRef;



