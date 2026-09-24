class Employee1
{
    eid : number = 0;
    ename : string = "";
    esalary : number = 0;
    edept : string = "";

    display():void
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.esalary);
        console.log(this.edept);
    }
}

let emp1 = new Employee1(); // object creation
emp1.eid = 101;
emp1.ename = "John Doe";
emp1.esalary = 50000;
emp1.edept = "IT";


emp1.display();