let username = document.getElementById("user1");
let error = document.getElementById("demo");

function valid(){
  if(username.value==""){
    alert("Fields cannot be empty");
    return false;
  }
  else if(username.value=="admin")
    {
      error.style.color="green";
      error.innerHTML="*written succesfully*";
      return true;
  }
  else {
    error.style.color="red";
    error.innerHTML="*enter username as admin*";
    return false;
  }
}
let password=document.getElementById("pass1");
let p1=document.getElementById("demo1");
function pswrd(){
  if(password.value==""){
    alert("Fields cannot be empty");
    return false;
  }
  else if(password.value=="12345"){
    p1.style.color="green";
    p1.innerHTML="*written successfully*";
    return true;
  }
  else{
    p1.style.color="red";
    p1.innerHTML="*enter password as 12345*";
    return false;
  }
}