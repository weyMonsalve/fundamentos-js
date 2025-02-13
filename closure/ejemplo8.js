function crearContadorDeVisitas() {
    let visitas = 0;

    return function() {
        visitas++;
        console.log(`El numero de visitas son: ${visitas}`)
    };
}

const visitasPagina1 = crearContadorDeVisitas();
const visitasPagina2 = crearContadorDeVisitas();

visitasPagina1();
visitasPagina1();
visitasPagina2();
visitasPagina1();