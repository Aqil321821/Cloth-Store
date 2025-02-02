import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDVln-FEFDNyEVVGiBviSauMeDxXX7HbyI',
  authDomain: 'smit-cloth-store.firebaseapp.com',
  projectId: 'smit-cloth-store',
  storageBucket: 'smit-cloth-store.firebasestorage.app',
  messagingSenderId: '683999419653',
  appId: '1:683999419653:web:43b64aa302806f0ec2eb6c',
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if (!userAuth) {
    return;
  }
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName, // displayName: displayName
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error ==>', error.message);
    }
  }
  return userDocRef;
};



export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);

};
