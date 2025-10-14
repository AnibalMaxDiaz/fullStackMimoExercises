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
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.  
const animal = new Animal('Generic Animal');
animal.speak(); // Generic Animal makes a noise.  
const cat = new Cat('Whiskers');
cat.speak(); // Whiskers meows.
const anotherAnimal = new Animal('Another Animal');
anotherAnimal.speak(); // Another Animal makes a noise. 
const anotherDog = new Dog('Buddy');
anotherDog.speak();
// Buddy barks.
const anotherCat = new Cat('Mittens');
anotherCat.speak(); // Mittens meows. 
const genericAnimal = new Animal('Creature');
genericAnimal.speak(); // Creature makes a noise. 
const genericDog = new Dog('Fido');
genericDog.speak(); // Fido barks.
const genericCat = new Cat('Shadow');
genericCat.speak(); // Shadow meows.    
const strayDog = new Dog('Stray');
strayDog.speak(); // Stray barks. 
const strayCat = new Cat('StrayCat');
strayCat.speak(); // StrayCat meows.    
const wildAnimal = new Animal('Wild');
wildAnimal.speak(); // Wild makes a noise. 
const wildDog = new Dog('Wolf');
wildDog.speak(); // Wolf barks. 
const wildCat = new Cat('Lion');      
wildCat.speak(); // Lion meows.

