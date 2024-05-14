/*Declará una función llamada oneProperty que reciba un arreglo de objetos como
parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como 
propiedad al string pasado como parámetro.*/ 

function oneProperty(array, str){

    let regreso = array.map ((element) => ({[str]: element[str]}));
    console.log(regreso);
}

module.exports = oneProperty;