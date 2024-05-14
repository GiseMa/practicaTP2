/* 
function abbrevName(nombre) {
    nombre = nombre.split(" ");
    let intials = nombre[0].charAt(0) + "." + nombre[1].charAt(0);
    console.log(intials);
    return intials.toUpperCase();
}
 */
function abbrevName(str){
    const initials = str
    .split(" ")
    .map((element) => element[0])
    .join(" ")
    .toUpperCase();
    console.log(initials);
}
module.exports = abbrevName;

/* const initials = str
.split(" ")
.map(nombre => nombre(0))
.join(".")
.toUpperCase();

console.log(initials); */