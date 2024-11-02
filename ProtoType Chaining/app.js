let Person = function(name,dob,edu){
    this.name = name;
    this.dob = dob;
    this.edu = edu;
    // this.calcAge = function(){
    //  let currentAge = new Date().getFullYear()- dob
    //  console.log(currentAge)
    // }
}

Person.prototype.calcAge = function(){
    let currenAge = new Date().getFullYear() - this.dob
    console.log(currenAge)
}


let party = new Person('Party' , 2000 , 'masters')
party.calcAge()
console.log(Person.prototype.isPrototypeOf(party))


let sharty = new Person('Sharty', 2000 , 'mPhil')
sharty.calcAge()
console.log(sharty)

// in this code there is nothing but a very important point that every object in JS is direclty or indirection
// an instance of the Object Constructor like party and sharty are instance of Person and person is instance 
// the new Object constructor in behind it looks like let Person  = new Object()