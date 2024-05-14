/*Crear una función que reciba por parámetros un array y haga las siguientes tareas:

Filtrado: Crea un nuevo array que contenga solo a los estudiantes que están en “Primero”.
Transformación: A partir del array filtrado, crea un nuevo array que contenga solo los nombres de los estudiantes.
Ordenación: Ordena el array de nombres alfabéticamente.
Impresión: Imprime el array ordenado en la consola.*/ 

const oneProperty = require("./oneProperty");

function searchStudents(array){

    const students = array
    .filter((element) => element.curso === "Primero")
    .map((student) => student.nombre)
    .sort();
    console.log(students);}
