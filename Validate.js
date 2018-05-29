function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("pass").value;

// todo: do zmiany na odczyt z bazy danych
// todo: hasło haszowane zamiast plain tekstu
if( username == "user" && password == "Password123"){
	alert ("login succesfull");
	//todo: logowanie
}
else{
	alert("login and/or password are incorrect");
}

}