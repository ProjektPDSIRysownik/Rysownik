function addUserToDatabase(signName, signPass, signMail) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost/serverCode/addUserToDatabase.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("login='" + signName + "'&passwd='" + signPass + + "'&email='" + signMail +"'");
}