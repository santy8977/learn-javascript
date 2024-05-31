class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    startEngine(){
        console.log('Starting engine... for Cars');
    }
}

class Audi extends Car{

    //overridden method
    startEngine(){
        console.log('Starting engine... for Audi');
    } 
    autoParking(){
        console.log('Audi... auto parking');
    } 
}

const audi = new Audi();
audi.startEngine();
audi.autoParking();