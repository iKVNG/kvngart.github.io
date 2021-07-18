document.getElementById("submit").addEventListener("click", validateForm);
function validateForm() {
  //gets the name
  let name = document.getElementById("name").value;
  //gets the email
  let email = document.getElementById("email").value;
  //gets the message
  let message = document.getElementById("message").value;

  //checks if all fields have been filled before sending message.
  if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
    alert("all fields must be filled");
  } else {
    sendMessage(name, email, message);
  }
}

//sends information to firebase
function sendMessage(name, email, message) {
  //sends the name, email and message by passing them as url parameters
  window.location.href =
    "https://kvngart" +
    name +
    "&email=" +
    email +
    "&message=" +
    message +
    "";
}
const config = {
  apiKey: "AIzaSyBWIrwdziVJDDZIuJhd2w1LMCbU43k90lg",
  authDomain: "kvngart-13143.firebaseapp.com",
  databaseURL: "https://kvngart-13143-default-rtdb.firebaseio.com",
  projectId: "kvngart-13143",
  storageBucket: "kvngart-13143.appspot.com",
  messagingSenderId: "16542813862",
  appId: "1:16542813862:web:b19a83d6e3fa39285eee67",
  measurementId: "G-L2VN4TY7SC"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('username');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  // document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').style.visibility = 'visible';

  // Hide alert after 3 seconds
  setTimeout(function(){
    // document.querySelector('.alert').style.display = 'none';
  document.querySelector('.alert').style.visibility = 'hidden';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}
