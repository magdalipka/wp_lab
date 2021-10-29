class Bike {
  print() {
    console.log("bike");
  }
}

class BikeWithBacklight implements Bike {
  #bike: Bike;
  constructor(bike: Bike) {
    this.#bike = bike;
  }
  print() {
    console.log("with backlight");
    this.#bike.print();
  }
}

class BikeWithFrontLight implements Bike {
  #bike: Bike;
  constructor(bike: Bike) {
    this.#bike = bike;
  }
  print() {
    console.log("with front light");
    this.#bike.print();
  }
}

const bike = new BikeWithBacklight(new BikeWithFrontLight(new Bike()));
