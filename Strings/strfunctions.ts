//Different ways to declare strings in TypeScript
let singleQuoteString: string = 'This is a string with single quotes'; 
let doubleQuoteString: string = "This is a string with double quotes";
let backtickString: string = `This is a string with backticks`;
 
//using var keyword
var varString: string = "This string is declared using var";

//using const keyword
const constString: string = "This string is declared using const";

//String interpolation using template literals
//interpolation means embedding expressions within a string using `${expression}` syntax
let userName: string = 'John';
let greeting: string = `Hello, ${userName}! Welcome to TypeScript.`; // interpolation happens here
//why the following two lines do not perform interpolation
// Because string interpolation only works with template literals (backticks), 
// not with single or double quotes.
let greeting1: string = "Hello, ${userName}! Welcome to TypeScript."; // No interpolation here
let greeting2: string = 'Hello, ${userName}! Welcome to TypeScript.'; // No interpolation here

//String interpolation using template literals uisng var keyword
var varUserName: string = 'Jane';
var varGreeting: string = `Hello, ${varUserName}! Welcome to TypeScript.`;


//String methods examples
let sampleString: string = "  Hello, TypeScript!  ";

console.log(sampleString.length); // Length of the string
console.log(sampleString.toUpperCase()); // Convert to uppercase
console.log(sampleString.toLowerCase()); // Convert to lowercase
console.log(sampleString.trim()); // Remove whitespace from both ends
console.log(sampleString.includes("TypeScript")); // Check if substring exists
console.log(sampleString.replace("TypeScript", "JavaScript")); // Replace substring
console.log(sampleString.split(", ")); // Split string into an array

//Using string methods with var keyword
var varSampleString: string = "  Hello, World!  ";

console.log(varSampleString.length); // Length of the string
console.log(varSampleString.toUpperCase()); // Convert to uppercase
console.log(varSampleString.toLowerCase()); // Convert to lowercase
console.log(varSampleString.trim()); // Remove whitespace from both ends
console.log(varSampleString.includes("World")); // Check if substring exists
console.log(varSampleString.replace("World", "TypeScript")); // Replace substring
console.log(varSampleString.split(", ")); // Split string into an array

//charAt method example
let charExample: string = "TypeScript";
console.log(charExample.charAt(4)); // Output: S

//charAt method example using var keyword
var varCharExample: string = "JavaScript";
console.log(varCharExample.charAt(4)); // Output: S

//indexOf method example
let indexExample: string = "Hello, TypeScript!";
console.log(indexExample.indexOf("Type")); // Output: 7

//indexOf method example using var keyword
var varIndexExample: string = "Hello, JavaScript!";
console.log(varIndexExample.indexOf("Java")); // Output: 7

//substring method example
let substringExample: string = "TypeScript";
console.log(substringExample.substring(0, 4)); // Output: Type

//substring method example using var keyword
var varSubstringExample: string = "JavaScript";
console.log(varSubstringExample.substring(0, 4)); // Output: Java

//concat method example
let concatExample: string = "Hello, ".concat("TypeScript!");
console.log(concatExample); // Output: Hello, TypeScript!

//concat method example using var keyword
var varConcatExample: string = "Hello, ".concat("JavaScript!");
console.log(varConcatExample); // Output: Hello, JavaScript!

//repeat method example
let repeatExample: string = "Hi! ";
console.log(repeatExample.repeat(3)); // Output: Hi! Hi! Hi!

//repeat method example using var keyword
var varRepeatExample: string = "Hey! ";
console.log(varRepeatExample.repeat(2)); // Output: Hey! Hey!

//replaceAll method example
let replaceAllExample: string = "foo bar foo";
console.log(replaceAllExample.replaceAll("foo", "baz")); // Output: baz bar baz

//replaceAll method example using var keyword
var varReplaceAllExample: string = "hello world hello";
console.log(varReplaceAllExample.replaceAll("hello", "hi")); // Output: hi world hi  

//replace method with new characters using var keyword
var varSampleString2: string = "  Hello, Universe!  ";
console.log(varSampleString2.replace("Universe", "TypeScript")); // Replace substring   

var varSampleString2: string = "  Hello, Universe!, Universe ";
console.log(varSampleString2.replace("Universe", "TypeScript")); 
// output: "  Hello, TypeScript!, Universe "

// Demonstrating immutability of strings
let immutableString: string = "Immutable";
immutableString.toUpperCase();
console.log(immutableString); // Output: Immutable

// Demonstrating immutability of strings using var keyword
var ImmutableString: string = "Constant";
ImmutableString.toLowerCase();
console.log(ImmutableString); // Output: Constant

// immutable means unchangeable or unmodifiable. 
// In TypeScript (and JavaScript), strings are immutable, which means that once a string is created, it cannot be changed. 
// Any operation that seems to modify a string actually creates a new string instead.


//split method example with var keyword
var varSplitExample: string = "apple,banana,cherry";
console.log(varSplitExample.split(",")); // Output: [ 'apple', 'banana', 'cherry' ]

// Demonstrating string interpolation with expressions
let a: number = 5;
let b: number = 10;
let expressionString: string = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(expressionString); // Output: The sum of 5 and 10 is 15.


//trimStart and trimEnd method examples
let trimExample: string = "   Hello, TypeScript!   ";
console.log(trimExample.trimStart()); // Output: "Hello, TypeScript!   "
console.log(trimExample.trimEnd());   // Output: "   Hello, TypeScript!"

//trimright and trimleft method examples using var keyword
var varTrimExample: string = "   Hello, JavaScript!   ";
console.log(varTrimExample.trimLeft()); // Output: "Hello, JavaScript!   "
console.log(varTrimExample.trimRight());   // Output: "   Hello, JavaScript!"

// Demonstrating escape sequences in strings
let escapeString: string = "He said, \"TypeScript is awesome!\"\nLet's learn it.";
console.log(escapeString); //Output with new line and quotes


//concat using + symbol
let concatExample1: string = "Hello, " + "World!";
console.log(concatExample1); // Output: Hello, World!

//concat using concat method
let concatExample2: string = "Hello, ".concat("TypeScript!");
console.log(concatExample2); // Output: Hello, TypeScript!

//concat using template literals , string interpolation
let concatExample3: string = `${"Hello, "} ${"World!"}`;
console.log(concatExample3); // Output: Hello, World!

//.equals method example
let string1: string = "Hello";
let string2: string = "Hello";
console.log(string1 === string2); // Output: true

//.contains method example
let string3: string = "Hello, TypeScript!";
console.log(string3.includes("TypeScript")); // Output: true

//.startsWith method example
console.log(string3.startsWith("Hello")); // Output: true

//.endsWith method example
console.log(string3.endsWith("!")); // Output: true