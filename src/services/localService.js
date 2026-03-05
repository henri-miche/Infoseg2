import firebase from '../connection/FirebaseConection';

function localRef() {
  return firebase.database().ref('/local');
}

export function getLocalByKey(localKey) {
  return localRef()
    .child(localKey)
    .once('value')
    .then((snapshot) => snapshot.val());
}
