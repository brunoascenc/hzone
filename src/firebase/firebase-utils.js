import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCZo8VzrCdApxLNdaqIKfVRtigfQx-s0AU',
  authDomain: 'hzonedb.firebaseapp.com',
  projectId: 'hzonedb',
  storageBucket: 'hzonedb.appspot.com',
  messagingSenderId: '163796831942',
  appId: '1:163796831942:web:38cb8e4779d29b1195d1c7',
  measurementId: 'G-Z3DGQV4Q56',
};

firebase.initializeApp(config);

//snapshot from user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

//push data to firebase
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//convert snapshot to usable data
export const convertProductsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const data = doc.data();

    return data;
  });

  return transformedCollection;
};

//current user
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
