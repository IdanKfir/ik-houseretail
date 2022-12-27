import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCS61YX4jPObPlfF3rWYhna-4L4nUYLZCg',
  authDomain: 'house-marketplace-41769.firebaseapp.com',
  projectId: 'house-marketplace-41769',
  storageBucket: 'house-marketplace-41769.appspot.com',
  messagingSenderId: '971657773804',
  appId: '1:971657773804:web:5f7bed79fcdd02cce69bc9',
};

// Initiliaze Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
