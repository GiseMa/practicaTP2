const numeros = [10, 5, 20, 15];
let nombre = "Gise Maravankin";



const sumNumber = require("./0404/functions/sumNumber")
sumNumber(numeros)

const searchNumber = require("./0404/functions/searchNumber")
searchNumber(numeros);

const abbrevName = require("./0404/functions/abbrevName")
abbrevName("Gise Maravankin");


const oneProperty = require("./0404/functions/oneProperty");
let arreglo = [{ name: 'Kuka', edad: 3 }, { name: 'Canela', edad: 4 }];
oneProperty(arreglo, 'edad');

const searchStudents = require("./0404/functions/searchStudents");

const estudiantes = [{ nombre: "Juan", edad: 17, curso: "Primero" },
{ nombre: "Ana", edad: 18, curso: "Segundo" },
{ nombre: "Carlos", edad: 16, curso: "Primero" },
{ nombre: "María", edad: 19, curso: "Tercero" },];

searchStudents(estudiantes);
