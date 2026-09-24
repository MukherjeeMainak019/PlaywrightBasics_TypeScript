


// var localVar = "I am local";
// localVar = "I am updated";
// var localVar = "I am local1";


function logLocalVar() {
 
    if(true)
    {
        var localVar = "I am local";
        console.log(localVar);
    }
    console.log(localVar);
}

//console.log(localVar);  
// This will cause an error because localVar is not defined in this scope


