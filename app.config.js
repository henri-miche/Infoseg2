const path = require('path');

try {
  require('dotenv').config({ path: path.resolve(__dirname, '.env') });
} catch (_) {}

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL || process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || process.env.FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID || process.env.FIREBASE_MEASUREMENT_ID,
};

if (!firebaseConfig.apiKey) {
  firebaseConfig.apiKey = 'AIzaSyBkvVjMQ0zs_QdpS1ACxb3-ePa69xqhXik';
  firebaseConfig.authDomain = 'crudfirebase-74cc4.firebaseapp.com';
  firebaseConfig.databaseURL = 'https://crudfirebase-74cc4.firebaseio.com';
  firebaseConfig.projectId = 'crudfirebase-74cc4';
  firebaseConfig.storageBucket = 'crudfirebase-74cc4.appspot.com';
  firebaseConfig.messagingSenderId = '759202711157';
  firebaseConfig.appId = '1:759202711157:web:e59c0bc5a8363e311c5a3c';
  firebaseConfig.measurementId = 'G-VB5B4YLLRW';
}

module.exports = {
  expo: {
    name: 'Infoseg',
    slug: 'Infoseg',
    version: '1.0.0',
    newArchEnabled: false,
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#000',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    android: {
      package: 'com.hmichel.Infoseg',
    },
    description: '',
    extra: {
      firebase: firebaseConfig,
    },
  },
};
