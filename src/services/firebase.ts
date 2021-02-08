import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebaseApp = firebase
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()
export const authGitHub = new firebaseApp.auth.GithubAuthProvider()
export const authTwitter = new firebaseApp.auth.TwitterAuthProvider()
export const authFacebook = new firebaseApp.auth.FacebookAuthProvider()