import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAKhm-gDzsOObeqjztoboCv2H7xNljyrWU",
  authDomain: "crown-db-73a13.firebaseapp.com",
  databaseURL: "https://crown-db-73a13.firebaseio.com",
  projectId: "crown-db-73a13",
  storageBucket: "crown-db-73a13.appspot.com",
  messagingSenderId: "266651686313",
  appId: "1:266651686313:web:042037c40a5fa0d29620b8"
}

export const createUserProfileDocument = async (userAuth, ...additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  console.log('SnapShot:',snapShot)

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

