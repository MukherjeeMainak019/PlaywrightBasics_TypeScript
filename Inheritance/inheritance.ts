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

//example of types of inheritance in TypeScript

// Single Inheritance: A class inherits from another class (as shown above with Employee inheriting from Person)
// Multiple Inheritance: TypeScript does not support multiple inheritance directly, but it can be achieved using interfaces.
// Multilevel Inheritance: A class inherits from a derived class, forming a chain of inheritance.
// Hierarchical Inheritance: Multiple classes inherit from a single base class.
// Hybrid Inheritance: A combination of two or more types of inheritance.   

//Multilevel Inheritance
class Grandparent {
    grandparentMethod() {
        console.log("I am Grandparent");
    }
}

class Parent extends Grandparent {
    parentMethod() {
        console.log("I am Parent");
    }
}

class Child extends Parent {
    childMethod() {
        console.log("I am Child");
    }
}

let obj = new Child();

obj.grandparentMethod();
obj.parentMethod();
obj.childMethod();


// Hybrid Inheritance example in TypeScript using interfaces
class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

class Bike extends Vehicle {
    ride() {
        console.log("Bike is riding");
    }
}

class Cycle extends Vehicle {
    ride() {
        console.log("Cycle is riding");
    }
}

let car = new Car();
car.start();  // Inherited from Vehicle
car.drive();  // Car's own method

let bike = new Bike();
bike.start(); // Inherited from Vehicle
bike.ride();  // Bike's own method

let cycle = new Cycle();
cycle.start(); // Inherited from Vehicle
cycle.ride();  // Cycle's own method


//hierarchical inheritance example in TypeScript
class Animal {

    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}

class Cat extends Animal {

    meow() {
        console.log("Cat is meowing");
    }
}

class Puppy extends Dog {
    
    bark() {
        console.log("Puppy is barking");
    }
}

class Kitten extends Cat {
    
    meow() {
        console.log("Kitten is meowing");
    }
}

let dog = new Dog();

dog.eat();   // Inherited from Animal
dog.bark();  // Dog's own method


let cat = new Cat();

cat.eat();   // Inherited from Animal
cat.meow();  // Cat's own method