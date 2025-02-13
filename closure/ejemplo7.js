function crearContadorDeClics() {
    let clics = 0;

    return function() {
        clics++;
        console.log(`Clics ${clics}`)
    };
}

const contadorBoton1 = crearContadorDeClics();
const contadorBoton2 = crearContadorDeClics();

contadorBoton1();
contadorBoton1();
contadorBoton2();
contadorBoton1();
contadorBoton2();
contadorBoton1();