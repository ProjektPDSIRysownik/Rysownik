var message;
var addInfo;
var login = "kupka";

function addUserToDatabase(signName, signMail, signPass){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            alert(this.responseText);
        }
    }
    xmlhttp.open("POST", "http://localhost/serverCode/addUserToDatabase.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("login=" + signName + "&passwd=" + signPass + "&email=" + signMail);

}

function checkForLastLoggedInUser()
{
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        return myObj.status;            // nie dziala jak powinno
    }
};
xmlhttp.open("GET", "http://localhost/serverCode/checkLastLoggedInUser.php", true);
xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xmlhttp.send(); 
}

function loginUser(signName, signPass){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            var myArr = JSON.parse(this.responseText);
			login = signName;
			message = myArr.msg;
			addInfo = myArr.add_info;
			alert(message);
        }
    }
    xmlhttp.open("POST", "http://localhost/serverCode/loginUser.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("login=" + signName + "&passwd=" + signPass);
}

function addImageToDatabase(login, fileName){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
			alert(this.responseText);
        }
    }
    xmlhttp.open("POST", "http://localhost/serverCode/addImageToDatabase.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("login=" + login + "&image=" + fileName);
}

function getMsg(){
  return msg;
}

function getAddInfo(){
  return addInfo;
}

function getLogin(){
  return login;
}