function combinarNombresApellidos(nombres, apellidos) {
    let nombresApellidosCombinados = [];
    while (nombres.length > 0 && apellidos.length > 0) {
        let indiceNombre = Math.floor(Math.random() * nombres.length);
        let indiceApellido = Math.floor(Math.random() * apellidos.length);
        let nombreAleatorio = nombres[indiceNombre];
        let apellidoAleatorio = apellidos[indiceApellido];
        nombres.splice(indiceNombre, 1);
        apellidos.splice(indiceApellido, 1);
        let nombreFormateado = nombreAleatorio.charAt(0).toUpperCase() + nombreAleatorio.slice(1).toLowerCase();
        let apellidoFormateado = apellidoAleatorio.charAt(0).toUpperCase() + apellidoAleatorio.slice(1).toLowerCase();
        nombresApellidosCombinados.push(nombreFormateado + " " + apellidoFormateado);
    }

    return nombresApellidosCombinados;
}

// Arrays de nombres y apellidos
let nombres = ["juan", "maria", "pedro", "laura"];
let apellidos = ["gomez", "perez", "sanchez", "lopez"];

// Generar array combinado
let nombresApellidosCombinados = combinarNombresApellidos(nombres, apellidos);
console.log("Nombres y apellidos combinados de forma aleatoria:");
console.log(nombresApellidosCombinados);
