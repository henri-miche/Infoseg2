import firebase from '../connection/FirebaseConection';

export function getAuth() {
  return firebase.auth();
}

export function signInWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return firebase.auth().signOut();
}

export function createUserWithEmailAndPassword(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return firebase.auth().sendPasswordResetEmail(email);
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}

export function onAuthStateChanged(callback) {
  return firebase.auth().onAuthStateChanged(callback);
}
