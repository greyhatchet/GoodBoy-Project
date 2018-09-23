
//const xhr = new XMLHttpRequest();
//xhr.onreadystatechange = function (){
//    if (xhr.readyState ==4){
//        if (xhr.status == 200){
//            console.log(xhr.responseText);
//        }
//        
//        if (xhr.status == 404) {
//            console.log('File or resource not found');
//        }
//    }
//};
//
//xhr.open('get','text.txt',true);
//xhr.send();

function database_check(user){
    return (!user_array.includes(user))
}    
    
var user_array = [];

class user_pass_data {
    constructor(){
        this.username= "Guest",
        this.password= "password",
        this.member_level= 0;
    }

    
    create_account(user, password) {
         if(database_check(user)){
             this.username = user;
             this.password = password;
             this.member_level = 1;
             user_array.push(this.username)
            
             return ("User " + this.username + "'s account successfully created")
         }
         return("Username already in use. Select a unique one")
     }
};
    
//     change_password(user,oldpass,newpass) {
//         if(this.username == user && this.password == oldpass){
//            this.password = newpass;
//             return (this.username + " has successfully changed password to " + " \"" + this.password + '"')}
//        return
//     }
// };

// On Page load

// create new guest user
var user = new user_pass_data;
console.log(user);
user.create_account("Daniel","Cutie");
console.log(user);
console.log(user_array);


// user.create_account("Yaboi","Cool")
// var user = new user_pass_data
// user.create_account("Tyson","Swag")
// document.getElementById("demo").innerHTML = user.create_account("Tyson","pw");
// document.write(user_array)