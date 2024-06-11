const boton = document.getElementById("login");
boton.addEventListener("click", mostrarPrompt);

const credentials = [
    { usuario: "Mercado", contrasena: "1234" },
];

function mostrarPrompt() {
    const usuario = prompt("Ingrese su usuario:");
    const contrasena = prompt("Ingrese su contraseña:");

    let usuarioEncontrado = null;

    for (const user of credentials) {
        if (user.usuario === usuario && user.contrasena === contrasena) {
        usuarioEncontrado = user;
        break;
        }
    }

    if (usuarioEncontrado) {
        alert(`¡Hola ${usuarioEncontrado.usuario}! Bienvenido, disfruta de tu estadía aquí.`);
    } else {
        alert("No estas registrado en esta web");
    }
}