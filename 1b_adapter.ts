class LegacyCar {
  x: number;
  y: number;

  drive(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}

class Vehicle {
  x: number;
  y: number;

  moveTo(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}

class VehicleToLegacyCarAdapter extends Vehicle {
  car: LegacyCar;

  moveTo(x: number, y: number) {
    this.car.drive(x - this.car.x, y - this.car.y);
  }
}

class Racetrack {
  vehicles: Set<Vehicle>;
}
