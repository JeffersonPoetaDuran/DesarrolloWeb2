/*
Descripción:Escribir un programa donde nos solicite un usuario y contraseña, validar la contraseña con
“D153n0W3b2” y el usuario debería ser cualquiera de los siguientes nombres: juan, pedro, maria, raul.
Desarrollador: Jefferson Poeta Duran
Fecha: 2024-04-21
Cambios: Ninguno
*/

// Función principal para ejecutar el programa
function ejecutarEjercicio1() {
    // Solicitar al usuario que ingrese su nombre de usuario
    var usuario = prompt("Por favor, ingresa tu nombre de usuario:");

    // Validar si el usuario ingresado es válido
    if (validarUsuario(usuario)) {
        // Solicitar al usuario que ingrese su contraseña
        var contrasena = prompt("Por favor, ingresa tu contraseña:");

        // Validar la contraseña ingresada
        if (validarContrasena(contrasena)) {
            alert("¡Inicio de sesión exitoso! Bienvenido, " + usuario + ".");
        } else {
            alert("La contraseña ingresada es incorrecta.");
        }
    } else {
        alert("El usuario ingresado no es válido.");
    }
}

// Función para validar el nombre de usuario
function validarUsuario(usuario) {
    // Lista de usuarios válidos
    var usuariosValidos = ["juan", "pedro", "maria", "raul"];

    // Verificar si el usuario ingresado está en la lista de usuarios válidos
    return usuariosValidos.includes(usuario.toLowerCase());
}

// Función para validar la contraseña
function validarContrasena(contrasena) {
    // Contraseña válida
    var contrasenaValida = "D153n0W3b2";

    // Verificar si la contraseña ingresada es igual a la contraseña válida
    return contrasena === contrasenaValida;
}

// Llamar a la función principal para iniciar el programa
ejecutarEjercicio1();
