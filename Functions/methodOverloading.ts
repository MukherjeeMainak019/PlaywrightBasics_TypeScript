// Below is the easy version of method overloading in TypeScript

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

// add three different types of parameters
function add(a: number, b: number, c: number): number;
function add(a: String, b: String): string;
function add(a: number, b: number, c?: number): number;
function add(a: string, b: string, c?: string): string;
function add(a: any, b: any, c?: any): any {
    return a + b;
}

// Usage examples:
console.log(add(5, 10));          // Output: 15
console.log(add("Hello, ", "World!")); // Output: "Hello, World!"
console.log(add(5, " apples"));   // Output: "5 apples"
console.log(add("I have ", 3));   // Output: "I have 3"



/*Even though:

The number of parameters is different

The parameter types are different

TypeScript still throws:

Duplicate function implementation 

Why this error is thrown
1. TypeScript compiles to JavaScript

JavaScript does not support function overloading.

In JavaScript, this:
function display(a, b) {}
function display(a) {}

is equivalent to:
function display(a) {}

The last function definition overwrites the previous one at runtime.

TypeScript prevents this ambiguity at compile time, hence the error.

Step 1: Declare overload signatures (no function body)
Step 2: Provide a single implementation */


//overload method function display
function display(a: string): void;
function display(a: any, b?: any): void {
    if (b !== undefined) {
        console.log("Display function called with parameters: ", a, b);
    } else {
        console.log("Display function called with parameter: ", a);
    }
}

//it goes to the fundamental design principle behind TypeScript overloads.
//TypeScript allows more parameters in the implementation, but not fewer, because extra parameters can be ignored at runtime, 
//while missing parameters cannot be invented.


//Case 1: Implementation has FEWER parameters → ❌ Error

function errDisplay(a: number): void {
    console.log(a);
}
function errDisplay(a: string, b: string): void
{
    console.log(a);
}
function errDisplay(a: number, b: number): void
{
    console.log(a);
}

//Why this fails : Valid overload calls include:
display("x", "y");
display(1, 2);
//At runtime, JavaScript will call:
display("x", "y");

//But your implementation only declares:
//function display(a: number) 

/*There is:

No guarantee that b exists

No handling for string values

No safe execution path

This is unsound and therefore rejected. */


//Case 2: Implementation has MORE parameters → ✅ Allowed

function successfulDisplay(a: string, b: string): void;
function successfulDisplay(a: number, b: number): void;
function successfulDisplay(a: string | number, b: string | number, c?: boolean): void {
    console.log(a, b, c);
}

/* JavaScript behavior:

c becomes undefined

No runtime failure

Safe execution

➡️ Extra parameters are harmless in JavaScript */