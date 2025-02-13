const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el numero secreto entre 1 y 10"));

console.log(`Este es el numro con el que juegas ${numeroJugador}`);


if (numeroJugador === numeroSecreto) {
    console.log(prompt("Felicidades, adivinaste el numero secreto"));
} else if (numeroJugador < numeroSecreto) {
    console.log(prompt("El numero es demasiado bajo, intenta de nuevo"));
} else {
    console.log(prompt("El numero es muy alto, intenta de nuevo"));
}