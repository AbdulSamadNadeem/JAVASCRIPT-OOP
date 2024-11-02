// static methods are those methods which are only attached to the class constructornot on the instance

class Cars{
    constructor(made , model , engine){
        this.made = made;
        this.mdoel = model;
        this.engine =  engine;
    }

    static complimentCars(car){
        console.log(`this ${car} is very fast` )
    }
}

let BMW = new Cars('BMW' , 'm7' , 'v12')

Cars.complimentCars('BMW')

console.log(BMW)