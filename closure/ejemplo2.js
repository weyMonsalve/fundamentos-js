function crearContador() {
    let contador = 0; // 1️⃣ Variable privada para almacenar el estado del contador

    return { // 2️⃣ Devolvemos un objeto con métodos para interactuar con el contador
        incrementar: function(cantidad = 1) { // 3️⃣ Método para aumentar el contador
            contador += cantidad;
            console.log("Nuevo valor:", contador);
            return contador;
        },
        decrementar: function(cantidad = 1) { // 4️⃣ Método para disminuir el contador
            contador -= cantidad;
            console.log("Nuevo valor:", contador);
            return contador;
        },
        obtenerValor: function() { // 5️⃣ Método para obtener el valor actual del contador
            return contador;
        }
    };
}

// Ejemplo de uso:
const contador = crearContador();

console.log(contador.obtenerValor()); // 🔹 0
contador.incrementar(50);
contador.decrementar(10);