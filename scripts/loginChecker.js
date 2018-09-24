// Set two variables, username and password


function loginChecker() {
	var login_user = document.getElementById('username').value;
	var login_password = document.getElementById('password').value;

	for (z in user_array){
		if (user_array[z].username == login_user){
			if(user_array[z].password == login_password){
				//alert('Great job hon')
				//window.location.pathname='C:/Users/Audrey/Documents/GitHub/7P1A/website.html'
				redirectTo('./website.html')
			}
		}
	}
	return false
}

function redirectTo(filename) {
	link = document.getElementById('redirect')
	link.href=filename
	link.click()
}