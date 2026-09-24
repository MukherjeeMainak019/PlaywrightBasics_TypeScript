

 let localVar = "I am local";
 localVar = "I am updated"; // reassigning the value of localVar

// let localVar = "I am local";

function someFunction() {
 
    if(true)
    {
        let localVar = "I am local";
        console.log(localVar);
    }
    //console.log(localVar); 
    // // This will cause an error because localVar is not defined in this scope
}

//console.log(localVar);  
// This will also cause an error because localVar is not defined in this scope