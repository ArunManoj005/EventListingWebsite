function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="anoop"&&password=="berly")
    {
        window.location.assign("homepg.html");
        alert("login successful");
        return false;
    }
    else{
        alert("login failed");
    }

}