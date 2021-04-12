interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}
Year: ${this.year}
Broken: ${this.broken}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `The drink has ${this.sugar} grams of sugar`;
  },
};

const printSummery = (item: Reportable): void => {
  console.log(item.summary());
};

printSummery(oldCivic);
printSummery(drink);
