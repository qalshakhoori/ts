import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([24, 35, 51, 10, 26, 8]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
