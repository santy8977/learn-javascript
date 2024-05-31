// grand Parent
class Automobile{
    constructor(chasicNumber) {
        this.chasisNumber =  chasicNumber;
    }
    useAerodynamic() {
        console.log("Automobile....Aerodynamic: " + this.chasisNumber);
    }
}


// Parent class
class Vehicle extends Automobile{
    constructor(make, model, year) {
        super(1000);
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.make},${this.model},${this.year}`;
    }
    startEngine() {
        console.log("Starting the engine..." + this.make);
    }
    stopEngine() {
        console.log("Stop the engine..."+ this.make);
    }
}

// Child class
class Car extends Vehicle {
    constructor(make, model, year, fuelType) {
        super(make, model, year);  // call the parent class constructor
        this.fuelType = fuelType;
    }
    driverCar() {
        console.log("Driving car " + this.model);
    }
}

// Child class
class Truck extends Vehicle {
    constructor(make, model, year, loadCapacity) {
        super(make, model, year);  // call the parent class constructor
        this.loadCapacity = loadCapacity;
    }
    driverTruck() {
        console.log("Driving truck " + this.model);
    }
}

// creating Object (instances)
const car = new Car("Honda", "Civic", 2022, "Diesel");
const truck =  new Truck("Tata", "Sumo", 2020, 1000);

car.startEngine();
car.getInfo();
console.log(car.getInfo());
car.stopEngine();
car.useAerodynamic();

truck.startEngine();
console.log(truck.getInfo());
truck.stopEngine();
truck.useAerodynamic();