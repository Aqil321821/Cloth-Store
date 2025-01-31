import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDVln-FEFDNyEVVGiBviSauMeDxXX7HbyI',
  authDomain: 'smit-cloth-store.firebaseapp.com',
  projectId: 'smit-cloth-store',
  storageBucket: 'smit-cloth-store.firebasestorage.app',
  messagingSenderId: '683999419653',
  appId: '1:683999419653:web:43b64aa302806f0ec2eb6c',
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot= await getDoc(userDocRef)
  console.log(userSnapshot.data());
  console.log(userSnapshot.exists());
};
