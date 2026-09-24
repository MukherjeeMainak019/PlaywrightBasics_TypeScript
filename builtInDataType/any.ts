var a : any = "Hi" // string

a = 100; // number

console.log(a);

a = true; // boolean

console.log(a);

// it is recommneded to use the absolute type of the varibales in your frameworks

//Use any when you are migrating from JS to TS
//Use any when you are dealing with 3rd party libraries without types
//Use any when you are dealing with dynamic content

let b;
b= 5;
let c = true;
console.log(b);
console.log(c);

let d : String;
d = "100";
console.log(d);


