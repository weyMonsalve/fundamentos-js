const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2025,
    motor: {
        tipo: "Gasolina",
        cilindro: 4,
    },
    encender() {
        console.log(`El ${carro.marca} ${carro.modelo} está encendido.`)
    },
};

// Imprimamos el objeto
console.log(carro);

// Imprimamos la propiedad modelo
console.log(carro.modelo);

// Imprimamos el método encender
carro.encender();
//
//
//
//
//
// Agregamos una propiedad al objeto (color)
carro.color = "Rojo";

console.log(carro.color);


// Agregamos un método al objeto (tocar bocina)
carro.tocarBocina = () => {
    console.log("¡Beep beep!");
};

carro.tocarBocina();

// Acceder a una propiedad de un objeto anidado (tipo de motor)
console.log(carro.motor.tipo);

//
//
//
//
//
//
// Eliminar una propiedad del objeto (color)
delete carro.color;

console.log(carro.color);

// Eliminar un método del objeto (tocar bocina)
delete carro.tocarBocina;

console.log(carro.tocarBocina);