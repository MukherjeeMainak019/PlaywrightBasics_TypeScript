//Different ways to declare strings in TypeScript
var singleQuoteString = 'This is a string with single quotes';
var doubleQuoteString = "This is a string with double quotes";
var backtickString = "This is a string with backticks";
//using var keyword
var varString = "This string is declared using var";
//using const keyword
var constString = "This string is declared using const";
//String interpolation using template literals
var userName = 'John';
var greeting = "Hello, ".concat(userName, "! Welcome to TypeScript.");
//String interpolation using template literals uisng var keyword
var varUserName = 'Jane';
var varGreeting = "Hello, ".concat(varUserName, "! Welcome to TypeScript.");
//String methods examples
var sampleString = "  Hello, TypeScript!  ";
console.log(sampleString.length); // Length of the string
console.log(sampleString.toUpperCase()); // Convert to uppercase
console.log(sampleString.toLowerCase()); // Convert to lowercase
console.log(sampleString.trim()); // Remove whitespace from both ends
console.log(sampleString.includes("TypeScript")); // Check if substring exists
console.log(sampleString.replace("TypeScript", "JavaScript")); // Replace substring
console.log(sampleString.split(", ")); // Split string into an array
//Using string methods with var keyword
var varSampleString = "  Hello, World!  ";
console.log(varSampleString.length); // Length of the string
console.log(varSampleString.toUpperCase()); // Convert to uppercase
console.log(varSampleString.toLowerCase()); // Convert to lowercase
console.log(varSampleString.trim()); // Remove whitespace from both ends
console.log(varSampleString.includes("World")); // Check if substring exists
console.log(varSampleString.replace("World", "TypeScript")); // Replace substring
console.log(varSampleString.split(", ")); // Split string into an array
//charAt method example
var charExample = "TypeScript";
console.log(charExample.charAt(4)); // Output: S
//charAt method example using var keyword
var varCharExample = "JavaScript";
console.log(varCharExample.charAt(4)); // Output: S
//indexOf method example
var indexExample = "Hello, TypeScript!";
console.log(indexExample.indexOf("Type")); // Output: 7
//indexOf method example using var keyword
var varIndexExample = "Hello, JavaScript!";
console.log(varIndexExample.indexOf("Java")); // Output: 7
//substring method example
var substringExample = "TypeScript";
console.log(substringExample.substring(0, 4)); // Output: Type
//substring method example using var keyword
var varSubstringExample = "JavaScript";
console.log(varSubstringExample.substring(0, 4)); // Output: Java
//concat method example
var concatExample = "Hello, ".concat("TypeScript!");
console.log(concatExample); // Output: Hello, TypeScript!
//concat method example using var keyword
var varConcatExample = "Hello, ".concat("JavaScript!");
console.log(varConcatExample); // Output: Hello, JavaScript!
//repeat method example
var repeatExample = "Hi! ";
console.log(repeatExample.repeat(3)); // Output: Hi! Hi! Hi!
//repeat method example using var keyword
var varRepeatExample = "Hey! ";
console.log(varRepeatExample.repeat(2)); // Output: Hey! Hey!
//replaceAll method example
var replaceAllExample = "foo bar foo";
console.log(replaceAllExample.replaceAll("foo", "baz")); // Output: baz bar baz
//replaceAll method example using var keyword
var varReplaceAllExample = "hello world hello";
console.log(varReplaceAllExample.replaceAll("hello", "hi")); // Output: hi world hi  
//replace method with new characters using var keyword
var varSampleString2 = "  Hello, Universe!  ";
console.log(varSampleString2.replace("Universe", "TypeScript")); // Replace substring   
// Demonstrating immutability of strings
var immutableString = "Immutable";
immutableString.toUpperCase();
console.log(immutableString); // Output: Immutable
// Demonstrating immutability of strings using var keyword
var varImmutableString = "Constant";
varImmutableString.toLowerCase();
console.log(varImmutableString); // Output: Constant
// immutable means unchangeable or unmodifiable. 
// In TypeScript (and JavaScript), strings are immutable, which means that once a string is created, it cannot be changed. 
// Any operation that seems to modify a string actually creates a new string instead.
//split method example with var keyword
var varSplitExample = "apple,banana,cherry";
console.log(varSplitExample.split(",")); // Output: [ 'apple', 'banana', 'cherry' ]
// Demonstrating string interpolation with expressions
var a = 5;
var b = 10;
var expressionString = "The sum of ".concat(a, " and ").concat(b, " is ").concat(a + b, ".");
console.log(expressionString); // Output: The sum of 5 and 10 is 15.
//trimStart and trimEnd method examples
var trimExample = "   Hello, TypeScript!   ";
console.log(trimExample.trimStart()); // Output: "Hello, TypeScript!   "
console.log(trimExample.trimEnd()); // Output: "   Hello, TypeScript!"
//trimright and trimleft method examples using var keyword
var varTrimExample = "   Hello, JavaScript!   ";
console.log(varTrimExample.trimLeft()); // Output: "Hello, JavaScript!   "
console.log(varTrimExample.trimRight()); // Output: "   Hello, JavaScript!"
// Demonstrating escape sequences in strings
var escapeString = "He said, \"TypeScript is awesome!\"\nLet's learn it.";
console.log(escapeString); //Output with new line and quotes
