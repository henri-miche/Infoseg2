import firebase from '../connection/FirebaseConection';

export function uploadOcorrenciaFoto(path, blobOrFile) {
  const ref = firebase.storage().ref().child(path);
  return ref.put(blobOrFile).then(() => ref.getDownloadURL());
}

export function getOcorrenciaDownloadUrl(key) {
  return firebase
    .storage()
    .ref('ocorrencias')
    .child(key)
    .getDownloadURL();
}
