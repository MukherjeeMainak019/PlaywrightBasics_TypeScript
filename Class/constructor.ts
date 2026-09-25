class Employee2
{
    eid : number = 0;
    ename : string = "";
    esalary : number = 0;
    edept : string = "";

    //to create a constructor the keyword is  constructor: important to remember
    constructor(eid:number, ename:string, esalary:number, edept:string)
    {
        //this keyword refers to the current instance of the class
        // Assigning the constructor parameters to the class properties using 'this' keyword
        this.eid = eid;
        this.ename = ename;
        this.esalary = esalary;
        this.edept = edept;
        //this.abc = edept; // error: Property 'abc' does not exist on type 'Employee2'.
    }

    display():void
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.esalary);
        console.log(this.edept);
    }
}

var emp2 = new Employee2(101, "John Doe", 50000, "IT");
emp2.display();


class Employee3
{
    eid : number = 0;
    ename : string = "";
    esalary : number = 0;
    edept : string = "";

    //to create a constructor the keyword is  constructor: important to remember
    constructor(eid:number, ename:string, esalary:number, edept:string)
    {
        //this keyword refers to the current instance of the class
        // Assigning the constructor parameters to the class properties using 'this' keyword
        this.eid = eid;
        this.ename = ename;
        this.esalary = esalary;
        this.edept = edept;
        //this.abc = edept; // error: Property 'abc' does not exist on type 'Employee2'.
    }

    display():void
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.esalary);
        console.log(this.edept);
    }
}

var emp3 = new Employee3(102, "John Smith", 50000, "IT");
emp3.display();