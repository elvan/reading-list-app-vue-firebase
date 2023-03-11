import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

export { db };
