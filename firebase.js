import * as firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
   apiKey: "AIzaSyAVuJvDDbijMK0c69c9rMBX_bogO0kA58k",
   authDomain: "live-chat-839cf.firebaseapp.com",
   projectId: "live-chat-839cf",
   storageBucket: "live-chat-839cf.appspot.com",
   messagingSenderId: "978110916798",
   appId: "1:978110916798:web:1271753e05699614bf96ef"
 };

 
 let app;
 if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
 }

 const auth = firebase.auth();
 export {auth};