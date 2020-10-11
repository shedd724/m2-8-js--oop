// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, Boots' name is not part of its object.
// Update the Cat class to accept have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you instantiate the boots object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

// By the way, Boots is a Simaese cat...
class Cat {
    constructor(name, breed) {
      this.breed = breed;
      this.name = name;
      this.hunger = 0;
      this.loneliness = 0;
      this.tiredness = 0;
      this.happiness = 0;
    }
  }
  let boots = new Cat("boots", "siamese");
  console.log(boots);