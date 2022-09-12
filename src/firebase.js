import firebase from 'firebase';

    
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAihiuHAbo2ckJvyFJckCDz6Ch3APY543M",
    authDomain: "todo-list-ca90d.firebaseapp.com",
    projectId: "todo-list-ca90d",
    storageBucket: "todo-list-ca90d.appspot.com",
    messagingSenderId: "819958128209",
    appId: "1:819958128209:web:dfe282d30ce32097f96270",
    measurementId: "G-SCL8DFX6JW"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firebaseApp.firebase();
export default db;