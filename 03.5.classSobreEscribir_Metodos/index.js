
class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
    this.damegeInflicted = 0;
  }
  attack() {
    this.damegeInflicted += 10;
    console.log(`Attacking with ${this.weapon} that inflicts ${this.damegeInflicted} points of damage`); 
  }
}
class Wizard extends Human {
  attack(){
    this.health += 10;
    //super.attack();  In this line we can call the parent method attack!
    this.damegeInflicted += 20;
    console.log('Abra Kadabra, the wizard is attacking! with ' + this.weapon + ' that inflicts ' + this.damegeInflicted + ' points of damage' );
  }
}
const aragorn = new Human('Sword');
const gandalf = new Wizard('Staff');
aragorn.attack();
gandalf.attack();
console.log(aragorn);
console.log(gandalf);
