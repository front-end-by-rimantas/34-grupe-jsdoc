/**
 * Masinos degalu sanaudu charakteristikos priklausomai nuo vaziavimo aplinkybiu.
 * @param {string} name Automobilio pavadinimas
 * @param {number} volume Degalu bako talpa litrais
 * @param {number} consuption1 Degalu sanaudos magistraleje 100-ui km
 * @param {number} consuption2 Degalu vidutines sanaudos 100-ui km
 * @param {number} consuption3 Degalu sanaudos mieste 100-ui km
 * @returns {string} Sakinys
 */
function car(name, volume, consuption1, consuption2, consuption3) {
    const dist = 100;
    const distance1 = distance(volume, consuption1);
    const distance2 = distance(volume, consuption2);
    const distance3 = distance(volume, consuption3);

    return `${name} su ${volume}l baku, gali nuvaziuoti ${distance1}km (magistralej, kai sanaudos yra ${consuption1}l/${dist}km), ${distance2}km (vidutiniskai, kai sanaudos yra ${consuption2}l/${dist}km) ir ${distance3}km (mieste, kai sanaudos yra ${consuption3}l/${dist}km).`;
}

/**
 * Vidutinio atstumo apskaiciavimas pagal kuro bako dydi ir kuro sanaudas
 * @param {number} volume Kuro bako talpa
 * @param {number} consuption Kuro sanaudos 100-ui km
 * @param {number} distance Kokiam atstumui skaiciuojamos kuro sanaudos
 * @returns 
 */
function distance(volume, consuption, distance = 100) {
    return Math.floor(volume * distance / consuption);
}

module.exports = car;