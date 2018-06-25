function validateLogin(){
var username = document.getElementById("username").value;
var password = document.getElementById("pass").value;

//checkIfUserIsAlreadyInDatabase(username, password);
// todo: do zmiany na odczyt z bazy danych
// todo: hasło haszowane zamiast plain tekstu
if( username == "user" && password == "Password123"){
	alert ("Login successful!");
	//todo: logowanie
}
else{
	alert("Login and/or password are not valid.");
}

}

function validateSignUp(){
	var signName = document.getElementById("signName");
	var signMail = document.getElementById("signMail");
	var signPass = document.getElementById("signPass");
	var signPassRepeat = document.getElementById("signPassRepeat");

	//todo : sprawdzic czy username i email istnieje w bazie
	
	if(signName.value.length <=4){
		alert("Username must be at least five characters long.");
		return 0;
	}
	if(!mailCheck(signMail.value)){
		alert("Email address is not correct. Please try again");
		return 0;
	}

	if(signPass.value != signPassRepeat.value){
		alert("Passwords do not match. Please try again.");
		return 0;
	}
	if(passwordCheck(signPass)){
		addUserToDatabase(signName.value, signMail.value, signPass.value);
		// tutaj zrobic weryfikacje czy wszystko poszlo dobrze
		/*
		if(addStatus == "OK")
		{
			alert("Registration successful!");
		}
		else
		{
			alert("Registration error.");
		}
		*/
	}
}

function mailCheck(mail){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(mail).toLowerCase());
}

function passwordCheck(password){
	var lowerCase = /[a-z]/g;
	var upperCase = /[A-Z]/g;
	var numbers = /[0-9]/g;

	if(!password.value.match(lowerCase)){
		alert("Password needs to have at least one lower-case letter.");
		return 0;
	}
	if(!password.value.match(upperCase)){
		alert("Password needs to have at least one upper-case letter.");
		return 0;
	}
	if(!password.value.match(numbers)){
		alert("Password needs to have at least one numeric character.");
		return 0;	
	}
	if(!(password.value.length >= 8)){
		alert("Password needs to be at least 8 characters long.");
		return 0;	
	}
	return 1;

}