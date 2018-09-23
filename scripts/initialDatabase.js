
// Initialize User Object Array
var user_array = []; 

// Function to check username does not already exist
function database_check(user){
    return (!user_array.includes(user))
}    

// Class containing User information, initialized as guest
class user_pass_data { 
	constructor(){
		this.username= "Guest",
		this.password= "password",
		this.member_level= 0;
	}

	create_account(user,password) {
		if(database_check(user)){
             this.username = user;
             this.password = password;
             this.member_level = 1;
             
            
             return (true)
         }
     }
};

// Create Accounts and populate array
var user = new user_pass_data;

if(user.create_account('Tyson','SoccerRules')){
	user_array.push(user)
} else{
	console.log("Username already in use. Select a unique one")
}
console.log(user_array)
