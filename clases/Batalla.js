import CaminanteBlanco from "./personajesEspeciales/CaminanteBlanco.js";
import Guerrero from "./personajesEspeciales/Guerrero.js";
import Khaleesi from "./personajesEspeciales/Khaleesi.js";

class Batalla {
    #guerreros;
    #muertos;
    #vivos;
    #enCurso;
    constructor(casa){
        this.#guerreros = [];
        this.#muertos = [];
        this.#vivos = [];
        this.#enCurso = false;
    }

   

    get guerreros() {
        return this.#guerreros;
    }

    set guerreros(in_guerreros) {
        this.#guerreros = in_guerreros;
    }


    get muertos() {
        return this.#muertos;
    }

    set muertos(in_muertos) {
        this.#muertos = in_muertos;
    }

    get vivos() {
        return this.#vivos;
    }

    set vivos(in_vivos) {
        this.#vivos = in_vivos;
    }

    iniciarBatalla(casaA, casaB){
        if (this.#enCurso) {
            console.log("Ya hay una batalla en curso.");
        }else{
            if(casaA == casaB){
                console.log("una casa no puede enfrentarse a si misma");
            } else {

            console.log("Iniciamos la lucha...");

            console.log("Los guerreros que pelearán de la casa " + casaA.nombre + " serán los siguientes:");

            let guerrerosCasaA = casaA.arrayPersonaje.filter(personaje => personaje instanceof Guerrero);
            console.log(guerrerosCasaA);

            console.log("Los guerreros que pelearan de la casa " + casaB.nombre + " serán los siguientes:");
            let guerrerosCasaB = casaB.arrayPersonaje.filter(personaje => personaje instanceof Guerrero);
            console.log(guerrerosCasaB);

            let casaAvivo = guerrerosCasaA.some(guerrero => guerrero.vida > 0);
            let casaBvivo = guerrerosCasaB.some(guerrero => guerrero.vida > 0);

            if (!casaAvivo || !casaBvivo) {
                console.log("No se puede iniciar la batalla: ambas casas necesitan al menos un guerrero vivo.");
                
            }else{
                this.#enCurso = true;
                let contadorA = 0;
                let contadorB = 0;
                while(guerrerosCasaA.some(guerrero => guerrero.vida > 0) && guerrerosCasaB.some(guerrero => guerrero.vida > 0)){
                    let guerreroA = guerrerosCasaA.find(guerrero => guerrero.vida > 0);
                    let guerreroB = guerrerosCasaB.find(guerrero => guerrero.vida > 0);
                    console.log("nuevo enfrentamiento: " + guerreroA.nombre + " vs " +guerreroB.nombre);
                    guerreroA.atacar(guerreroB);

                    if(guerreroB.vida > 0){
                        guerreroB.atacar(guerreroA);
                    }

                    if (guerreroB.vida <= 0) {
                        contadorA++;
                        this.#muertos.push(guerreroB);
                    } 
                    
                    if (guerreroA.vida <= 0) {
                        contadorB++;
                        this.#muertos.push(guerreroA);
                    }
                    console.log(guerreroA.nombre + " " + guerreroA.vida + " || " + guerreroB.nombre + " " + guerreroB.vida);
                    console.log("");

                }

                this.#enCurso = false;
                
            

                

    
                if(contadorA > contadorB){
                    console.log("La batalla ha sido ganada por la casa " + casaA.nombre);
                    let casaAvivos = guerrerosCasaA.filter(guerrero => guerrero.vida > 0).map(guerrero => guerrero.nombre);
                    this.#vivos.push(casaAvivos);
                }else{
                    console.log("La batalla ha sido ganada por la casa " + casaB.nombre);
                    let casaBvivos = guerrerosCasaB.filter(guerrero => guerrero.vida > 0).map(guerrero => guerrero.nombre);
                    this.#vivos.push(casaBvivos);
                }
            }
            }
        }
     
    }
        
    mostrarGuerrerosMuertosEnBatalla(){

            console.log(this.#muertos);
        
    }  
    mostrarSupervivientes(){
        for(let vivo of this.#vivos){
            console.log(vivo);
        }
    }

    batallaFinal(casaStark, khaleesi, ejercitoCaminantes){
        let guerreros = [];

        for(let guerrero of casaStark.arrayPersonaje){
            if(guerrero instanceof Guerrero){
                guerreros.push(guerrero);
            }
        }
        for(let dragon of khaleesi.dragones){
            guerreros.push(dragon);
        }

        let guerrerosVivos = guerreros.some(guerrero => guerrero.vida > 0);
        let caminanteVivo = ejercitoCaminantes.some(caminante => caminante.vida > 0);

        if(!guerrerosVivos || !caminanteVivo){
            console.log("Los dos bandos tienen que tener minimo un combatiente");
        }else{
            let contadorGuerreros = 0;
            let contadorCaminantes = 0;
            while(guerreros.some(guerrero => guerrero.vida > 0) && ejercitoCaminantes.some(caminante => caminante.vida > 0)){
                 let guerrero = guerreros.find(guerrero => guerrero.vida > 0);
                 let caminante = ejercitoCaminantes.find(caminante => caminante.vida > 0);

                 guerrero.atacar(caminante);

                 if(caminante.vida > 0){
                    caminante.atacar(guerrero);
                 }

                 if(caminante.vida <= 0){
                    contadorGuerreros ++;

                 }

                 if(guerrero.vida <= 0){
                    contadorCaminantes ++;
                    ejercitoCaminantes.push(new CaminanteBlanco(guerrero.nombre, 40));
                    let indice = guerreros.indexOf(guerrero);
                    guerreros.splice(indice, 1);

                 }
                console.log(guerrero.nombre + " " + guerrero.vida + " || " + caminante.nombre + " " + caminante.vida);
                console.log("");

            }
            if(contadorGuerreros > contadorCaminantes){
                console.log("ganan los guerreros");
            }else{
                console.log("ganan los caminantes");
            }
        }

     
    }

    
}


    export default Batalla;
