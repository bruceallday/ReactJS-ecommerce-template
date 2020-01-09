import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "{AIzaSyCZ1veQMvQwwkb1ka0-zVm2nrk7OgiyDmU}",
  authDomain: "react-ecommerce-caf86.firebaseapp.com",
  databaseURL: "https://react-ecommerce-caf86.firebaseio.com",
  projectId: "react-ecommerce-caf86",
  storageBucket: "react-ecommerce-caf86.appspot.com",
  messagingSenderId: "522930649756",
  appId: "1:522930649756:web:f062c083dee844c8440b59",
  measurementId: "G-M8X1HNCPV0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;