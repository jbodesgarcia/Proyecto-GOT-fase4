
import Personaje from "../Personaje.js";

class Rey extends Personaje {
    #reinado;

    constructor(nombre, edad, casa, reinado) {
        super(nombre, edad, casa);
        this.#reinado = reinado;
    }

    get reinado() {
        return this.#reinado;
    }

    set reinado(in_reinado) {
        this.#reinado = in_reinado;
    }

    luchar() {
        console.log(
            this.nombre +
            " lidera la batalla y anima a sus tropas."
        );
    }

    gobernar() {
        console.log(
            this.nombre +
            " gobierna con sabiduría desde hace " +
            this.#reinado + " años."
        );
    }
}

export default Rey;
