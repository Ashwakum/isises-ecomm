import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAjjvriHLi3bgE1CQSQuUadROAoGss25f8",
    authDomain: "isises-db.firebaseapp.com",
    databaseURL: "https://isises-db.firebaseio.com",
    projectId: "isises-db",
    storageBucket: "isises-db.appspot.com",
    messagingSenderId: "1012800167710",
    appId: "1:1012800167710:web:dc6d8572b77e519743330f",
    measurementId: "G-G4PG4P6B45"
}

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
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user : ', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
