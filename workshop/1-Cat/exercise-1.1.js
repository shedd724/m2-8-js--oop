// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Add some properties to our class instances.
// Objects created via this class should have the following properties:

// {
//   species: 'cat',
//   tiredness: 0,
//   hunger: 0,
//   loneliness: 0,
//   happiness: 0,
// }

class Cat {
  // Add code here
  constructor() {
    this.species = "cat";
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }
}

// B) Instantiate a cat called 'boots' with the Cat class.
let boots = new Cat();

// C) What do you see when you console.log(boots)?
console.log(boots);

// D) What if I want to output just boots' species?
console.log(boots.species);
