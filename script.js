const fs = require('fs');
const {Animal, Dog, Cat, Bird} = require('./Animal');


//question 1 & 2: Passing arguments and reading file contents
const content = fs.readFileSync(process.argv[2], 'utf-8')


//question 3: Splitting strings to arrays
let data = content.split('\n');
data.shift();
data = data.map(item => item.slice(1, -1).split('","'));
// console.log(data);

//question 4: Creating objects from data
const animals = data.map((row) => {
    switch (row[2]) {
        case 'dog':
            return new Dog(row[0], row[1], row[2])
        case 'cat':
            return new Cat(row[0], row[1], row[2])         
        case 'bird':
            return new Bird(row[0], row[1], row[2])
        default:
            return new Animal(row[0], row[1], row[2]);
    }
})

//console.log(animals);

//question 5: Different Objects = adding properties to the existing object
animals.forEach(animal => {
    const animalSpeak = animal.speak()
    animal.speak = animalSpeak
    const animalAge = animal.getAge()
    animal.age = animalAge
})


const groupedAnimals = {};

animals.forEach((animal) => {
    if (!groupedAnimals[animal.species]) {
      groupedAnimals[animal.species] = [];
    }
    groupedAnimals[animal.species].push(animal);
  })


const species = Object.keys(groupedAnimals);


species.sort((a,b) => {
  return groupedAnimals[a].length < groupedAnimals[b].length ? 1 : -1;
})


const mostFreqGroup = groupedAnimals[species[0]];

mostFreqGroup.sort((a, b) => {
    if (a.birthDate === b.birthDate) {
      return 0;
    } else if (a.birthDate < b.birthDate) {
      return -1;
    } else {
      return 1;
    }
  })

  const oldest = mostFreqGroup[0];
  
 console.log(`The oldest dog is ${oldest.name} at age ${oldest.age} and ${oldest.speak}`)
  