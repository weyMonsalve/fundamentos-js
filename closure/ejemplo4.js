function crearCarritoDeCompras() {
    let productos = []; // 🔹 Lista privada dentro del closure

    return {
        agregarProducto: function(nombre, precio) {
            if (precio > 0) {
                productos.push({ nombre, precio });
                console.log(`✅ Producto agregado: ${nombre} ($${precio})`);
            } else {
                console.log("⚠️ El precio debe ser mayor a 0.");
            }
        },
        eliminarProducto: function(nombre) {
            let indice = productos.findIndex(producto => producto.nombre === nombre);
            if (indice !== -1) {
                let productoEliminado = productos[indice].nombre; // Guarda el nombre antes de eliminarlo
                productos.splice(indice, 1); // Ahora solo eliminamos el producto
                console.log(`🗑️ Producto eliminado: ${productoEliminado}`);
            } else {
                console.log("⚠️ Producto no encontrado.");
            }
        },
        obtenerTotal: function() {
            let total = productos.reduce((suma, producto) => suma + producto.precio, 0);
            return `💰 Total del carrito: $${total}`;
        },
        verCarrito: function() {
            if (productos.length === 0) {
                console.log("🛒 Carrito vacío.");
            } else {
                console.log("🛒 Carrito:");
                productos.forEach(producto => console.log(`  - ${producto.nombre}: $${producto.precio}`));
            }
        }
    };
}

// 🔹 Ejemplo de uso:
const miCarrito = crearCarritoDeCompras();

miCarrito.agregarProducto("Camisa", 1200);
miCarrito.agregarProducto("Pantalon", 2500);
miCarrito.verCarrito();
console.log(miCarrito.obtenerTotal());

miCarrito.eliminarProducto("Camisa");
miCarrito.verCarrito();
console.log(miCarrito.obtenerTotal());