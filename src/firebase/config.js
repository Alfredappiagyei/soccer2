import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyCiGUbSCAATqVOiouvb1E--mVZ3Y9o_d2g",
    authDomain: "soccerangelsregistrers.firebaseapp.com",
    databaseURL: "https://soccerangelsregistrers.firebaseio.com",
    projectId: "soccerangelsregistrers",
    storageBucket: "soccerangelsregistrers.appspot.com",
    messagingSenderId: "300251085899",
    appId: "1:300251085899:web:310d42e10a845d76dfe1ce",
    measurementId: "G-TGQ5LB07JE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseConfig