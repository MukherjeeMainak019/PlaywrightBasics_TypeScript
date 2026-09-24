// ===== CALLBACK FUNCTION EXPLANATION =====
// A callback function is a function passed as an argument to another function
// The receiving function will "call back" (invoke) the passed function at some point

// Example 1: Simple Callback Function
// ====================================

// Step 1: Define a callback function that will be called later
function greet(name: any): void {
  console.log(`Hello, ${name}!`);
}

// Step 2: Define a function that accepts a callback function as parameter
function processUserName(name: any, callback: any): void {
  // This function does some processing
  console.log(`Processing name: ${name}`);
  
  // Then it calls the callback function, passing the name as argument
  callback(name);
}

// Step 3: Call the function and pass the callback function as argument
processUserName('John', greet); // Output: Processing name: John
                                // Output: Hello, John!


// Example 2: Callback with Arrow Function
// ==========================================

// Define a function that takes a callback
function multiply(a: any, b: any, callback: any): void {
  // Calculate the result
  const result = a * b;
  
  // Call the callback function with the result
  callback(result);
}

// Call the function with an arrow function as callback
multiply(5, 3, (result: any) => {
  console.log(`Result of 5 * 3 = ${result}`);
}); // Output: Result of 5 * 3 = 15


// Example 3: Callback with setTimeout (Asynchronous Operation)
// ==============================================================

// Define a callback function that will be executed after a delay
function displayMessage(message: any): void {
  console.log(`Message: ${message}`);
}

// Use setTimeout - it executes the callback after 2000 milliseconds (2 seconds)
setTimeout(() => {
  displayMessage('This message appears after 2 seconds');
}, 2000);

// This will print first because setTimeout is asynchronous
console.log('This prints immediately');


// Example 4: Callback with Data Processing
// ===========================================

// Define a callback function to handle the processed data
function processSuccess(data: any): void {
  console.log(`Successfully processed: ${data}`);
}

// Define another callback function to handle errors
function processError(error: any): void {
  console.log(`Error occurred: ${error}`);
}

// Function that simulates data fetching and uses callbacks
function fetchData(shouldSucceed: any, onSuccess: any, onFailure: any): void {
  console.log('Fetching data...');
  
  // Simulate some processing
  if (shouldSucceed) {
    // If successful, call the success callback
    onSuccess('User data loaded successfully');
  } else {
    // If failed, call the error callback
    onFailure('Failed to fetch data');
  }
}

// Call the function with both success and error callbacks
fetchData(true, processSuccess, processError);   // Output: Fetching data...
                                                 // Output: Successfully processed: User data loaded successfully

fetchData(false, processSuccess, processError);  // Output: Fetching data...
                                                 // Output: Error occurred: Failed to fetch data


// Example 5: Real World Callback - Array Methods
// ================================================

// The forEach, map, filter methods all use callbacks internally

const numbers: any[] = [1, 2, 3, 4, 5];

// forEach uses a callback function for each element
console.log('\n=== Using forEach with callback ===');
numbers.forEach((number: any) => {
  console.log(`Number: ${number}`);
});

// map uses a callback to transform each element
console.log('\n=== Using map with callback ===');
const doubled = numbers.map((number: any) => {
  return number * 2;
});
console.log(`Doubled numbers: ${doubled}`);

// filter uses a callback to test elements
console.log('\n=== Using filter with callback ===');
const evenNumbers = numbers.filter((number: any) => {
  return number % 2 === 0;
});
console.log(`Even numbers: ${evenNumbers}`);
