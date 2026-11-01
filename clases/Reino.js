import Rey from "./Rey.js"; // Asegúrate de importar la clase Rey si está en otro archivo

class Reino {
    #nombre;
    #casas;
    #rey;

    constructor(nombre, rey = null) {
        this.#nombre = nombre;
        this.#casas = [];
        this.#rey = null;

        if (rey instanceof Rey) {
            this.#rey = rey;
        }
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(in_nombre) {
        this.#nombre = in_nombre;
    }

    get casas() {
        return [...this.#casas];
    }

    set casas(in_casas) {
        this.#casas = in_casas;
    }

    get rey() {
        return this.#rey;
    }

    set rey(in_rey) {
        if (in_rey instanceof Rey || in_rey === null) {
            this.#rey = in_rey;
        }
    }

    // Añade una casa al reino.
    agregarCasa(casa) {
        if (!this.#casas.includes(casa)) {
            this.#casas.push(casa);
        }
    }

    // Asigna el rey del reino.
    proclamarRey(rey) {
        if (rey instanceof Rey) {
            this.#rey = rey;
        }
    }

    // Muestra las casas del reino.
    listarCasas() {
        console.log("Casas del Reino de " + this.#nombre + ":");

        for (const casa of this.#casas) {
            console.log("- Casa " + casa.nombre);
        }
    }

    // Muestra la información del rey.
    mostrarRey() {
        if (this.#rey !== null) {
            console.log("Rey actual:");
            console.log(
                "El rey del Reino de " + this.#nombre +
                " es " + this.#rey.nombre
            );

            this.#rey.presentarse();
        } else {
            console.log("El Reino de " + this.#nombre + " no tiene rey.");
        }
    }
}

export default Reino;