// Exercise 3.6: Method Overriding in JavaScript
// Create a base class Animal with a method speak() that logs "Animal makes a noise".
// Create a subclass Dog that overrides the speak() method to log "Dog barks".
// Create another subclass Cat that overrides the speak() method to log "Cat meows".
// Instantiate objects of each class and call their speak() methods to demonstrate method overriding. 


class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  } 
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.  
const animal = new Animal('Generic Animal');
animal.speak(); // Generic Animal makes a noise.  
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

