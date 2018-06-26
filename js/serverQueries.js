var message;
var addInfo;
var login;
var userImages;
var lastUserStatus;
var currLogInUserName;

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

function addUserToSession(signName){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            currLogInUserName = signName;
        }
    }
    xmlhttp.open("POST", "http://localhost/serverCode/operateCurrentSession.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("login=" + signName);

}

function logOutFromSession(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            currLogInUserName = none;
        }
    }
    xmlhttp.open("POST", "http://localhost/serverCode/removeSession.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send();

}

function checkForLastLoggedInUser(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            var myArr = JSON.parse(this.responseText);
			lastUserStatus = myArr.msg;
        }
    }
    xmlhttp.open("POST", "http://localhost/serverCode/checkLastLoggedInUser.php", false);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("login=" + signName + "&passwd=" + signPass);
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
    xmlhttp.open("POST", "http://localhost/serverCode/loginUser.php", false);
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

function getImagesFromDatabase(login){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
			var myArr = JSON.parse(this.responseText);
			message = myArr.msg;
			userImages = myArr.add_info;
			alert(message);
        }
    }
    xmlhttp.open("POST", "http://localhost/serverCode/getImages.php", false);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("login=" + login );
}

function getMsg(){
  return message;
}

function getAddInfo(){
  return addInfo;
}

function getLogin(){
  return login;
}

function getUserImages(){
  return userImages;
}

function getLoginStatus()
{
    return lastUserStatus;
}

function getLastLoginUserName()
{
    return currLogInUserName;
}