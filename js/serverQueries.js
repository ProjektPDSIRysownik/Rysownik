function addUserToDatabase(signName, signMail, signPass) {
    var xmlhttp = new XMLHttpRequest();
    var addUserStatus = "NO";
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        addUserStatus = this.responseText;
        return addUserStatus;
      }
    };
    xmlhttp.open("POST", "http://localhost/serverCode/addUserToDatabase.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("login='" + signName + "'&passwd='" + signPass + "'&email='" + signMail +"'");
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