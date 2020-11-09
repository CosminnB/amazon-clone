import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzoHTKunjcDO2quc5zRYbz7Mp9v5alG_s",
  authDomain: "clone-7a06b.firebaseapp.com",
  databaseURL: "https://clone-7a06b.firebaseio.com",
  projectId: "clone-7a06b",
  storageBucket: "clone-7a06b.appspot.com",
  messagingSenderId: "420535036970",
  appId: "1:420535036970:web:1aecba78974607eb832753",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
