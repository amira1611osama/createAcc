function validate(){
    user= document.getElementById("user").value;
    email= document.getElementById("email").value;
    password= document.getElementById("password").value;
    confirmPass= document.getElementById("confirm").value;
    result=document.getElementById("result");
    console.log(user)

    result.style.transition="all 1s linear"
    result.setAttribute("class","alert alert-danger text-center p-3")

if (user =="" && email=="" && password=="" && confirmPass=="") {
    result.innerHTML ="Enter Data in form"
    return false;
}
else if(user.length<5 || user.length>15){
    result.innerHTML ="Enter 6-15 characher in user-name in form"
    return false;
}
else if(email.indexOf("@") ==-1){
    result.innerHTML ="Enter valid email"
    return false;
}
else if(password < 8){
    result.innerHTML ="Enter at lest 8 characher in password"
    return false;
}
else if(password != confirmPass){
    result.innerHTML ="Match Password"
    return false;
}
}