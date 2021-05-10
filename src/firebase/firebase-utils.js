import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZo8VzrCdApxLNdaqIKfVRtigfQx-s0AU",
  authDomain: "hzonedb.firebaseapp.com",
  projectId: "hzonedb",
  storageBucket: "hzonedb.appspot.com",
  messagingSenderId: "163796831942",
  appId: "1:163796831942:web:38cb8e4779d29b1195d1c7",
  measurementId: "G-Z3DGQV4Q56",
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef)
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// export const convertCollectionsSnapshotToMap = (collections) => {
//   const transformedCollection = collections.docs.map((doc) => {
//     const data = doc.data();

//     return data
//   });

//   console.log(transformedCollection);
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();
