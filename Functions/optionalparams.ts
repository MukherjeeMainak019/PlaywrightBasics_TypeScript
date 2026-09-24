function greet1(name: string, greeting?: string): string {
   
    return `${greeting}, ${name}!`;
}

greet1("Alice", "Hello"); // Output: Hello, Alice!
greet1("Bob"); // Output: undefined, Bob!

//Error
//greet ("Bob", "Hi", "Hello"); // Error: Expected 1-2 arguments, but got 3.

//Default Parameters in TypeScript

//Below function takes two parameters

function greet(name: string, greeting: string): string {
   
    return `${greeting}, ${name}!`;
}

greet("Alice", "Hello"); // Output: Hello, Alice!

//Error
//greet ("Bob"); // Error: Expected 2 arguments, but got 1.
//greet ("Bob", "Hi", "Hello"); // Error: Expected 2 arguments, but got 3.

