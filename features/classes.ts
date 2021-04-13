class Vehicle {
  constructor(public color: string) {}

  protected hong(): void {
    // only accessable in class itself and child classes
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.hong();
    console.log(this.wheels);
  }
}

const car = new Car(4, 'white');
car.startDrivingProcess();
