/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/


const userDatabase = [{
        username: "andres",
        password: "123"
    },
    {
        username: "caro",
        password: "456"
    },
    {
        username: "mariana",
        password: "789"
    },
];

const userTimeline = [{
        username: "Estefany",
        timeline: "Me encanta Javascript",
    },
    {
        timeline: "Oscar",
        timeline: "Debeloper es lo mejor",
    },
    {
        username: "Mariana",
        timeline: "A mi me gusta mas el cafe que el te",
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quero trabajar"
    },
];

const username = prompt("Cual es tu usuario");
const password = prompt("Cual es tu contraseña");

function usuarioExistente(username, password) {
    for (let i = 0; i < userDatabase.length; i++) {
        if (
            userDatabase[i].username === username && userDatabase[i].password === password) {
            return true;
        }
    }
    return false;
}

function singIn(username, password) {
    if (usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`),
            console.log(userTimeline);
    } else {
        alert("Uuups, usuario o contraseña incorrectos!");
    }
}
singIn(username, password);