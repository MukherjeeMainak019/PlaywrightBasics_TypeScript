//different ways to create a two-dimensional array in TypeScript

//initialization and declaration at once
let matrix1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrix2: string[][] = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
];

//declaration first and initialization later
let matrix3: boolean[][];
matrix3 = [
    [true, false, true],
    [false, true, false]
];

//using Array generic type
let matrix4: Array<Array<number>> = [
    [10, 20],
    [30, 40]
];

let matrix5: Array<Array<string>> = [
    ["x", "y"],
    ["z", "w"]
];

//accessing elements in a two-dimensional array
let element1 = matrix1[0][1]; // 2
let element2 = matrix2[2][0]; // "g"

//iterating through a two-dimensional array using nested loops
for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
        console.log(matrix1[i][j]);
    }
}

//iterating through a two-dimensional array using for...of loops
for (let row of matrix2) {
    for (let item of row) {
        console.log(item);
    }
}

//modifying elements in a two-dimensional array
matrix1[1][1] = 99; // matrix1 is now [[1,2,3],[4,99,6],[7,8,9]]

//adding a new row to a two-dimensional array
matrix4.push([50, 60]); // matrix4 is now [[10,20],[30,40],[50,60]]

//removing the last row from a two-dimensional array
let removedRow = matrix5.pop(); // removedRow is ["z","w"], matrix5 is now [["x","y"]]

//getting the number of rows and columns
let numRows = matrix1.length; // 3
let numCols = matrix1[0].length; // 3       