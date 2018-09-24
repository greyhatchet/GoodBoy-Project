// function to sign up new users and push object onto user array

function signUp() {
	var new_user = document.getElementById('username').value;
	var new_password = document.getElementById('password').value;
	var user = new user_pass_data (new_user,new_password,1);
	user_array.push(user);
<<<<<<< HEAD
	window.location.assign("website_outline.html");
	redirectTo('./website.html')
=======
	alert();
	window.top.location"./website.html";
>>>>>>> 5fa9039a04efdf6e91d56d4b8db42debc3dfda99
}