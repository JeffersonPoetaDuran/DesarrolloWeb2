/*
let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b: "+a);
a=11;
a+=b;
console.log("a+=b: "+a);
a++;
console.log("a++: "+a);
a--;
console.log("a--: "+a);

if ((a%2)==0)
    console.log("a es PAR")
else
    console.log("a es IMPAR")
console.log(a+b+Number(5));*/
//Generar un array de 10 elementos.//Nombre: "Juan" nota: randomico entre 20-100.//Mostrar la nota mayor y promedio
// Generar un array de 10 elementos
// Generar un array de 10 elementos

// Generar un array de 10 elementos
// Generar un array de 10 elementos
// Generar un array de 10 elementos
// Generar un array de 10 elementos
// Generar un array de 10 elementos con notas aleatorias entre 20 y 100
// Generar un array de 10 elementos con notas aleatorias entre 20 y 100
// Función para generar un nombre aleatorio de una lista de nombres
// Función para generar un nombre aleatorio de una lista de nombres, excluyendo "Juan"
function generarNombre() {
    const nombres = ['Pedro', 'María', 'Luis', 'Ana', 'Carlos', 'Laura', 'Diego', 'Sofía', 'Andrés'];
    return nombres[Math.floor(Math.random() * nombres.length)];
}

// Generar un array de 10 elementos con notas aleatorias entre 20 y 100 y nombres aleatorios
let estudiantes = Array.from({ length: 10 }, (_, index) => ({
    nombre: index === 0 ? 'Juan' : generarNombre(),
    nota: Math.floor(Math.random() * (100 - 20 + 1)) + 20
}));

// Ordenar estudiantes por nota de mayor a menor
estudiantes.sort((a, b) => b.nota - a.nota);

// Encontrar la nota mayor y el nombre del estudiante
let { nombre: nombreMayorNota, nota: notaMayor } = estudiantes[0];

// Encontrar la nota menor y el nombre del estudiante
let { nombre: nombreMenorNota, nota: notaMenor } = estudiantes[estudiantes.length - 1];

// Calcular el promedio de las notas
let promedio = estudiantes.reduce((suma, estudiante) => suma + estudiante.nota, 0) / estudiantes.length;

// Mostrar los nombres y las notas de los estudiantes
console.log("Nombres y notas de los estudiantes ordenados por nota de mayor a menor:");
estudiantes.forEach((estudiante, index) => console.log(`Estudiante ${index + 1}: ${estudiante.nombre} - Nota: ${estudiante.nota}`));

// Mostrar el nombre del estudiante con la nota mayor, la nota mayor, el nombre del estudiante con la nota menor y la nota menor
console.log(`Estudiante con la nota mayor: ${nombreMayorNota}, Nota mayor: ${notaMayor}`);
console.log(`Estudiante con la nota menor: ${nombreMenorNota}, Nota menor: ${notaMenor}`);
console.log(`Promedio de notas: ${promedio}`);
