function validateLogin(){
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

function validateSignUp(){
	var signName = document.getElementById("signName");
	var signMail = document.getElementById("signMail");
	var signPass = document.getElementById("signPass");
	var signPassRepeat = document.getElementById("signPassRepeat");

	//todo : sprawdzic czy username i email istnieje w bazie
	
	if(signName.value.length <=4){
		alert("Username must be at least 5 characters long");
		return 0;
	}
	if(!mailCheck(signMail.value)){
		alert("Email adress is not correct");
		return 0;
	}

	if(signPass.value != signPassRepeat.value){
		alert("passwords are not same");
		return 0;
	}
	if(passwordCheck(signPass)){
		//todo: dodac usera do bazy
		alert("registration succesfull");
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
		alert("password need to have at least 1 lower case letter");
		return 0;
	}
	if(!password.value.match(upperCase)){
		alert("password need to have at least 1 upper case letter");
		return 0;
	}
	if(!password.value.match(numbers)){
		alert("password need to have at least 1 number");
		return 0;	
	}
	if(!(password.value.length >= 8)){
		alert("password need to be at least 8 characters long");
		return 0;	
	}
	return 1;

}