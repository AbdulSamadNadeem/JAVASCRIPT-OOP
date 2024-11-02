class encaps {
    #name
    #amount
   constructor(){
       this.#name = ''
       this.#amount = 0
   }

   getName(){
        return this.#name
   }
   setName(val){
       this.#name= val
   }
   getAmount(){
        return this.#amount
   }
   setAmount(val){
       this.#amount= val
   }
}

const Budy = new encaps();
Budy.setName("mafo")
Budy.setAmount(1000)
console.log(Budy)