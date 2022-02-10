// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2Tc8w7IT_kZoYn1qa858RPIXPrtBIxy8',
  authDomain: 'todoapp-d677b.firebaseapp.com',
  projectId: 'todoapp-d677b',
  storageBucket: 'todoapp-d677b.appspot.com',
  messagingSenderId: '1030055353588',
  appId: '1:1030055353588:web:ddbe726b7e913de73752a1',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
