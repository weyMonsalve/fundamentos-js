function crearListaDeTareas() {
    let tareas = [];

    return {
        agregarTarea: function(tarea) {
            tareas.push(tarea);
            console.log(`${tarea} ha sido agregada`)
        },

        mostrarTareas: function() {
            console.log("Tareas registradas:", tareas.join(", ") || "No hay tareas registrados.");
        },

        eliminarTarea: function(tarea) {
            const index = tareas.indexOf(tarea);

            if (index !== -1) {
                tareas.splice(index, 1);
                console.log(`Tarea eliminada ${tarea}`)
            } else {
                console.log(`No se encontro la tarea: ${tarea}`);
            }
        },

        buscarTarea: function(tarea) {
            if (tareas.includes(tarea)) {
                console.log(`${tarea} Esta en la lista.`);
            } else {
                console.log(`${tarea} No esta en la lista.`)
            }
        }
    };
}

const lista = crearListaDeTareas();

lista.agregarTarea("Realizar curso javascript en platzi");
lista.agregarTarea("Reunion con andres");
lista.agregarTarea("Hacer deporte");

lista.mostrarTareas();

lista.eliminarTarea("Hacer deporte");
lista.mostrarTareas();
lista.buscarTarea("Reunion con andres");