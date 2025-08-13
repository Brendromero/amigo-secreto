// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Agregar una lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Se creara una función para agregar nombres de amigos a la lista
function agregarAmigo(){
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();
    if (amigo !== "") {
        listaAmigos.push(amigo);
        input.value = ""; // Limpiar el campo de entrada
        mostrarAmigos(); // Mostrar la lista actualizada
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

//Crear una función para ver la lista de amigos
function mostrarAmigos() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpia la lista antes de volver a renderizar

    listaAmigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Crear una función para seleccionar un amigo secreto al azar
function sortearAmigo() {
    if (listaAmigos.length < 3) {
        alert("Debes ingresar al menos 3 nombres para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}