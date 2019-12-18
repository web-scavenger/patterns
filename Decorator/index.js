const cars = {
  x5: {
    name: "X5",
    price: 10000
  },
  x6: {
    name: "X6",
    price: 123512
  }
};

const { x5, x6 } = cars;

class Car {
  constructor(carName, price) {
    this.carName = carName;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class Parktronik {
  constructor(car) {
    this.price = 345;
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + this.price;
  }
}

class AuroControl {
  constructor(car) {
    this.price = 12334;
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + this.price;
  }
}

let CarX6 = new Car(x6.name, x6.price);

CarX6 = new AuroControl(CarX6);
CarX6 = new Parktronik(CarX6);

let CarX5 = new Car(x5.name, x5.price);

CarX5 = new AuroControl(CarX5);
CarX5 = new Parktronik(CarX5);

console.log(CarX6.getPrice());
console.log(CarX5.getPrice());
