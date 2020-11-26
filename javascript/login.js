var x=document.getElementById("username")
var y=document.getElementById("password")

function validation(){
    
if(username.value!="admin" || password.value!="12345"){
    
    alert("invalid username or password");
    return false;
    
}

else {
    return true;
}
}