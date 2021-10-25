import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBGmKDtB1oUSxuDU03C5ePcS9Dpsh2yGR0',
  authDomain: 'whats-app---clone-c4e4c.firebaseapp.com',
  projectId: 'whats-app---clone-c4e4c',
  storageBucket: 'whats-app---clone-c4e4c.appspot.com',
  messagingSenderId: '269809732042',
  appId: '1:269809732042:web:eac84194b6c30a0c066733',
  measurementId: 'G-62ZGQ251PX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;