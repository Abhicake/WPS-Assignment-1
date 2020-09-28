var path = window.location.href;
var page = "http://"+path.split("/")[2];

function SignUp(){
    var user = document.getElementById('inputEmail').value;
    var passwd = document.getElementById('inputPassword').value;
    var stud_or_teach = document.getElementById('stud').checked ? '1' : '2';
    
    if(window.localStorage.getItem(user)){
        document.getElementById('user-exist').hidden = false;
    }
    
    else{
        const person = {
            name: user,
            password: passwd,
            type : stud_or_teach,
        }
        window.localStorage.setItem(user,JSON.stringify(person));
        var userExist = document.getElementById('user-exist');
        userExist.className = "alert alert-success"
        userExist.innerHTML="Success! <button class=\"btn btn-primary\" type=\"button\" onclick=\"takeToLogin()\">Login</button>";
        userExist.hidden = false;

    }
    
}

function takeToLogin(){
    window.location.replace(page);    
}