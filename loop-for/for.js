// El bucle for en JavaScript es una estructura de control que se utiliza para ejecutar un 
// bloque de código repetidamente, generalmente con un contador que se incrementa o decrementa en cada 
// iteración. Es uno de los bucles más comunes y versátiles en la programación.

// Sintaxis del Bucle for

// for (variable; condicion; incremento) {
//     codigo a ejecutar
// }


let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}



animals = ['perro', 'gato', 'loro']
for (let i of animals) {
    console.log(i)
}



let rango = [0, 1, 2, 3, 4, 45, 7];
for (let i of rango) { // para iterar los valores de la lista o variable
    console.log(i);
}

for (let i = 0; i < 8; i++) {
    console.log(i)
}