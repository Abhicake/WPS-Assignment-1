var path = window.location.href;
var page = "http://"+path.split("/")[2];

function SignUp(){
    var user = document.getElementById('name').value;
    var passwd = document.getElementById('passwd').value;
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
        userExist.innerHTML="Success! <button type=\"button\" onclick=\"takeToLogin()\">Login</button>";
        userExist.hidden = false;

    }
    
}

function takeToLogin(){
    page+="/Login"
    window.location.replace(page);    
}