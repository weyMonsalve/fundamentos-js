// for await...of es una estructura de control en JavaScript utilizada para iterar sobre objetos iterables 
// asíncronos. Permite procesar elementos de forma secuencial, esperando la resolución de cada 
// elemento antes de pasar al siguiente.

// for await...of es una herramienta poderosa para trabajar con datos asíncronos en JavaScript. 
// Permite iterar sobre elementos de forma secuencial, esperando la resolución de cada elemento antes 
// de continuar, lo que simplifica el manejo de operaciones asíncronas en comparación con el uso de 
// promesas y bucles tradicionales.

// Diferencia con for...of:

// Mientras que for...of se utiliza para iterar sobre objetos iterables síncronos, for await...of está 
// diseñado específicamente para manejar iterables asíncronos.


// function fetchData() {
//   fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }

async function fetchData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {
    try {
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data.results);
        }
    } catch (error) {
        console.log(error);
    }
}