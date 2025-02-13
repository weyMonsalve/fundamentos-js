// sintaxis

// do {
//     codigo a ejecutar
// } while (condicion)

// Ejemplo

let contador = 0;

do {
    console.log(contador)
    contador++;
} while (contador < 10);

console.log("------------------------------------");

let a = 0,
    b = 1,
    count = 0;
const limit = 10;

do {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    count++;
} while (count < limit);

console.log("----------------------------");


let i = 1;

do {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log("ParImpar");
    } else if (i % 2 === 0) {
        console.log("Par");
    } else if (i % 3 === 0) {
        console.log("Impar");
    } else {
        console.log(i);
    }
    i++;
} while (i <= 20);