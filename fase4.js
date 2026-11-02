import Arma from "./clases/Arma.js";
import Casa from "./clases/Casa.js";
import Guerrero from "./clases/personajesEspeciales/Guerrero.js";
import Consejero from "./clases/personajesEspeciales/Consejero.js";
import Khaleesi from "./clases/personajesEspeciales/Khaleesi.js";
import Dragon from "./clases/personajesEspeciales/Dragon.js";
import CaminanteBlanco from "./clases/personajesEspeciales/CaminanteBlanco.js";
import Batalla from "./clases/Batalla.js";
// --------------------------------------------------
// 1. Crear casas y armas
// --------------------------------------------------
const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");
const garra = new Arma("Garra", 50, "acero valyrio");
const hacha = new Arma("Hacha del Norte", 40, "hierro");

// --------------------------------------------------
// 2. Crear guerreros de la Casa Stark
// --------------------------------------------------
const jon = new Guerrero("Jon Snow", 25, casaStark, garra);
const tormund = new Guerrero("Tormund", 30, casaStark, hacha);
const edd = new Guerrero("Edd", 28, casaStark, hacha);
casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(tormund);
casaStark.agregarMiembro(edd);

// --------------------------------------------------
// 3. Crear a Khaleesi y sus dragones
// --------------------------------------------------
const tyrion = new Consejero("Tyrion Lannister", 30, casaLannister, "Especialidad");
const drogon = new Dragon("Drogon", 60, "fuego");
const viserion = new Dragon("Viserion", 55, "fuego");
const rhaegal = new Dragon("Rhaegal", 50, "fuego");
const khaleesi = new Khaleesi("Daenerys Targaryen", 29, "Casa Targaryen",[drogon, viserion, rhaegal],tyrion);

// --------------------------------------------------
// 4. Crear ejército de Caminantes Blancos
// --------------------------------------------------
const caminante1 = new CaminanteBlanco("Caminante 1", 35);
const caminante2 = new CaminanteBlanco("Caminante 2", 40);
const caminante3 = new CaminanteBlanco("Caminante 3", 30);
const caminante4 = new CaminanteBlanco("Caminante 4", 50);

const ejercitoCaminantes = [caminante1, caminante2, caminante3, caminante4];

// --------------------------------------------------
// 5. Función para iniciar la batalla final
// --------------------------------------------------
const batallaFinal = new Batalla();
batallaFinal.batallaFinal(casaStark, khaleesi, ejercitoCaminantes);


