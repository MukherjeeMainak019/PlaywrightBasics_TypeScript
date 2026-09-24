

//Annonymous function means function without name.
let msg = function() {
    console.log("Hello from annonymous function");
};

msg(); // invoking the annonymous function by variable name.

//Annonymous function with parameters types and return type
let multiply = function(x: number, y: number): number {
    return x * y;
};
multiply(4, 5);

let product = multiply(4, 5);
console.log("Product:", product);