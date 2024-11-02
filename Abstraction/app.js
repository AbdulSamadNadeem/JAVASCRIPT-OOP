class LetGo{
    #fuel
    constructor(){
        this.#fuel = 100
    }
    
    start(){
        if(this.#fuel > 0){
            console.log('The Car is Started , Lets go')
            this.#consumeFuel()
        }
        else{
            console.log("Low Fuel")
        }
    }

    #consumeFuel(){
        this.#fuel -= 10
    }

    checkFuel(){
        return this.#fuel
    }

}

const Toyota = new LetGo()
Toyota.checkFuel()
Toyota.start()

console.log(Toyota)
