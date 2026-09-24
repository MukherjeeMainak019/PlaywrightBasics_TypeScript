function myFunction(x: any, y: any)
{
    console.log(x + y);
}

myFunction(5, 10);
myFunction("Hello, ", "World!");


//create a function with return type as any
function anotherFunction(a: any, b: any): any
{
    return a * b;
}

console.log(anotherFunction(5, 10));
console.log(anotherFunction("5", "10"));