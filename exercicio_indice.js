// indice de maior valor e menor valor no array

let numeros = [10,20,68,12,5,35,89,1,7]

let maiorIndice = Math.max.apply(null, numeros )
console.log(numeros.indexOf(maiorIndice));

let menorIndice = Math.min.apply(null, numeros )
console.log(numeros.indexOf(menorIndice));

