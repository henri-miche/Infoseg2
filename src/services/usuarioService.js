import firebase from '../connection/FirebaseConection';

function usuariosRef() {
  return firebase.database().ref('usuarios');
}

export function getByUid(uid) {
  return usuariosRef()
    .child(uid)
    .once('value')
    .then((snapshot) => snapshot.val());
}

export function setUsuario(uid, data) {
  return usuariosRef().child(uid).set(data);
}

export function searchByNome(nome) {
  return usuariosRef()
    .orderByChild('nome')
    .startAt(nome)
    .once('value')
    .then((snapshot) => {
      const list = [];
      snapshot.forEach((child) => {
        list.push({ key: child.key, ...child.val() });
      });
      return list;
    });
}
