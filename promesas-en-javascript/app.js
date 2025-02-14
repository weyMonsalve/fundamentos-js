/*
QUE SON LAS PROMESAS = es la forma en la cual vamos a generar que nuestro codigo trabaje de manera asincona
es decir al mismo tiempo. Las promesas tienen 3 estado que son:
ESTADOS
1- pending -> es el estado pendiente que es cuando la promesa se va a crear.
2- fullfilled -> este estado va a venir cuando la promesa se resuelva.
3- rejected -> este es cuando la promesa no se resolvio.

las promesas manejan 2 tipos de callbacks.
CALLBACKS
1- resolve -> es cuando la promesa se resuelve de manera satisfactoria
2- rejec -> es cuando la promesa no se puede resolver. 

las promesas tambien manejan o tienen 2 metodos que son.
METODOS
1- then -> este metodo se ejecuta cuando la promesa se resuelve, una vez que la promesa esta lista 
    en el estado de  fullfilled y en el callback de resolve, entra a ejecutarse este metodo que es el then.
2- catch -> este metodo es lo que va asuceder cuando la promesa no se resuelve, y en el catch pdremos 
    obtener el error para poder imprimirlo y que nos pueda decir que es lo que esta pasando que hace que la promesa 
    no se resuelva.
*/

// EJEMPLO

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operatioSuccessfull = true;

        if (operatioSuccessfull) {
            resolve("La operacion fue exitosa.");
        } else {
            reject("Fallo la operacion.")
        }
    }, 2000);

})

promise
    .then((successMesage) => {
        console.log(successMesage);
    })

.catch((errorMesage) => {
    console.log(errorMesage);
});