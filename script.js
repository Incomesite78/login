const firebaseConfig = {
  apiKey: "AIzaSyAPjB42d7Li4A1HFdSysfJuBBayiy3PRW8",
  authDomain: "myfrist-d460b.firebaseapp.com",
  projectId: "myfrist-d460b",
  storageBucket: "myfrist-d460b.appspot.com",
  messagingSenderId: "912538847762",
  appId: "1:912538847762:web:a93579282f64fc416166cb",
  measurementId: "G-W2PF0S34LJ"
};
firebase.initializeApp(firebaseConfig);


















let sin = document.getElementById("sin");
let login = document.getElementById("log");

let slab = document.getElementById("sign");
let llab = document.getElementById("login");

 function sty(){
   login.style.transform = 'translateY(-500px)';
   slab.style.transform = 'scale(.6)';
   llab.style.transform = 'scale(.8)';
 }
 function sty2(){
   login.style.transform = 'translateY(-180px)';
   slab.style.transform = 'scale(.8)';
   llab.style.transform = 'scale(.6)';
 }
 
 let susername = document.getElementsByName("txt")[0];
 let lusername = document.getElementsByName("txxt")[0];
 
 let spassword = document.getElementsByName("pass")[0];
  let lpassword = document.getElementsByName("passs")[0];
  
  let email = document.getElementsByName("email")[0]; 
  
   
 
 function ck(){
   if (susername.value == "") {
     showPopup();
     showsms("Enter your Name");
   }
   
  else if (email.value == "")  {
     showPopup();
     showsms("Enter your Email");
   }
   else if (spassword.value == "") {
     showPopup();
     showsms("Enter your password");
   }
  else{
    sty();
    firebase.database().ref("/").child(susername.value).update({
      name : susername.value,
      password : spassword.value,
      email : email.value
      
    })
    
  }
   
 }
 function ck2(){
   if (lusername.value == "") {
     showPopup();
     showsms("Enter your Name");
   }
   
  else if (lpassword.value == "") {
     showPopup();
     showsms("Enter your Password");
   }
   else{
     
   }
   
  
 }
var showPopup =  function() {
            document.getElementById("popup").style.display = "block";
        }

function hidePopup() {
            document.getElementById("popup").style.display = "none";
}
function showsms(masss){
    let mass = document.getElementById("popupmass").innerHTML = masss;
  }