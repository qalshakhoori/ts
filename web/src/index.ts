import { User } from './models/User';

const user = new User({ name: 'Qassim', age: 32 });

user.set({ name: 'newName', age: 45 });

console.log(user.get('name'));
console.log(user.get('age'));
