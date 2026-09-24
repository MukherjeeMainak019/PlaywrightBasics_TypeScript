class Employee2
{
    eid : number = 0;
    ename : string = "";
    esalary : number = 0;
    edept : string = "";

    setData(eid:number, ename:string, esalary:number, edept:string):void
    {
        this.eid = eid;
        this.ename = ename;
        this.esalary = esalary;
        this.edept = edept;
    }   

    display():void
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.esalary);
        console.log(this.edept);
    }
}

var emp2 = new Employee2();
emp2.setData(101, "John Doe", 50000, "IT");
emp2.display();