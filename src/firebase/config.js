import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

export { db, auth };
