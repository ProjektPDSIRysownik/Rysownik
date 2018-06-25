function addUserToDatabase(signName, signMail, signPass) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost/serverCode/addUserToDatabase.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("login='" + signName + "'&passwd='" + signPass + "'&email='" + signMail +"'");
}

function verifyUserLogin(name, password){
	var xhttp = new XMLHttpRequest();
	if(this.readyState == 4 && this.status == 200){
		alert(this.responseText);
	}
	xhttp.open("POST", "http://localhost/serverCode/validateUser.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("login='" + signName + "'&passwd='" + signPass + "'");

    return xhttp.responseText;

}