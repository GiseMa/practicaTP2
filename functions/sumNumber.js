
function sumNumber(numeros){
    const suma = numeros.reduce(
        (total, num) => total + num, 0);
    console.log("La suma de todos los números en el array es: " + suma);
        return suma;
}

module.exports = sumNumber;