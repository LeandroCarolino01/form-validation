function checkForm(form)
{
	var errors=[];
	//validate fails if the input is blank
	//regular expression to match only alphanumeric characters and spaces
	var re = /^[\w ]+$/;
	if(form.inputfield.value == "") {
		errors.push("Input is empty");
	}else if(!re.test(form.inputfield.value)) {
		errors.push("Input contains invalid characters");
	}
	

	// validation fails if the input doesn`t match our regular expression
	if(form.password1.value == "") {
		errors.push("password is empty");
	} else if(form.password1.value != form.password2.value) {
		errors.push("Passwords don`t match");
	}

	if (errors.length > 0) {
		var msg = "ERRORS: \n\n";
		for (var i=0; i<errors.length; i++) {
			msg+=errors[i] + "\n";
		}
		alert(msg)
		return false;
	}

	
	return true;
}