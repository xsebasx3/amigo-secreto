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


// Función para actualizar la lista en la interfaz
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada nombre como un <li>
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaAmigos.appendChild(li);
    }
}


// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}