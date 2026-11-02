import Personaje from "../Personaje.js";
import CaminanteBlanco from "./CaminanteBlanco.js";
class Dragon extends Personaje{
    #poder;
    #tipoAtaque;
    #vida;



    constructor(nombre, vida, vivo, poder, tipoAtaque){
        super(nombre, vivo)
        this.#poder = poder;
        this.#tipoAtaque = tipoAtaque;
        this.#vida = 100;
    }
    get #poder() {
        return this.#poder;
    }
    set #poder(in_poder) {
        this.#poder = in_poder;
    }

    get #tipoAtaque() {
        return this.#tipoAtaque;
    }
    set #tipoAtaque(in_tipoAtaque) {
        this.#tipoAtaque = in_tipoAtaque;
    }

    get #vida() {
        return this.#vida;
    }
    set #vida(in_vida) {
        this.#vida = in_vida;
    }

    atacar(objetivo){
        objetivo.vida -= this.#poder;

        if(objetivo.vida <= 0 || objetivo instanceof CaminanteBlanco){
            objetivo.vida = 0;
            objetivo.morir();
        }

        
    }
    recibirDaño(puntos){
        this.#vida -= puntos;
        
        if(this.#vida <= 0){
            this.#vida = 0;
            this.morir();
        }
    }
}

export default Dragon;