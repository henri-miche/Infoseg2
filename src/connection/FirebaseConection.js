import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBkvVjMQ0zs_QdpS1ACxb3-ePa69xqhXik",
    authDomain: "crudfirebase-74cc4.firebaseapp.com",
    databaseURL: "https://crudfirebase-74cc4.firebaseio.com",
    projectId: "crudfirebase-74cc4",
    storageBucket: "crudfirebase-74cc4.appspot.com",
    messagingSenderId: "759202711157",
    appId: "1:759202711157:web:e59c0bc5a8363e311c5a3c",
    measurementId: "G-VB5B4YLLRW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;