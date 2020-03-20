var firebaseConfig = {
  apiKey: "AIzaSyBwIT6W1Uoa2SJCdYKyuuJUScUaVyKspuw",
  authDomain: "sirjack-12f5b.firebaseapp.com",
  databaseURL: "https://sirjack-12f5b.firebaseio.com",
  projectId: "sirjack-12f5b",
  storageBucket: "sirjack-12f5b.appspot.com",
  messagingSenderId: "956951254903",
  appId: "1:956951254903:web:4acc39d9b143d9b7ee3372",
  measurementId: "G-5SVNZXLG8L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();

function login(){
  
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;
  if(userEmail != "" && userPass != ""){
    var result = firebase.auth().signInWithEmailAndPassword(userEmail, userPass);
    result.catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("Error : " + errorMessage);
      window.alert("Error : " + errorCode);

    });
    
  }else
  {
    window.alert("Form is incomplete. Please fill out all the fields.");
  }
}

function signUp(){

  var sgnEmail = document.getElementById("sgnemail").value;
  var sgnPass = document.getElementById("sgnpass").value;
 
  if(sgnEmail != "" && sgnPass != ""){
    var result =  firebase.auth().createUserWithEmailAndPassword(sgnEmail, sgnPass);
    window.alert("User created successfully.")
    result.catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("Error : " + errorMessage);
    });
  }
  else{
    window.alert("Form is incomplete. Please fill out all the fields.");
  }
}

function logout(){
  firebase.auth().signOut().then(function() {
    window.location.href = "siginsignup.html";
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : " + errorMessage);
});
}

