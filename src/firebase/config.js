// import * as  firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyBcZwZUNjjnJzCn563YipxXcASe8SFo5D0',
  authDomain: 'sistersepakat.firebaseapp.com',
  databaseURL:
    'https://sistersepakat-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'sistersepakat',
  storageBucket: 'sistersepakat.appspot.com',
  messagingSenderId: '622405130239',
  appId: '1:622405130239:web:aaf73d79ed53e03bd2b9ca',
  measurementId: 'G-N8W40P1L0P',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};


