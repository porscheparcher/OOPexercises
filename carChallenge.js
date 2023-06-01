//part One
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

//Part Two
class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 4;

    }
    getNumWheels() {
        return this.numWheels;
    }
}

//Part Three
class Motorcycle extends Vehicle {
    constructor(make, mondel, year, numWheels) {
        super(make, model, year);
        this.numWheels = 2
    }
    revEngine() {
        return "VROOM!!!"
    }
}

//Part Four
class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(vehicle) {
      if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
  
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
  
      this.vehicles.push(vehicle);
      return "Vehicle added to the garage.";
    }
  }
  