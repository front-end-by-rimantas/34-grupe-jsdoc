const sum = require("./js/sum.js");
const chat = require("./js/chat.js");
const studentAverage = require("./js/studentAverage.js");
const car = require("./js/car.js");

const pirmas = 7;
const antras = 5;
const r = sum(pirmas, antras);

const petrasLabas = chat('Petras', 'labas');

const m = studentAverage('Ona', [10, 2, 8, 4]);

const volvo = car('Volvo XC90', 60, 6, 7, 8);

// Volvo XC90 su 60l baku, gali nuvaziuoti 1000km (magistralej, kai sanaudos yra 6l/100km), 857km (vidutiniskai, kai sanaudos yra 7l/100km) ir 750km (mieste, kai sanaudos yra 8l/100km).
console.log(volvo);

const audi = car('Audi 80', 50, 8, 10, 12);

// Audi 80 su 50l baku, gali nuvaziuoti 625km (magistralej, kai sanaudos yra 8l/100km), 500km (vidutiniskai, kai sanaudos yra 10l/100km) ir 416km (mieste, kai sanaudos yra 12l/100km).
console.log(audi);