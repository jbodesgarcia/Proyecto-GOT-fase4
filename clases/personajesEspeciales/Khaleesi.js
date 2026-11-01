import Personaje from "../Personaje.js";

class Khaleesi extends Personaje{
    #dragones;
    #consejero;
   
    constructor(dragones, consejero){
        

    }
   
    get #dragones() {
        return this.#dragones;
    }
    set #dragones(in_dragones) {
        this.#dragones = in_dragones;
    }

    get #consejero() {
        return this.#consejero;
    }
    set #consejero(in_consejero) {
        this.#consejero = in_consejero;
    }

    
    
}

