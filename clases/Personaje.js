
class Personaje {
    #nombre;
    #edad;
    #vivo;
    #casa;

    constructor(nombre, edad, casa) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#vivo = true;
        this.#casa = casa;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(in_nombre) {
        this.#nombre = in_nombre;
    }

    get edad() {
        return this.#edad;
    }

    set edad(in_edad) {
        this.#edad = in_edad;
    }

    get vivo() {
        return this.#vivo;
    }

    set vivo(in_vivo) {
        this.#vivo = in_vivo;
    }

    get casa() {
        return this.#casa;
    }

    set casa(in_casa) {
        this.#casa = in_casa;
    }

    // El personaje se presenta.
    presentarse() {
        console.log(
            "Soy " + this.#nombre +
            " de la Casa " + this.#casa.nombre
        );
    }

    // El personaje muere.
    morir() {
        this.#vivo = false;

        console.log(this.#nombre + " ha muerto.");
    }
}

export default Personaje;
