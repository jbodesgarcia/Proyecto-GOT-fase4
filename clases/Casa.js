
class Casa {
    #nombre;
    #lema;
    #arrayPersonaje;

    constructor(nombre, lema) {
        this.#nombre = nombre;
        this.#lema = lema;
        this.#arrayPersonaje = [];
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(in_nombre) {
        this.#nombre = in_nombre;
    }

    get lema() {
        return this.#lema;
    }

    set lema(in_lema) {
        this.#lema = in_lema;
    }

    get arrayPersonaje() {
        return this.#arrayPersonaje;
    }

    set arrayPersonaje(in_arrayPersonaje) {
        this.#arrayPersonaje = in_arrayPersonaje;
    }

    // Añade un personaje a la casa.
    agregarMiembro(personaje) {
        if (!this.#arrayPersonaje.includes(personaje)) {
            this.#arrayPersonaje.push(personaje);
        }
    }

    // Muestra los miembros de la casa.
    mostrarMiembros() {
        console.log("Miembros de la Casa " + this.#nombre + ":");

        for (let personaje of this.#arrayPersonaje) {
            console.log("- " + personaje.nombre);
        }
    }
}

export default Casa;
