// Basic example of method overriding in TypeScript

class Animal {
    speak(): void {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    // Overriding the speak method
    speak(): void {
        console.log("The dog barks.");
    }
}

class Cat extends Animal {
    // Overriding the speak method
    speak(): void {
        console.log("The cat meows.");
    }
}
let myAnimal = new Animal();
myAnimal.speak(); // Output: The animal makes a sound.

let myDog = new Dog();
myDog.speak(); // Output: The dog barks.

let myCat = new Cat();
myCat.speak(); // Output: The cat meows.