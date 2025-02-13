function crearCajaAhorro() {
    let saldo = 0;

    return function(cantidad) {
        saldo += cantidad;
        console.log(`Saldo actual: ${saldo}`)
    };
}

const miCaja = crearCajaAhorro();
const tuCaja = crearCajaAhorro();

miCaja(100);
tuCaja(20);