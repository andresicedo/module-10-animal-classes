class Animal {
    constructor(name, birthDate, species) {
        this.name = name;
        this.birthDate = new Date(birthDate);
        this.species = species;
        this.noise = 'grunt';
    }


    speak () {
        return `${this.name} says ${this.noise}`
    }

    getAge() {
        let day = new Date();
        let actualAge = Math.abs(this.birthDate.getFullYear() - day.getFullYear());
        return actualAge;
      }
}
class Dog extends Animal {
    constructor(name, birthDate, species) {
        super(name, birthDate, species)
        this.noise = "can't teach an old dog new tricks"
    }
}

class Cat extends Animal {
    constructor(name, birthDate, species) {
        super(name, birthDate, species)
        this.noise = 'meow'
    }
}

class Bird extends Animal {
    constructor(name, birthDate, species) {
        super(name, birthDate, species)
        this.noise = 'AFLACK!'
    }
}

module.exports = {Animal, Dog, Cat, Bird}