import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'Hi there', plane);
Reflect.defineMetadata('height', 10, plane);

console.log(plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

console.log(note);
console.log(height);

Reflect.defineMetadata('note', 'hi there', plane, 'color');
const colorNote = Reflect.getOwnMetadata('note', plane, 'color');

console.log(colorNote);
