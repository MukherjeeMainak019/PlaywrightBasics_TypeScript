import { User } from "./User";

class Login {


    login() {

        const user = new User();

        console.log("Username: " + User.getUserName());
        console.log("Role: " + user.getUserRole());
    }
}

const login = new Login();

login.login();


//Here we didn't use inheritance.
//Instead, we simply imported the User class:
//Then we used its methods


//Example usage of the imported User class without inheritance.
// import { LoginPage } from "./LoginPage";
// import { ApiClient } from "./ApiClient";
// import { Database } from "./Database";

//TypeScript absolutely supports OOP—classes, inheritance, polymorphism, 
// encapsulation, etc. The point is not that TypeScript doesn't use OOP; rather, 
// TypeScript also has a strong module system, and you don't need inheritance just 
// to reuse functionality across files.