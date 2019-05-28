function loginClick(){
    document.getElementById('searchForm').style.display = 'block'
}

function ValidateLogin(){
    usrname = document.getElementById('email').value;
    password = document.getElementById('pwd').value;

    if (usrname == "admin@abc.com" && password == "12345"){
        return true;
    }

    document.getElementById('errorMsg').innerHTML = "Enter a valid username and password";
    return false;
}