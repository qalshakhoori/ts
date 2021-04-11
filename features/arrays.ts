// string []
const carMakers: string[] = ['ford', 'toyota', 'chevy'];
// Date[]
const dates = [new Date(), new Date()];

// string [][]
const carsByMake = [['f150'], ['corrola'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prvent incompatibale values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexibale types (string | Date)
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
