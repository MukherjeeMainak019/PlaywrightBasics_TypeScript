//ways to declare an array

//initialization  and declaration at once
let arr1: number[] = [1, 2, 3, 4, 5]; // number array
let arr2: string[] = ["apple", "banana", "cherry"]; // string array

//declaration first and initialization later
let arr3: boolean[];
arr3 = [true, false, true];

//using Array generic type
let arr4: Array<number> = [10, 20, 30];
let arr5: Array<string> = ["x", "y", "z"];

//mixed type array using union types
let arr6: (number | string)[] = [1, "two", 3, "four"];

let ar: (number | string | boolean)[] = [1, "two", 3, "four", true];

let ar1: (any)[] = [1, "two", 3, "four", true];

//array indexing and accessing elements
let firstElement = arr1[0]; // 1
let secondElement = arr2[1]; // "banana"
let thirdElement = arr2[-1]; // undefined, as negative indexing is not supported in TypeScript
//undefined index access
let undefinedElement = arr1[10]; // undefined

let arr7: string[] = ["apple", "banana", "cherry"];
//for loop to iterate through the array
for (let i = 0; i < arr7.length; i++) {
    console.log(arr7[i]);
}   

//for loop showing out of bounds access
for (let i = 1; i <= arr7.length; i++) {
    console.log(arr7[i]); // last iteration will log 'undefined'
}   

//arry methods
let arr8: number[] = [5, 10, 15];

//push method : adds element to the end
arr8.push(20); // arr8 is now [5, 10, 15, 20]

//pop method : removes element from the end
let poppedElement = arr8.pop(); // poppedElement is 20, arr8 is now [5, 10, 15]

//shift method : removes element from the start
let shiftedElement = arr8.shift(); // shiftedElement is 5, arr8 is now [10, 15]

//unshift method : adds element to the start
arr8.unshift(1); // arr8 is now [1, 10, 15]

//splice method : adds/removes elements at a specific index
arr8.splice(1, 1, 12, 14); // removes 1 element at index 1 and adds 12, 14; arr8 is now [1, 12, 14, 15]

//slice method : creates a new array from a portion of an existing array
let newArr = arr8.slice(1, 3);
//original array before slicing
console.log(arr8); // [11, 12, 13, 14]
//output of the slice operation
console.log(newArr); // [12, 14]


//length property
let lengthOfArr8 = arr8.length; // lengthOfArr8 is 4        

//add multiple values in middle of the array using splice
let arr9: number[] = [1, 2, 5, 6];
arr9.splice(2, 0, 3, 4); // arr9 is now [1, 2, 3, 4, 5, 6]

//remove multiple values from the array using splice
let arr10: number[] = [1, 2, 3, 4, 5, 6];
arr10.splice(2, 3); // removes 3 elements starting from index 2; arr10 is now [1, 2, 6]

//copy array using slice
let arr11: string[] = ["a", "b", "c", "d"];
let copiedArr = arr11.slice(); // copiedArr is ["a", "b", "c", "d"]