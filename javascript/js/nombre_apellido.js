const NELEMENTOS=20;


let nombres =['Juan', 'María', 'José', 'Ana', 'Luis', 'Laura', 'Carlos', 'Sandra', 'Diego', 'Gabriela', 'Daniel', 'Andrea', 'Roberto', 'Patricia', 'Jorge', 'Natalia', 'Miguel', 'Alejandra', 'Fernando', 'Adriana'];


let apellidos =['Pérez', 'González', 'Rodríguez', 'Hernández', 'Martínez', 'Gómez', 'López', 'Díaz', 'Sánchez', 'Ramírez', 'Torres', 'Vázquez', 'Castro', 'Núñez', 'Morales', 'Ruiz', 'Silva', 'Medina', 'Ortega'];

let nomape=[];
function generarNombre(){
    let nomal, apeal;
    for (let i=0;i<NELEMENTOS;i++){
        nomal=nombres[Math.floor(Math.random()*nombres.length)];
        apeal=apellidos[Math.floor(Math.random()*apellidos.length)];
        nomape.push(nomal+" "+apeal);

    }
}
function imprimi(){
    nomape.forEach(persona=>{
        console.log(persona+"\n");
    });
}
generarNombre();
imprimi();
/*
let nombres = ['Juan', 'María', 'José', 'Ana', 'Luis', 'Laura', 'Carlos', 'Sandra', 'Diego', 'Gabriela', 'Daniel', 'Andrea', 'Roberto', 'Patricia', 'Jorge', 'Natalia', 'Miguel', 'Alejandra', 'Fernando', 'Adriana'];
let apellidos = ['Pérez', 'González', 'Rodríguez', 'Hernández', 'Martínez', 'Gómez', 'López', 'Díaz', 'Sánchez', 'Ramírez', 'Torres', 'Vázquez', 'Castro', 'Núñez', 'Morales', 'Ruiz', 'Silva', 'Medina', 'Ortega'];

const NELEMENTOS = nombres.length;

let nomape = [];

function generarNombre() {
    for (let i = 0; i < NELEMENTOS; i++) {
        const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
        console.log(`${nombreAleatorio} ${apellidoAleatorio}`);
    }
}

generarNombre();


/*
let nombres = ['Juan', 'María', 'José', 'Ana', 'Luis', 'Laura', 'Carlos', 'Sandra', 'Diego', 'Gabriela', 'Daniel', 'Andrea', 'Roberto', 'Patricia', 'Jorge', 'Natalia', 'Miguel', 'Alejandra', 'Fernando', 'Adriana'];
let apellidos = ['Pérez', 'González', 'Rodríguez', 'Hernández', 'Martínez', 'Gómez', 'López', 'Díaz', 'Sánchez', 'Ramírez', 'Torres', 'Vázquez', 'Castro', 'Núñez', 'Morales', 'Ruiz', 'Silva', 'Medina', 'Ortega'];

function obtenerElementoAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generarNombresCompletos(cantidad) {
    const nombresCompletos = [];
    for (let i = 0; i < cantidad; i++) {
        const nombre = obtenerElementoAleatorio(nombres);
        const apellido = obtenerElementoAleatorio(apellidos);
        nombresCompletos.push(`${nombre} ${apellido}`);
    }
    return nombresCompletos;
}

let nombresAleatorios = generarNombresCompletos(15);
console.log(nombresAleatorios);





/*
Generar un array y tomar como base los siguientes arrays de nombres y apellidos, los elementos deben ser
agregados randomicamente tomando como base una cantidad de elementos.
Ejemplo:
Crear un arraya de nombres:
nombres: ['Juan','MAría','Pedro', 'Luis', 'Ana', 'Carlos','Laura......'];
Crear un array de apellidos:
apellidos: ['Gómoz', 'Rodriguez','Fernández', 'López','Martínes', 'Gonzales'.......];

NombresCompletos = ['MAría Fernández','Luis López','Laura Gómez'.....]
*/