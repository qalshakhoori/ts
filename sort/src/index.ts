import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharctersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([24, 35, 51, 10, 26, 8]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charchterCollection = new CharactersCollection('Xaayb');
charchterCollection.sort();
console.log(charchterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
