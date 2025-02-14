// Simulación de una base de datos de usuarios
const usuarios = [
    { usuario: "admin", contraseña: "1234", timeline: "Bienvenido a tu timeline, Admin." },
    { usuario: "usuario1", contraseña: "abcd", timeline: "Aquí está tu timeline, Usuario1." }
];

// Función para validar el inicio de sesión
function validarLogin() {
    const usuarioInput = document.getElementById("usuario").value;
    const contraseñaInput = document.getElementById("contraseña").value;
    const mensaje = document.getElementById("mensaje");
    const timeline = document.getElementById("timeline");

    // Buscar usuario en la base de datos
    const usuarioValido = usuarios.find(user => user.usuario === usuarioInput && user.contraseña === contraseñaInput);


    if (usuarioValido) {
        mensaje.textContent = `Bienvenido, ${usuarioValido.usuario}!`;
        mensaje.style.color = "green";
        timeline.textContent = "";
    } else {
        mensaje.textContent = "Error: Usuario o contraseña incorrectos.";
        mensaje.style.color = "red";
        timeline.textContent = "";
    }
}