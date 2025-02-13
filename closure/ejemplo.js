function crearCajaDeAhorros() {
    let dinero = 0;

    return function(agregarDinero) {
        dinero += agregarDinero;
        console.log(`Tienes ahora $${dinero} en tu caja de ahorros.`)
    };
}

const miCaja = crearCajaDeAhorros(); // Creamos una nueva caja
miCaja(50); // Añadimos $50
miCaja(30); // Añadimos $30 más
miCaja(100)