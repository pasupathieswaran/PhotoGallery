import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAbWHJhUji3C-aVP6TF35f-gtWupX4BunQ",
  authDomain: "photogallery-e2193.firebaseapp.com",
  databaseURL: "https://photogallery-e2193.firebaseio.com",
  projectId: "photogallery-e2193",
  storageBucket: "photogallery-e2193.appspot.com",
  messagingSenderId: "94471137124",
  appId: "1:94471137124:web:34a224092ea88bae92bc71",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
