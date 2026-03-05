import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra?.firebase || {};
let firebaseConfig = {
  apiKey: extra.apiKey,
  authDomain: extra.authDomain,
  databaseURL: extra.databaseURL,
  projectId: extra.projectId,
  storageBucket: extra.storageBucket,
  messagingSenderId: extra.messagingSenderId,
  appId: extra.appId,
  measurementId: extra.measurementId,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  firebaseConfig = {
    apiKey: 'AIzaSyBkvVjMQ0zs_QdpS1ACxb3-ePa69xqhXik',
    authDomain: 'crudfirebase-74cc4.firebaseapp.com',
    databaseURL: 'https://crudfirebase-74cc4.firebaseio.com',
    projectId: 'crudfirebase-74cc4',
    storageBucket: 'crudfirebase-74cc4.appspot.com',
    messagingSenderId: '759202711157',
    appId: '1:759202711157:web:e59c0bc5a8363e311c5a3c',
    measurementId: 'G-VB5B4YLLRW',
  };
}

firebase.initializeApp(firebaseConfig);

export default firebase;