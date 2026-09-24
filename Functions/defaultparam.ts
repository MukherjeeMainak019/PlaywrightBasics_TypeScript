function greet2(name: string, greeting: string = "Hello"): string {
   
    //return `${greeting}, ${name}!`;

    return `${greeting} + ${name}!`; // Corrected the return statement
}

greet2("Alice"); // Output: Hello, Alice!


greet2("Bob", "Hi"); // Output: Hi, Bob!

//In the above example, the parameter greeting has a default value of "Hello". 
//If no value is provided for greeting when calling greet2, it defaults to "Hello".

function sum(a: number, b: number = 8): number 
{
    return a + b;
}
console.log(sum(5, 10)); // Output: 15

console.log(sum(5)); // Output: 13

// sum()


function sub(a: number, b: number): number 
{
    return a - b;
}

// sub()

//in mathematics calculations, 
// default parameters can be useful when you want to provide a default value for an argument if it is not supplied by the caller.