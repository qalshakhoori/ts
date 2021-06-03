class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

// Generic Constraints
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a House');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Car | House>([new Car(), new Car(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House()]);
