// Este ciclo nos permite iterar sobre objetos enumerables, más especificamente sobre las 
// propiedades de estos objetos!

// sintaxis

// for in ----> objetos

// for (variable in objeto) {
//     codigo a ejecutar
// }

// EJEMPLOS

const listaDeCompras = {
    manzana: 5,
    mangos: 4,
    naranja: 6,
    uvas: 2
}
for (fruta in listaDeCompras) {
    console.log(fruta); // aqui imprimimos el objeto sin el valor
}

console.log("------------------") // separando los dos ejemplos

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`); // AQUI IMPRIMIMOS EL OBJETO Y EL VALOR
}