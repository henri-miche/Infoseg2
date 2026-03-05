import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra?.firebase || {};
const firebaseConfig = {
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
  throw new Error(
    'Firebase config missing. Configure EXPO_PUBLIC_FIREBASE_* in .env (see .env.example).'
  );
}

firebase.initializeApp(firebaseConfig);

export default firebase;