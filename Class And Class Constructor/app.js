// clases are same as fucntion constructors introuduce by ES6 it is used to make the code looks more modern
// and similar to other programming languages.they also used the function Constructor and prototypla inherictance

//there are two ways to use the classes

//1

class Car{
    constructor(made , model , engine){
        this.made = made;
        this.model = model;
        this.engine = engine;
    }
}

class Dogs{
    constructor(name , breed , color){
        this.name = name;
        this.breed = breed;
        this.color = color;

    }
    callDog(){
        console.log(`hey ${this.name} come here . ${this.breed} is ${this.color} in Color`)
    }
}
// we use the constructor function to make the object and this is a inbuilt special function
let myCar = new Car('Toyota' , 'LandCruise' , 'V8')
console.log(myCar)
let myDog = new Dogs('tommy' , 'germanShephered' , 'grey')
console.log(myDog)
myDog.callDog()