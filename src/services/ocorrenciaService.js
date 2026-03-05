import firebase from "../connection/FirebaseConection";

function ocorrenciasRef() {
  return firebase.database().ref("/Ocorrencias");
}

const DEFAULT_PAGE_SIZE = 50;

export function listOcorrencias(limit = DEFAULT_PAGE_SIZE) {
  return ocorrenciasRef()
    .orderByKey()
    .limitToLast(limit)
    .once("value")
    .then((snapshot) => {
      const list = [];
      snapshot.forEach((childItem) => {
        list.push({
          key: childItem.key,
          ...childItem.val(),
          dataa: childItem.val().data,
          hora: childItem.val().hora,
        });
      });
      return list.reverse();
    });
}

export function searchOcorrenciasByNome(nome) {
  return ocorrenciasRef()
    .orderByChild("nome")
    .startAt(nome)
    .once("value")
    .then((snapshot) => {
      const list = [];
      snapshot.forEach((childItem) => {
        list.push({
          key: childItem.key,
          ...childItem.val(),
          dataa: childItem.val().data,
          hora: childItem.val().hora,
        });
      });
      return list;
    });
}

export function getOcorrenciaById(key) {
  return ocorrenciasRef()
    .child(key)
    .once("value")
    .then((snapshot) =>
      snapshot.val() ? { key: snapshot.key, ...snapshot.val() } : null,
    );
}

export function createOcorrencia(data) {
  const ref = ocorrenciasRef().push();
  return ref.set(data).then(() => ref.key);
}

export function updateOcorrencia(key, data) {
  return ocorrenciasRef().child(key).set(data);
}

export function getFotoUrl(key) {
  return firebase.storage().ref("ocorrencias").child(key).getDownloadURL();
}
