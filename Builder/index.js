class Car {
  constructor() {
    this.engine = false;
    this.color = false;
    this.parktronik = false;
  }
}

class Buider {
  constructor(car) {
    this.car = car;
  }

  addTest(value) {
    this.car.test = value;
    return this;
  }

  addColor(value) {
    this.car.color = value;
    return this;
  }

  addEngine(value) {
    this.car.engine = value;
    return this;
  }

  addParcktronik(value) {
    this.car.parktronik = value;
    return this;
  }

  build() {
    return this.car;
  }
}

const bmw = new Car();
const updatedBMW = new Buider(bmw)
  .addColor("red")
  .addEngine("v8")
  .build();

const audi = new Car();

const updatedAudi = new Buider(audi)
  .addColor("blue")
  .addEngine("v8")
  .addParcktronik(true)
  .addTest(true)
  .build();

console.log(updatedBMW);
console.log(updatedAudi);
