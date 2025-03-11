// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar un array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco al inicio y final

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array de amigos
    listaDeAmigos.push(nombre);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}