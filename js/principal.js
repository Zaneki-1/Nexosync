// 1. Seleccionamos los elementos de la página de Inicio
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
const contenedorProductos = document.querySelector("#contenedor-productos"); // Para verificar si estamos en la tienda
const textoUsuario = document.querySelector(".texto-ingrese-usuario");

// 2. Lógica para los botones del Menú (Administrador, Cajero, Mesero, Cocinero)
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        // Quitamos la clase 'active' de todos los botones
        botonesCategorias.forEach(btn => btn.classList.remove("active"));
        
        // Ponemos 'active' al que clickeamos
        e.currentTarget.classList.add("active");

        // Cambiamos el título principal según el rol seleccionado
        const rolSeleccionado = e.currentTarget.innerText;
        tituloPrincipal.innerText = rolSeleccionado;

        // Cambiamos el texto de instrucción dinámicamente
        if (textoUsuario) {
            textoUsuario.innerText = `Ingrese su usuario de ${rolSeleccionado}`;
        }
    });
});

// 3. EVITAR ERRORES: Solo cargamos productos si el contenedor existe (página home.html)
// Si estamos en la página de "Iniciar Sistema", esto se saltará y no dará error.
if (contenedorProductos) {
    // Aquí iría tu función cargarProductos(productos) que ya tienes
    console.log("Cargando productos en la tienda...");
    cargarProductos(productos);
}