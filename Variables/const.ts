
const x = 100;
//const y; // Error: 'y' is declared but its value is never read.

//const localVar = "I am local";
function someFunction() {
 
    
    if(true)
    {
        const localVar = "I am local";
        console.log(localVar);
    }
   //console.log(localVar); 
   // This will cause an error because localVar is not defined in this scope
}

 //console.log(localVar);  
 // This will cause an error because localVar is not defined in this scope


var a = 1;
var a = 2; // No error – dangerous

// console.log(b); // undefined (not error)
var b = 5;

let c = 1;
//let c = 2; // Error: Cannot redeclare block-scoped variable 'c'.
c = 5; // Error: Cannot assign to 'c' because it is a constant or a read-only property.

/*let
When to use
When the variable needs to change
Typical use cases:
Loop counters
Conditional reassignment
Temporary values */


let count = 1;
count = 2; // Allowed

/*const
When to use
Default choice
When the variable should not be reassigned
Improves readability, safety, and intent */

const PI = 3.14;
//PI = 3.15; ❌ Error

if(true)
{
    //PI = 3.15; ❌ Error
    const PI = 3.15;
}

//Objects and Arrays
const user = { name: "Mainak" };
user.name = "Rahul"; // ✅ Allowed

const nums = [1, 2, 3];
nums.push(4); // ✅ Allowed

//best practice:

//const → configuration values

//let → loop counters or mutable state

//var → ❌ not used

