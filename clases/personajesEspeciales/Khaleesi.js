import Personaje from "../Personaje.js";
import Consejero from "./Consejero.js";
class Khaleesi extends Personaje{
    #dragones;
    #consejero;
   
    constructor(nombre, edad, casa, dragones){
        super(nombre, edad, casa)
        this.#dragones = dragones;
        this.#consejero = new Consejero("Tyrion Lannister", 30, casa, "Especialidad");
    }
    get dragones() {
        return this.#dragones;
    }
    set dragones(in_dragones) {
        this.#dragones = in_dragones;
    }

    get consejero() {
        return this.#consejero;
    }
    set consejero(in_consejero) {
        this.#consejero = in_consejero;
    }

    
    
}

export default Khaleesi;