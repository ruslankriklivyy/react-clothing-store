import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCuYisstbevddUZeisQWH_aEwMVAKtx9F0',
  authDomain: 'jolybell-clone.firebaseapp.com',
  projectId: 'jolybell-clone',
  storageBucket: 'jolybell-clone.appspot.com',
  messagingSenderId: '70183233773',
  appId: '1:70183233773:web:22c661e7b96d0e842b44e4',
  measurementId: 'G-Z07CTG548Z',
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
