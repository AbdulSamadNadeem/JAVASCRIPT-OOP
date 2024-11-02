class Person{
    constructor(name , age){
        this.name = name;
        this.age= age
    }

}

class Student extends Person{
    constructor(name, age , grade , id){
       super(name , age)
       this.grade= grade;
       this.id = id;
    }
}

const Abdullah = new Student('Abdullah' , 18 , 'senior' , 101)
console.log(Abdullah)