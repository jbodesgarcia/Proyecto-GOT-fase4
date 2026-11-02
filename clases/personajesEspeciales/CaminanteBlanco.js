import Personaje from "../Personaje.js";

class CaminanteBlanco extends Personaje{
    #poderHelado;
    #vida;

    constructor(nombre, poderHelado){
        super(nombre);
        this.#poderHelado = poderHelado;
        this.#vida = 100;
    }



    get poderHelado() {
        return this.#poderHelado;
    }
    set poderHelado(in_poderHelado) {
        this.#poderHelado = in_poderHelado;
    }

    get vida() {
        return this.#vida;
    }
    set vida(in_vida) {
        this.#vida = in_vida;
    }

    atacar(objetivo){
        
        const daño = Math.floor(this.#poderHelado* (0.7 + Math.random() * 0.6));
        console.log(this.nombre + "ataca a " + objetivo.nombre + " causando " + daño + " puntos de vida");
        objetivo.recibirDaño(this.#poderHelado);
    }

    recibirDaño(puntos, arma){
        if(arma.nombre == "acero valyrio"){
            this.#vida -= puntos;

            if(this.#vida <= 0){
                this.#vida = 0;
                this.morir();
            }
        }
    }
}

export default CaminanteBlanco;