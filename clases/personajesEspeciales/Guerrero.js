
import Personaje from "../Personaje.js";

class Guerrero extends Personaje {
    #arma;
    #vida;

    constructor(nombre, edad, casa, arma = null) {
        super(nombre, edad, casa);
        this.#arma = arma;
        this.#vida = 100;
    }

    get arma() {
        return this.#arma;
    }

    set arma(in_arma) {
        this.#arma = in_arma;
    }

    get vida() {
        return this.#vida;
    }

    set vida(in_vida) {
        this.#vida = in_vida;
    }

    luchar() {
        if (!this.#arma) {
            console.log(this.nombre + " no tiene un arma equipada.");
            return;
        }

        console.log(
            this.nombre + " ataca con su " +
            this.#arma.nombre + ", causando " +
            this.#arma.daño + " puntos."
        );
    }

    entrenar() {
        console.log(
            this.nombre +
            " se entrena sin descanso para la próxima batalla."
        );
    }

    recibirDaño(daño){
        this.#vida -= daño;
        if(this.#vida <= 0){
            this.#vida = 0;
            this.morir();
        }
    }

    atacar(objetivo){
        const daño = Math.floor(this.#arma.daño * (0.7 + Math.random() * 0.6)); //entre 70% y 130% del daño
        console.log(this.nombre + "ataca a " + objetivo.nombre + " causando " + daño + "puntos de vida");
        objetivo.recibirDaño(daño);
    }
}



export default Guerrero;
