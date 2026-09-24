interface IEmployee {

    empName: string;
    empCode: number;
    empSalary: number;

    //a different way to declare method in interface
    // method without parameter and without return type
    // method declaration with arrow function
    disData:()=>void;
    
    //alternative way to declare method in interface
    // disData():void;

}

var emp : IEmployee = { // emp is object of IEmployee interface
    empName: "Alice",
    empCode: 123,
    empSalary: 75000,

    // invoking the annonymous function by variable name.
    disData: function():void {
        console.log("Employee Name: " + this.empName);
        console.log("Employee Code: " + this.empCode);
        console.log("Employee Salary: " + this.empSalary);
    }
}

console.log("Employee Details:");
emp.disData();

//aternatively
console.log(emp.empName);
console.log(emp.empCode);
console.log(emp.empSalary);
emp.disData();