
class Arma {
    #nombre;
    #daño;
    #tipo;

    constructor(nombre, daño, tipo) {
        this.#nombre = nombre;
        this.#daño = daño;
        this.#tipo = tipo;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(in_nombre) {
        this.#nombre = in_nombre;
    }

    get daño() {
        return this.#daño;
    }

    set daño(in_daño) {
        this.#daño = in_daño;
    }

    get tipo() {
        return this.#tipo;
    }

    set tipo(in_tipo) {
        this.#tipo = in_tipo;
    }

    // Muestra las características del arma.
    descripcionArma() {
        console.log(
            this.#nombre + " (" + this.#tipo +
            ") - daño: " + this.#daño
        );
    }
}

export default Arma;
