# Amigo Secreto

Este proyecto es una aplicación web sencilla que permite a los usuarios agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto".

## 📌 Funcionalidades
- **Agregar nombres**: El usuario puede escribir el nombre de un amigo y añadirlo a la lista.
- **Validación de entrada**: No permite agregar campos vacíos.
- **Visualización de lista**: Los nombres se muestran en una lista visible en la página.
- **Sorteo aleatorio**: Selecciona un nombre al azar y lo muestra en pantalla.
- **Validación de mínimo**: El sorteo solo se realiza si hay al menos 3 nombres en la lista.

## 📂 Estructura del proyecto.
- index.html #Estructura principal de la aplicación
- style.css # Estilos de la interfaz
- app.js # Lógica de la aplicación
- assets/ # Imágenes y recursos visuales


## 🚀 Instalación y ejecución
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/usuario/amigo-secreto.git

## Abre el proyecto:

- No requiere instalación de dependencias.
- Solo necesitas abrir index.html en un navegador web.

## 🛠️ Tecnologías utilizadas
- HTML5 para la estructura de la página.
- CSS3 para estilos y diseño responsivo.
- JavaScript para la lógica del sorteo y manejo de la lista.

## ⚠️ Posibles problemas y soluciones
- Si el botón de sorteo no funciona, asegúrate de que app.js esté correctamente enlazado en el HTML:
- <script src="app.js" defer></script>