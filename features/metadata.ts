import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('HI THERE')
  fly(): void {
    console.log('vrrrrrrrrrrrrrr');
  }
}

function markFunction(secretInfor: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfor, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
