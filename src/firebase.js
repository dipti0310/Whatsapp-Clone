import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3sbv2vxMW1zjObcWarXQeeEaTuB-3IKE",
    authDomain: "whats-app-clone-d213d.firebaseapp.com",
    projectId: "whats-app-clone-d213d",
    storageBucket: "whats-app-clone-d213d.appspot.com",
    messagingSenderId: "1028008231771",
    appId: "1:1028008231771:web:9292813c970e7e6e8c507e",
    measurementId: "G-44EENC0RVF"
  };
  
    const firebaseApp=firebase.initializeApp(firebaseConfig);
    const db=firebaseApp.firestore();
    const auth=firebaseApp.auth();
    const provider=new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;
  