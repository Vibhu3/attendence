import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlxdaxKEfW4YjBqmVWH_Lj36VVG7Tt4gQ",
    authDomain: "attendence-ddc85.firebaseapp.com",
    databaseURL: "https://attendence-ddc85.firebaseio.com",
    projectId: "attendence-ddc85",
    storageBucket: "attendence-ddc85.appspot.com",
    messagingSenderId: "378354133881",
    appId: "1:378354133881:web:2be8cf9939810ddc271da8"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
export default  firebase.database();