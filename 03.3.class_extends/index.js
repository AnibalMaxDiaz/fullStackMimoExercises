// Exercise class inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}
class Cat extends Animal{
  miau() {
    console.log(`${this.name} says Miau!`);
  }
}
const dog1 = new Dog('Chispas');
const cat1 = new Cat('Opalo');
dog1.eat();
dog1.bark();
cat1.eat();
cat1.miau();
console.log(dog1);
console.log(cat1);
