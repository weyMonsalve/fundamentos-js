function crearGeneradorDeNumeros() {
    let numero = 0;

    return function() {
        numero++;
        console.log(`Numero generado: ${numero}`)
    };
}

const generador1 = crearGeneradorDeNumeros();
const generador2 = crearGeneradorDeNumeros();

generador1();
generador1();
generador2();
generador1();
generador2();