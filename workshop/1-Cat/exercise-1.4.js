// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

class Cat {
    constructor(breed, name) {
      this.hunger = 50;
      this.tiredness = 50;
      this.loneliness = 50;
      this.happiness = 50;
    }
    wait = (numberOfMinutes) => {
      this.hunger -= numberOfMinutes * 0.2;
      this.tiredness -= numberOfMinutes * 0.3;
      this.loneliness -= numberOfMinutes * 0.5;
      this.happiness -= numberOfMinutes * 0.3;
    };
  }
  
  let littleSir = new Cat();

// B) Make Boots wait 20 minutes and call then console.log(boots);


littleSir.wait(20);
console.log(littleSir);