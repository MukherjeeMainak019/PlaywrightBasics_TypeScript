interface I1
{
    a: number;  
    b: number;
    sum(): number;

// here the interface  has only declaration of properties and methods no implementation
}

// interface can inherit another interface
// whatever properties and methods are there in I1 will be inherited to I2
interface I2 extends I1 
{
    x: number;  
    y: number;
    sub(): number;

    // here the interface  has only declaration of properties and methods no implementation
}

// now we need to implement these interfaces in a class

class C1 implements I2
{
    a: number;  
    b: number;
    x: number;  
    y: number;

    constructor(a: number, b: number, x: number, y: number) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }

    //implementation is done here in the class
    sum(): number
    {
        return this.a + this.b;
    }

    sub(): number
    {
        return this.x - this.y;
    }
}

var obj = new C1(10, 20, 30, 15);
console.log("Sum: " + obj.sum());
console.log("Subtraction: " + obj.sub());


//example of multiple inheritance using interfaces in TypeScript
interface I3 {
    p: number;
    q: number;
    mul(): number;
}

// now a class can implement multiple interfaces
class C2 implements I2, I3 {
    a: number;
    b: number;
    x: number;
    y: number;
    p: number;
    q: number;

    constructor(a: number, b: number, x: number, y: number, p: number, q: number) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
        this.p = p;
        this.q = q;
    }

    sum(): number {
        return this.a + this.b;
    }

    sub(): number {
        return this.x - this.y;
    }

    mul(): number {
        return this.p * this.q;
    }
}

var obj2 = new C2(10, 20, 30, 15, 5, 6);
console.log("Sum: " + obj2.sum());
console.log("Subtraction: " + obj2.sub());
console.log("Multiplication: " + obj2.mul());