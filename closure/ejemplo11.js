function crearVotacion() {
    let votos = {};

    return {
        votar: function(opcion) {
            if (!votos[opcion]) {
                votos[opcion] = 0;
            }
            votos[opcion]++;
            console.log(`Voto registrado para: ${opcion}`);
        },
        consultarVotos: function() {
            console.log("Resultados:", votos);
        },
        reiniciarVotos: function() {
            votos = {};
            console.log("Votación reiniciada.");
        }
    };
}


const votacion = crearVotacion();

votacion.votar("Opción A");
votacion.votar("Opción B");
votacion.votar("Opción A");

votacion.consultarVotos();

votacion.reiniciarVotos();
votacion.consultarVotos();