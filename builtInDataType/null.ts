//Null : null is one of the primitive values in TypeScript and JavaScript. 
//It represents the intentional absence of any object value.
//Null represents a variable whose value is empty or non-existent or undefined

var num1 : String | null = null;
num1 = "Hello";
console.log("Value of num1: " + num1);

var str : any | null = null;
var str1: number | null = null;
var str2: boolean | null = null;
var num1 : String | null = null;

var str : any;
var x: number;
var y: boolean;
var z : String;

//No character type in TypeScript, only string, number, boolean, null, and undefined.

//undefined represents a variable that has been declared but has not yet been assigned a value.
var num2 : number | undefined = undefined;
num2 = 20;
console.log("Value of num2: " + num2);  


var num3 : number | null;
// console.log("Value of num3: " + num3); 
//Error : null is an explicit assignment value that represents the absence of any value.

var num4 : number | undefined;
console.log("Value of num4: " + num4); 
//No error: represents the absence of an assigned value


var a : null = null;
console.log("Value of a: " + a);

var b : undefined = undefined;
console.log("Value of b: " + b);

//a = 10; // Error: Type 'number' is not assignable to type 'null'.
//b = "Hello"; // Error: Type 'string' is not assignable to type 'undefined'. 
//a = "Hello"; // Error: Type 'string' is not assignable to type 'null'.
//b = true; //   Error: Type 'boolean' is not assignable to type 'undefined'.


// npx tsc "builtInDataType/null.ts" 
//node "builtInDataType/null.ts"

var num8 : null = null;
console.log("Value of num8: " + num8); 

var num9 : undefined = undefined;
console.log("Value of num9: " + num9); 


var str : any | undefined = undefined;
var str11: number | undefined = undefined;
var str12: boolean | undefined = undefined;
var num13 : String | undefined = undefined;