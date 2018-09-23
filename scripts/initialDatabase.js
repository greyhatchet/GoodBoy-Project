
// Initialize User Object Array
var user_array = []; 

// Function to check username does not already exist

function append_account(user,uname,pw){
	var j;
	while(j < user_array.length)  {
		if (uname == user_array[j].username){
			var new_name  = window.prompt('Username already in use.','username');
			uname = new_name;
			j = 0;
		}
		j += 1;
	}

	user.username = uname;
	user.password = pw;
	user.member_level = 1;
	user_array.push(user);
	console.log(user_array);
	return

};

// Class containing User information, initialized as guest
class user_pass_data { 
	constructor(username = 'Guest', password = 'password',member_level = 0){
		this.username= username,
		this.password= password,
		this.member_level= member_level;
	}
};

// Create Accounts and populate array
var group_accounts = ['Tyson','SoccerRules','alyssalovespuppies','alyssa','audrey','potato','nick','A','terry','deep-fried','grey','withane','puppyhater6969','daniel','garrett','FUCKJAVASCRIPT'];
var i;

for (i=0; i < group_accounts.length; i ++) {
	if (i % 2 == 0){
		var user = new user_pass_data;
	append_account(user,group_accounts[i],group_accounts[i+1]);
	}
}
var user = new user_pass_data;
append_account(user,'Tyson','cool');


