
//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyAhGgp6tNibY63zRs6YbFzjOoVdqFASK0M",
  authDomain: "base-de-datos-kwitter-9d0b8.firebaseapp.com",
  databaseURL: "https://base-de-datos-kwitter-9d0b8-default-rtdb.firebaseio.com",
  projectId: "base-de-datos-kwitter-9d0b8",
  storageBucket: "base-de-datos-kwitter-9d0b8.appspot.com",
  messagingSenderId: "60770449830",
  appId: "1:60770449830:web:2ec8d9ee7cb81193147767"
    };
  
firebase.initializeApp(firebaseConfig)
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";  
}
function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) {
             document.getElementById("output").innerHTML = "";
              snapshot.forEach(function(childSnapshot) {
                   childKey  = childSnapshot.key;
                    childData = childSnapshot.val();
                    if(childKey != "purpose") {
                      firebase_message_id = childKey;                      
                      message_data = childData;
                      like = message_data['like'];
                      name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                      row = name_with_tag + message_with_tag + like_button + span_with_tag;
                      document.getElementById("output").innerHTML += row;
//Termina código
      } });  }); }
getData();

function logout() {
 localStorage.removeItem("user_name");     
 localStorage.removeItem("room_name"); 
 window.location = "index.html";
}

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
