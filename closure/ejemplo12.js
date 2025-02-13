function crearRegistroDeNombres() {
    let nombres = [];

    return {
        agregarNombre: function(nombre) {
            nombres.push(nombre);
            console.log(`${nombre} ha sido agregado`)
        },

        mostarNombres: function() {
            console.log("Nombres registrados:", nombres.join(", ") || "No hay nombres registrados.");
        },

        buscarNombres: function(nombre) {
            if (nombres.includes(nombre)) {
                console.log(`${nombre} Esta en la lista.`);
            } else {
                console.log(`${nombre} No esta en la lista.`)
            }
        }
    };
}

const registro = crearRegistroDeNombres();

registro.agregarNombre("Andres");
registro.agregarNombre("Wbeimar");
registro.agregarNombre("Matias");

registro.mostarNombres();

registro.buscarNombres("Andres");
registro.buscarNombres("Maria");