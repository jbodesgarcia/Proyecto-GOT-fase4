
import Personaje from "../Personaje.js";

class Consejero extends Personaje {
    #especialidad;

    constructor(nombre, edad, casa, especialidad) {
        super(nombre, edad, casa);
        this.#especialidad = especialidad;
    }

    get especialidad() {
        return this.#especialidad;
    }

    set especialidad(in_especialidad) {
        this.#especialidad = in_especialidad;
    }

    luchar() {
        console.log(
            this.nombre +
            " no lucha con armas, sino con palabras e inteligencia."
        );
    }

    aconsejar(guerrero) {
        console.log(
            this.nombre + " aconseja a " +
            guerrero.nombre + " sobre " +
            this.#especialidad
        );
    }
}

export default Consejero;
