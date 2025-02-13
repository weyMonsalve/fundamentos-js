function crearBanco() { // este es el clousure
    let saldo = 0; // Variable privada dentro del closure

    return {
        depositar: function(cantidad) {
            if (cantidad > 0) {
                saldo += cantidad; // Aumenta el saldo
                console.log(`Depósito exitoso. Saldo actual: $${saldo}`);
            } else {
                console.log("La cantidad a depositar debe ser mayor a 0.");
            }
        },
        retirar: function(cantidad) {
            if (cantidad > saldo) {
                console.log(`Fondos insuficientes. Saldo actual: $${saldo}`);
            } else if (cantidad > 0) {
                saldo -= cantidad; //  Disminuye el saldo
                console.log(`Retiro exitoso. Saldo actual: $${saldo}`);
            } else {
                console.log("La cantidad a retirar debe ser mayor a 0.");
            }
        },
        verSaldo: function() {
            console.log(`Saldo actual: $${saldo}`); //  Muestra el saldo
            return saldo;
        }
    };
}

// 🔹 Ejemplo de uso:
const miCuenta = crearBanco();

miCuenta.depositar(500);
miCuenta.retirar(450);
miCuenta.depositar(0);