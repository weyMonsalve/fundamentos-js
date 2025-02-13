function crearCRUDUsuarios() {
    let usuarios = [];

    return {
        crearUsuario: function(nombre, edad) {
            if (usuarios.some(usuario => usuario.nombre === nombre)) {
                console.log(`El suario ${nombre} ya existe`);
                return;
            }
            usuarios.push({ nombre, edad });
            console.log(`Usuario ${nombre} agragado con ${edad} años`);
        },

        leerUsuarios: function() {
            if (usuarios.length === 0) {
                console.log("No hay usuarios registrados");
            } else {
                console.log("Usuarios registrados", usuarios.map(u => `${u.nombre} (${u.edad} años)`).join(", "))
            }

        },

        actualizarUsuario: function(nombre, nuevaEdad) {
            let usuario = usuarios.find(u => u.nombre === nombre);

            if (usuario) {
                usuario.edad = nuevaEdad;
                console.log(`Usuario ${nombre} actualizado a ${nuevaEdad} años`);
            } else {
                console.log(`No se encontro el usuario ${nombre}`);
            }
        },

        eliminarUsuario: function(nombre) {
            const index = usuarios.findIndex(u => u.nombre === nombre);
            if (index !== -1) {
                usuarios.splice(index, 1);
                console.log(`Usuario ${nombre} eliminado`)
            } else {
                console.log(`No se encontro el usuario ${nombre}.`)
            }
        }



    };
}

const crudUsuario = crearCRUDUsuarios();

crudUsuario.crearUsuario("Luciana", 5);
crudUsuario.crearUsuario("Matias", 12);
crudUsuario.crearUsuario("Laura", 20);

crudUsuario.leerUsuarios();

crudUsuario.actualizarUsuario("Laura", 21);
crudUsuario.leerUsuarios();

crudUsuario.eliminarUsuario("Laura");
crudUsuario.leerUsuarios();