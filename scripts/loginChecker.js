


function loginChecker() {
	var login_user = document.getElementById('username').value;
	var login_password = document.getElementById('password').value;

	for (z in user_array){
		if (user_array[z].username == login_user){
<<<<<<< HEAD
			if(user_array[z].password == login_password){
				//alert('Great job hon')
				//window.location.pathname='C:/Users/Audrey/Documents/GitHub/7P1A/website.html'
				redirectTo('./website.html')
=======
			if(user_array[z].password == login_password) {
				window.top.location = "./website.html";
			}

>>>>>>> 5fa9039a04efdf6e91d56d4b8db42debc3dfda99
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