function login() {
    let user, pass;
    let intentosRestantes = 3;

    for (let i = 0; i < 3; i++) {
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;


    if (user == "Mercado" && pass == "1234") {
      // Credenciales correctas
        alert("¡Hola " + user + "! Bienvenida");
        alert("¡Felicitaciones, te has ganado un cupón de descuento!");
        window.location = "../index.html";
        break
    } else {

        if (intentosRestantes > 0) {
            if (user != "Mercado") {
                alert("Usuario incorrecto. Te quedan " + intentosRestantes + " intentos.");
            }
            if (pass != "1234") {
                alert("Contraseña incorrecta. Te quedan " + intentosRestantes + " intentos.");
            }
                document.getElementById("usuario").value = " ";
                document.getElementById("contraseña").value = " ";
        } else {
            alert("¡Lo siento! Has agotado tus intentos. Inténtalo de nuevo más tarde.");
            // Bloquear el formulario o redirigir a otra página (opcional)
        }
        intentosRestantes--
        }
    }
}
// alert ("Lo siento, debes registrarte para iniciar sesión")