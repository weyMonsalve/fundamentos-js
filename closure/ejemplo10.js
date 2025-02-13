function crearCajaDeAhorros() {
    let saldo = 0;

    return {
        depositar: function(cantidad) {
            saldo += cantidad;
            console.log(`Has depositado: $${cantidad}`)
        },

        retirar: function(cantidad) {
            saldo -= cantidad;
            console.log(`Has retirado: ${cantidad}`)
        },
        consultarSaldo: function() {
            console.log(`Saldo actual: ${saldo}`)
        }
    };
}

miCaja = crearCajaDeAhorros();
otraCaja = crearCajaDeAhorros();

miCaja.depositar(500);
miCaja.consultarSaldo();
miCaja.retirar(200);
miCaja.consultarSaldo();

otraCaja.depositar(100);
otraCaja.consultarSaldo();