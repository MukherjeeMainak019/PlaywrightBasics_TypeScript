//named function means function with a name
function display()
{
    console.log("Hello from named function");
}

display();

//named function with parameters types and return type
function add(a: number, b: number): number
{
    return a + b;
}

let sum = add(5, 10);


console.log("Sum:", sum);


