//Variables
let notas=[{nombre: 'Juan ', nota:0},
            {nombre: 'Zahir', nota:0},
            {nombre: 'Pedro', nota:0},
            {nombre: 'Sofia', nota:0},
            {nombre: 'Jefferson', nota:0},
            {nombre: 'Naidar', nota:0},
            {nombre: 'Leo', nota:0},
            {nombre: 'Andres', nota:0},
            {nombre: 'Oscar', nota:0},
            {nombre: 'Jose', nota:0},];

function genRAndomico($max, $min){
    return Math.floor(Math.random()*($max-$min+1)+2);
}
function cargarNotas(){
    notas.forEach(nota=>{
        nota.nota=genRAndomico(10,2);
    })
}   
//Generar la funcion fclasificar()
function impNotas(){
    notas.forEach(notas=>{
        console.log(notas.nombre+" - "+nota.nota+ ": "+fclasificar(nota.nota)+"\n");
    });
}
function fclasificar(){
    let clasificacion;
        switch (nota) {
            case 2: case 3: case 4:
                clasificacion = 'Insuficiente';
                break;
            case 5: case 6:
                clasificacion = 'Suficiente';
                break;
            case 7: case 8:
                clasificacion = 'Bien';
                break;
            case 9:
                clasificacion = 'Notable';
                break;
            case 10:
                clasificacion = 'Sobresaliente';
                break;
            default:
                clasificacion = 'Nota no válida';
    }
    return clasificacion;
};

cargarNotas();
impNotas();
/*
console.log("Numero random: "+genRAndomico(10,2));
function impNotas(){

}
notas.forEach(nota=>{
    nota.nota=Math.floor(Math.random()*(10-2+1));
});
notas.forEach(nota=>{
    let $clasificar;
    switch(nota.nota){
        case 2: case 3: case 4:
            $clasificar="Insuficiente";
        break;
        case 5: case 6:
            $clasificar="Suficiente";
            break;
        case 7: case 8:
            $clasificar="Bien";
            break;
        case 9:
            $clasificar="Notable";
        case 10:
            $clasificar="Sobresaliente"
            break;
        default:
            $clasificar="Fuera de rango"
    }
    console.log(nota.nombre + " -"+nota.nota + ": "+$clasificar+"\n"); 
});
*/