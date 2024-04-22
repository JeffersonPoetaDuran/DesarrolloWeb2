/*
Descripción: Escribir un programa donde nos de la bien venida y nos indique en que navegador estamos ejecutando.
Desarrollador: Jefferson Poeta Duran
Fecha: 2024-04-21
Cambios: Ninguno
*/

// Código JavaScript
function mostrarBienvenida() {
    // Seleccionamos el elemento con el id "bienvenida" y actualizamos su contenido
    document.getElementById("bienvenida").innerHTML = "¡Bienvenido!.";
}

// Función para detectar el navegador actual
function detectarNavegador() {
    // Obtenemos el user agent del navegador
    var userAgent = navigator.userAgent;

    // Verificamos si el user agent contiene alguna cadena característica de un navegador específico
    if (userAgent.indexOf("Chrome") != -1) {
        return "Google Chrome";
    } else if (userAgent.indexOf("Firefox") != -1) {
        return "Mozilla Firefox";
    } else if (userAgent.indexOf("Safari") != -1) {
        return "Safari";
    } else if (userAgent.indexOf("Edge") != -1) {
        return "Microsoft Edge";
    } else if (userAgent.indexOf("Opera") != -1 || userAgent.indexOf("OPR") != -1) {
        return "Opera";
    } else if (userAgent.indexOf("Trident") != -1) {
        return "Internet Explorer";
    } else {
        return "Navegador desconocido";
    }
}

// Función principal para ejecutar el programa
function ejecutarPrograma() {
    mostrarBienvenida();
    var navegador = detectarNavegador();
    // Seleccionamos el elemento con el id "resultado" y actualizamos su contenido
    document.getElementById("resultado").innerHTML = "Estás utilizando el navegador: " + navegador;
}

// Llamamos a la función principal para iniciar el programa
ejecutarPrograma();
