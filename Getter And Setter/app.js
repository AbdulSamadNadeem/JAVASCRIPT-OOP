// In JS there are two types of properties
// Data properties  and Accessors properties
//  let user = {
//     name: 'John',
//     age: 30,  
//  }  is Data Properties

//and Accessor Are methods and are of two types Getter And Setter
// getter are used to read the object properties values and Setter are used
// to set the properties values

class Person{
    constructor(name, age , gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    get getName(){
        return this.name
    }

    set setName(val){
        if(val.length < 4){
            console.log('name too short')
        }
        else{
            this.name = val
        }
    }
}

let Abdul = new Person('Abdul Samad' , 18 , 'Male')
console.log(Abdul)
Abdul.setName = 'Abdullah'
console.log(Abdul)
console.log(Abdul.getName)