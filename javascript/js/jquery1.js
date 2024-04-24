/*
Descripcion: Formateo de formulario
Desarrollador: Jefferson Poeta Duran
Fecha: 2024-04-23
Cambios: Ningun cambio
*/
$(document).ready(function() {
    // Arreglo para almacenar estudiantes
    var estudiantes = [];

    // Evento de clic en el botón de registrar
    $('#registrarBtn').click(function() {
        // Obtener los valores del formulario
        var ci = $('#ci').val();
        var nombre = $('#nombre').val();
        var fecha = $('#fecha').val();
        var direccion = $('#direccion').val();

        // Crear un objeto estudiante
        var estudiante = {
            ci: ci,
            nombre: nombre,
            fecha: fecha,
            direccion: direccion
        };

        // Agregar el estudiante al arreglo
        estudiantes.push(estudiante);

        // Limpiar el formulario
        $('#registroForm')[0].reset();

        // Actualizar la tabla de estudiantes
        actualizarTablaEstudiantes();
    });

    // Evento de clic en el botón de formatear
    $('#resetBtn').click(function() {
        // Limpiar el formulario
        $('#registroForm')[0].reset();

        // Vaciar el arreglo de estudiantes
        estudiantes = [];
        
        // Limpiar la tabla de estudiantes
        $('#listaEstudiantes').html('');
    });

    // Función para actualizar la tabla de estudiantes
    function actualizarTablaEstudiantes() {
        var tablaHTML = '<h2>Lista de Estudiantes</h2><table class="table"><thead class="thead-dark"><tr><th>CI</th><th>Nombre</th><th>Fecha de Nacimiento</th><th>Dirección</th></tr></thead><tbody>';
        $.each(estudiantes, function(index, estudiante) {
            tablaHTML += '<tr><td>' + estudiante.ci + '</td><td>' + estudiante.nombre + '</td><td>' + estudiante.fecha + '</td><td>' + estudiante.direccion + '</td></tr>';
        });
        tablaHTML += '</tbody></table>';

        // Mostrar la tabla de estudiantes en el contenedor correspondiente
        $('#listaEstudiantes').html(tablaHTML);
    }
});
