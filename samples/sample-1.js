// Declare a generic class for humans
class Human {
  constructor() {
    this.species = "Homo Sapien";
  }
  dance = () => {
    console.log("disco time");
  };
}

// Declare a class that extends Human
class Male extends Human {
  constructor(name) {
    super(); // call parent constructor to set the species
    this.name = name;
  }
  greet = () => {
    console.log("I'm " + this.name);
  };
}

// Create a bob object that is a HUMAN MALE
let bob = new Male("Bob");

// Validation
console.log("1. Species: ", bob.species);
console.log("2. name: ", bob.name);
bob.greet();
bob.dance();
