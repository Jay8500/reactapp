// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBrhK_SS5IWBLIxyP1Jhq4L2kHNXzsdX0o",
    authDomain: "tiktokclone-c3a7d.firebaseapp.com",
    databaseURL: "https://tiktokclone-c3a7d.firebaseio.com",
    projectId: "tiktokclone-c3a7d",
    storageBucket: "tiktokclone-c3a7d.appspot.com",
    messagingSenderId: "123457866359",
    appId: "1:123457866359:web:dfb86f088c15f7eb1c9472",
    measurementId: "G-PVXLY6H7RV"
  };

  const firebaseApp =
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;