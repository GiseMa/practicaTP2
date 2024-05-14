function searchNumber(numeros) {

    let numeroMasGrande = 0;

    for (let i = 0; i < numeros.length; i++) {
        const num = numeros[i];
      if (num > numeroMasGrande) {
        numeroMasGrande = num;
      }
    }
    console.log("El numero mas grande es " + numeroMasGrande)
    return numeroMasGrande;
  }

  module.exports=searchNumber;