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
console.log(party)

let sharty = new Person('Sharty', 2000 , 'mPhil')
sharty.calcAge()
console.log(sharty)