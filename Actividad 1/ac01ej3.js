/*
Descripción: Escribir un programa para imprimir N numeros primos generados de forma aleatorio y
cargado en un array que sean menores al 110.
Desarrollador: Jefferson Poeta Duran
Fecha: 2024-04-21
Cambios: Ninguno
*/

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generarPrimos(N) {
    let primos = [];
    while (primos.length < N) {
        let num = Math.floor(Math.random() * 108) + 2; // Genera números aleatorios entre 2 y 109
        if (esPrimo(num)) {
            primos.push(num);
        }
    }
    return primos;
}

// Ejemplo de uso:
let cantidadNumerosPrimos = 10; // Cambiar por la cantidad deseada
let numerosPrimos = generarPrimos(cantidadNumerosPrimos);
console.log("Números primos generados:", numerosPrimos);
