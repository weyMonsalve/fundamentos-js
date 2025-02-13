function crearListaDeTareas() {
    let tareas = []; // Variable privada dentro del closure

    return {
        agregarTarea(tarea) {
            tareas.push(tarea);
            console.log(`Tarea "${tarea}" agregada.`);
        },

        mostrarTareas() {
            console.log("Lista de tareas:", tareas.length > 0 ? tareas : "No hay tareas.");
        },

        eliminarTarea(tarea) {
            const indice = tareas.indexOf(tarea);
            if (indice !== -1) {
                tareas.splice(indice, 1);
                console.log(`Tarea "${tarea}" eliminada.`);
            } else {
                console.log(`La tarea "${tarea}" no existe en la lista.`);
            }
        }
    };
}

// Crear una nueva lista de tareas
const lista = crearListaDeTareas();

lista.agregarTarea("Comprar pan");
lista.agregarTarea("Hacer ejercicio");
lista.mostrarTareas(); // ["Comprar pan", "Hacer ejercicio"]

lista.eliminarTarea("Comprar pan");
lista.mostrarTareas(); // ["Hacer ejercicio"]

lista.eliminarTarea("Lavar el auto"); // "La tarea 'Lavar el auto' no existe en la lista."