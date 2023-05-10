import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {   
  apiKey: "AIzaSyCQamvcZ6WMStzCyLHkw1fSJ5IOYB2g0vE",
  authDomain: "shops-e24b4.firebaseapp.com", 
  databaseURL: "https://shops-e24b4-default-rtdb.firebaseio.com",
  projectId: "shops-e24b4", 
  storageBucket: "shops-e24b4.appspot.com", 
  messagingSenderId: "766763700730",
  appId: "1:766763700730:web:d85f9fd90dc87e0783d443",
  measurementId: "G-QDG3JX5KMS"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
