// El bucle for...of en JavaScript se usa para iterar sobre elementos de estructuras iterables como 
// arreglos, cadenas, Map, Set y otros objetos iterables.

// sintaxis 

// for of arrays, strings [algo]

// for (variable of objeto) {
//     codigo a ejecutar
// }

let canasta = ["manzana", "pera", "naranja", "uva"];

for (fruta of canasta) {
    console.log(fruta);
}



let canasta1 = ["manzana", "pera", "naranja", "uva", "kiwi"];

//Inicialización del contador: se inicializa en 1, se enumera las frutas
let i = 1;

//Este bucle 'for...of' recorre cada elemento del array en cada iteración 
for (fruta1 of canasta) {
    console.log(`${i}. ${fruta1}`);
    i++; //Después de imprimir cada fruta 'i' se incrementa en 1 en la siguiente iteración 
}
console.log(fruta1);