// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA1Vu4CIP7lGCwG-GYyMTeslcvGpsHgtw",
  authDomain: "qr-code-fcf9c.firebaseapp.com",
  projectId: "qr-code-fcf9c",
  storageBucket: "qr-code-fcf9c.appspot.com",
  messagingSenderId: "768349088889",
  appId: "1:768349088889:web:2a17e58bfe6b9a685878a8",
  measurementId: "G-Z386YVBRRC"
};

// Initialize Firebase only if it hasn't been initialized yet
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the already initialized app
}

const db = getFirestore(app); // Initialize Firestore

export { db };
