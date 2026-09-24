class Person {
    name: string;


    constructor(names: string) {
        this.name = names;
    }
}


class Employee extends Person {
    eid: number;

    constructor(names: string, empid: number) {
        super(names); // Call the constructor of the base class
        this.eid = empid;
    }

    display(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Employee ID: ${this.eid}`);
    }   
}

var emp = new Employee("Alice", 30);
emp.display();