// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let dataBase = firebase.firestore();

dataBase
  .collection('usuários')
  .get()
  .then((res) => {
    res.forEach((doc) => {
      let lista = doc.data();
      let tagLista = document.getElementById('lista');
      let listItem = document.createElement('li');
      listItem.append(`Item: ${lista.nome} | email:${lista.email}`);
      tagLista.appendChild(listItem);
      console.log(lista);
    });
  });

let userName = '';
document.getElementById('name').addEventListener('change', (e) => {
  userName = e.target.value;
  console.log(e.target.value);
});

function add(nome) {
  dataBase
    .collection('usuários')
    .add({
      nome: nome,
      email: 'emailaleatorio@gmail.com',
      admin: true,
    })
    .then((doc) => {
      console.log('Docmento inserido com sucessso:', doc);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

document.getElementById('btn').addEventListener('click', () => {
  add(userName);
});
