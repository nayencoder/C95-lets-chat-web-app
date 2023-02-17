var firebaseConfig = {
      apiKey: "AIzaSyCbnQvKgt2WnBNHtcwh_zS_RJ23e5wD9_I",
      authDomain: "kwitter-760b7.firebaseapp.com",
      databaseURL: "https://kwitter-760b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-760b7",
      storageBucket: "kwitter-760b7.appspot.com",
      messagingSenderId: "800015574775",
      appId: "1:800015574775:web:35108ebd91219487f6d5f2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({

      purpose : "adding room name"

});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id) ' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

function redirectToRoomName(name)
{

      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";

}

function logout()
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}






