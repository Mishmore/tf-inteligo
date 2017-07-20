var config = {
  apiKey: "AIzaSyBau2K-1u9t_t9m9HTwk69rG0bTaS9lsWY",
  authDomain: "prueba-7ce7e.firebaseapp.com",
  databaseURL: "https://prueba-7ce7e.firebaseio.com",
  projectId: "prueba-7ce7e",
  storageBucket: "prueba-7ce7e.appspot.com",
  messagingSenderId: "1027468621449"
};
firebase.initializeApp(config);
var holaMundo = document.getElementById('holaMundo');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => holaMundo.innerText = snap.val() );

console.log('hola');
