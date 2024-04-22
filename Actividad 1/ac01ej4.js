/*
Descripción:Escribe un programa que pida una frase y escriba:(30Pts)
• Cuantas veces aparece la letra “o”. Ejemplo Hola → 1
• Las vocales que aparecen.           Ejemplo Hola → 2
• Cuántas veces aparecen cada una de las vocales.Ejemplo Hola → o:1 , a:1
Desarrollador: Jefferson Poeta Duran
Fecha: 2024-04-21
Cambios: Ninguno
*/

function contarLetraO(frase) {
    let contadorO = 0;
    for (let letra of frase) {
        if (letra.toLowerCase() === 'o') {
            contadorO++;
        }
    }
    return contadorO;
}

function contarVocales(frase) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contadorVocales = 0;
    let contadorPorVocal = {};
    for (let letra of frase) {
        let letraMinuscula = letra.toLowerCase();
        if (vocales.includes(letraMinuscula)) {
            contadorVocales++;
            if (contadorPorVocal[letraMinuscula] === undefined) {
                contadorPorVocal[letraMinuscula] = 1;
            } else {
                contadorPorVocal[letraMinuscula]++;
            }
        }
    }
    return { totalVocales: contadorVocales, porVocal: contadorPorVocal };
}

// Solicitar frase al usuario
let frase = prompt("Ingrese una frase:");

// Contar letra 'o'
let cantidadO = contarLetraO(frase);
console.log("La letra 'o' aparece " + cantidadO + " veces en la frase.");

// Contar vocales y cuántas veces aparece cada una
let { totalVocales, porVocal } = contarVocales(frase);
console.log("Total de vocales en la frase:", totalVocales);
console.log("Apariciones por vocal:");
for (let vocal in porVocal) {
    console.log(vocal + ":" + porVocal[vocal]);
}
