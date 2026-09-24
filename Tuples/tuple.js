var empID = 101;
var empName = "John Doe";
var empSalary = 50000;
var empDept = "IT";
//What is a tuple? 
//A tuple is a special type in TypeScript that allows you to store multiple values of different types 
// in a single variable.
// Creating a tuple to hold employee details
var employee = [empID, empName, empSalary, empDept];
var employee2 = [102, "Jane Smith", 60000, "HR"];
console.log("Employee 1 ID: " + employee[0]);
console.log("Employee 1 Name: " + employee[1]);
console.log("Employee 1 Salary: " + employee[2]);
console.log("Employee 2 ID: " + employee2[0]);
console.log("Employee 2 Name: " + employee2[1]);
console.log("Employee 2 Salary: " + employee2[2]);
//tuple functions   
employee.push(55000);
//log the full tuple after pushing new salary
console.log("Full Employee 1 Tuple after pushing new salary: " + employee);
employee.pop();
console.log("Full Employee 1 Tuple after popping: " + employee);
employee.shift();
console.log("Full Employee 1 Tuple after shifting: " + employee);
employee.unshift(201);
console.log("Full Employee 1 Tuple after unshifting: " + employee);
console.log("Final Employee 1 Details: ID = " + employee[0] + ", Name = " + employee[1] + ", Salary = " + employee[2]);
//update elements in tuple
employee[1] = "John Smith";
console.log("After updating, Employee 1 Name: " + employee[1]);
//length of tuple
console.log("Length of Employee 1 Tuple: " + employee.length);
//iterate tuple
console.log("Iterating over Employee 1 Tuple:");
for (var i = 0; i < employee.length; i++) {
    console.log(employee[i]);
}
//destructuring of tuple : means extracting values from tuple into individual variables
var id = employee[0], empNameDestructured = employee[1], salary = employee[2];
console.log("Destructured Employee 1 Details: ID = " + id + ", Name = " + empNameDestructured + ", Salary = " + salary);
console.log("Hello World");
//create an empty tuple
var emptyTuple_actual = [0, "", "", "", 0];
//using automation i will take the values 1743612 and fill the empty tuple.
//insert only the first value for now
emptyTuple_actual[0] = 1743612;
emptyTuple_actual[1] = "XPath Locators";
emptyTuple_actual[2] = "Any";
emptyTuple_actual[3] = "Beginner";
emptyTuple_actual[4] = 14762;
console.log("Full Empty Tuple after inserting values: " + emptyTuple_actual);
var emptyTuple_expected = [1743612, "Beginner", "Any", "XPath Locators", 14762];
//compare actual and expected tuples using a loop
var areTuplesEqual = true;
for (var i = 0; i < emptyTuple_actual.length; i++) {
    if (emptyTuple_actual[i] !== emptyTuple_expected[i]) {
        areTuplesEqual = false;
        break;
    }
}
console.log("Are the actual and expected tuples equal (using loop)? " + areTuplesEqual);
//final conclusion
if (areTuplesEqual) {
    console.log("The actual and expected tuples are identical.");
}
else {
    console.log("The actual and expected tuples are not identical.");
}
