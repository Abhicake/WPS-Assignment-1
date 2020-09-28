function checkLogin(){
    var user = document.getElementById('inputEmail').value
    var passwd = document.getElementById('inputPassword').value;

    if(window.localStorage.getItem(user)){
        person = JSON.parse(window.localStorage.getItem(user));
        if(person.password == passwd){
            var path = window.location.href;
            var page = "http://"+path.split("/")[2];
            if(person.type == '1')  page += "/StudPage";
            else  page+= "/TeachPage";
            window.location.replace(page);
        }
        else{
            document.getElementById('oops').hidden = false;
        }
    }
    else{
        document.getElementById('oops').hidden = false;
    }
}