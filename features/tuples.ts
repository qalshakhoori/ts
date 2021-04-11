const drink = {
  color: 'brown',
  carbonated: true,
  sugare: 40,
};

type Drink = [string, boolean, number]; // type alias

const pepsi: Drink = ['brown', true, 40];
const Sprit: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
