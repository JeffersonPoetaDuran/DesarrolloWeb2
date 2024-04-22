function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generarPrimos() {
    let N = parseInt(prompt("Ingrese la cantidad de números primos que desea generar:"));
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
let numerosPrimos = generarPrimos();
console.log("Números primos generados:", numerosPrimos);
