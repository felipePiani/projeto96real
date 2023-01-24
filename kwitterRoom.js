// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVFOuLWdQbraRexwAsDmAqQ2HpfK5FD7I",
  authDomain: "bwitter-db8f6.firebaseapp.com",
  databaseURL: "https://bwitter-db8f6-default-rtdb.firebaseio.com",
  projectId: "bwitter-db8f6",
  storageBucket: "bwitter-db8f6.appspot.com",
  messagingSenderId: "200488036556",
  appId: "1:200488036556:web:e3c7e12a1ff705a18e3a69"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem vindo(a)" + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionar sala"
  });
  localStorage.setItem("room_name", "room_name");
  window.location = "KwitterPage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData()
function redirectToRoomName() {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "KwitterPage.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}