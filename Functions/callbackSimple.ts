// ===== SIMPLE CALLBACK FUNCTION EXAMPLE =====

// Step 1: Create a callback function
// This function will be passed to another function and called later

function sayHello(name: any): void {
  console.log(`Hello, ${name}!`);
}

function sayHi(name: any): void {
  console.log(`Hi, ${name}!`);
}

// Step 2: Create a function that accepts a callback function as a parameter
function greetUser(userName: any, sayHello: any, sayHi: any): void {
  // Print a message first
  console.log('About to call the callback function...');
  
  // Call the callback function and pass userName to it
  sayHello(userName);
  sayHi(userName);
  
  // Print a message after callback is executed
  console.log('Callback function has been executed!');
}

// Step 3: Call the greetUser function and pass sayHello as the callback
greetUser('Alice', sayHello, sayHi);
greetUser('Alice', sayHi, sayHello);

// Output:
// About to call the callback function...
// Hello, Alice!
// Callback function has been executed!
