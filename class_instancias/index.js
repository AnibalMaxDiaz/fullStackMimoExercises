// Create a class named Food with properties name and calories. Then, create three instances of the Food class representing different food items, and log their details to the console.

class Food{
    constructor(name, calories){
        this.name = name;
        this.calories = calories;
    }   
}
const banana = new Food("Banana", 150);
const apple = new Food("Apple", 95);
const orange = new Food("Orange", 62);

console.log(banana);
console.log(apple);
console.log(orange);
