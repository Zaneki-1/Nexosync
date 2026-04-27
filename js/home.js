const productos = [
    //entradas//
    {
        id: "entrada-01",
        titulo: "Arepas Con Aguacate Y Atún",
        imagen: "./img/comida/Arepas-de-atun-y-aguacate.jpg",
        categoria: {
            nombre: "Entradas",
            id: "Entradas"
        },
        precio: 12000
    },
    {
        id: "entrada-02",
        titulo: "Empanadas De Queso",
        imagen: "./img/comida/Empanadas-de-queso-en-la-freidora-de-aire.jpg",
        categoria: {
            nombre: "Entradas",
            id: "Entradas"
        },
        precio: 12000
    },
    {
        id: "entrada-03",
        titulo: "Torre De Camarones",
        imagen: "./img/comida/Causa-de-camaron-receta-facil.webp",
        categoria: {
            nombre: "Entradas",
            id: "Entradas"
        },
        precio: 12000
    },
    {
        id: "entrada-04",
        titulo: "Quesadiilas Mexicanas",
        imagen: "./img/comida/Quesadillas-mexicanas-de-camarones-con-chimichurri.jpg",
        categoria: {
            nombre: "Entradas",
            id: "Entradas"
        },
        precio: 12000
    },
    {
        id: "entrada-05",
        titulo: "Camarones Al Ajillo",
        imagen: "./img/comida/Receta-de-camarones-al-ajillo.jpg",
        categoria: {
            nombre: "Entradas",
            id: "Entradas"
        },
        precio: 12000
    },
    {
        id: "entrada-06",
        titulo: "Croquetas De Papa",
        imagen: "./img/comida/Receta-de-las-croquetas-de-papa-y-atun.jpg",
        categoria: {
            nombre: "Entradas",
            id: "Entradas"
        },
        precio: 12000
    },
    {
        id: "entrada-07",
        titulo: "Porción De Papas Francesa",
        imagen: "./img/comida/papas.jpg",
        categoria: {
            nombre: "Entradas",
            id: "Entradas"
        },
        precio: 6000
    },
    //Platos Fuertes//
    {
        id: "plato-01",
        titulo: "Churrasco",
        imagen:"./img/comida/churrasco.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 18000
    },
    {
        id: "plato-02",
        titulo: "Bocachico",
        imagen:"./img/comida/bocachico.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 20000
    },
    {
        id: "plato-03",
        titulo: "Bandeja Paisa",
        imagen:"./img/comida/bandeja.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 18000
    },
    {
        id: "plato-04",
        titulo: "Pechuga Gratinada",
        imagen:"./img/comida/pechuga-gratinada.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 18000
    },
    {
        id: "plato-05",
        titulo: "Costillas Ahumadas",
        imagen:"./img/comida/costillas-ahumadas.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 25000
    },
    {
        id: "plato-06",
        titulo: "Mojarra Frita",
        imagen:"./img/comida/mojarra.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 20000
    },
    {
        id: "plato-07",
        titulo: "Sancocho",
        imagen:"./img/comida/sancocho.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 15000
    },
    {
        id: "plato-08",
        titulo: "Ajiaco",
        imagen:"./img/comida/ajiaco.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 15000
    },
    {
        id: "plato-09",
        titulo: "Tamal",
        imagen:"./img/comida/tamal.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 15000
    },
    {
        id: "plato-10",
        titulo: "Camarones Salteado",
        imagen:"./img/comida/camarones.jpg",
        categoria: {
            nombre: "Platos Fuertes",
            id: "Platos Fuertes"
        },
        precio: 18000
    },
    //Bebidas//
    {
        id: "bebida-01",
        titulo: "Jugo De Guanabana",
        imagen:"./img/bebidas/guanaba.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 7000
    },
    {
        id: "bebida-02",
        titulo: "Jugo De Lulo",
        imagen:"./img/bebidas/lulo.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 7000
    },
    {
        id: "bebida-03",
        titulo: "Jugo De Mango",
        imagen:"./img/bebidas/mango.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 7000
    },
    {
        id: "bebida-04",
        titulo: "Jugo De Maracuya",
        imagen:"./img/bebidas/maracuya.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 7000
    },
    {
        id: "bebida-05",
        titulo: "Jugo De Mora",
        imagen:"./img/bebidas/mora.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 7000
    },
    {
        id: "bebida-06",
        titulo: "Chocolate",
        imagen:"./img/bebidas/chocolate.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 7000
    },
    {
        id: "bebida-07",
        titulo: "Pepsi 250ml",
        imagen:"./img/bebidas/pepsi.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 4000
    },
    {
        id: "bebida-08",
        titulo: "Coca Cola 250ml",
        imagen:"./img/bebidas/coca.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 4000
    },
    {
        id: "bebida-09",
        titulo: "Limonada De Coco",
        imagen:"./img/bebidas/limonada.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 7000
    },
    //Postres//
    {
        id: "postre-01",
        titulo: "Banana Split",
        imagen:"./img/postres/postre-banana.jpg",
        categoria: {
            nombre: "Postres",
            id: "Postres"
        },
        precio: 8000
    },
    {
        id: "postre-02",
        titulo: "Postre De Chocolate",
        imagen:"./img/postres/postre-choco.jpg",
        categoria: {
            nombre: "Postres",
            id: "Postres"
        },
        precio: 8000
    },
    {
        id: "postre-03",
        titulo: "Postre De Fresa",
        imagen:"./img/postres/postre-fresa.jpg",
        categoria: {
            nombre: "Postres",
            id: "Postres"
        },
        precio: 8000
    },
    {
        id: "postre-04",
        titulo: "Postre De Oreo",
        imagen:"./img/postres/postre-oro.jpg",
        categoria: {
            nombre: "Postres",
            id: "Postres"
        },
        precio: 8000
    },
    {
        id: "postre-05",
        titulo: "Flan",
        imagen:"./img/postres/flan.jpg",
        categoria: {
            nombre: "Postres",
            id: "Postres"
        },
        precio: 8000
    },
    {
        id: "postre-06",
        titulo: "Tiramisu",
        imagen:"./img/postres/tiramisu.jpg",
        categoria: {
            nombre: "Postres",
            id: "Postres"
        },
        precio: 10000
    },
    {
        id: "postre-07",
        titulo: "Quesillo",
        imagen:"./img/postres/quesillo.jpg",
        categoria: {
            nombre: "Postres",
            id: "Postres"
        },
        precio: 10000
    }
];


const contenedorproductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelector(".producto-agregar");
const numerito = document.querySelector(".numerito");


//nuevos estilos para la parte de principal//



function cargarProductos(productosElegidos) {
    contenedorproductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalle">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorproductos.append(div);
    });

    actualizarBotonesAgregar ();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else{
            tituloPrincipal.innerText = "Todos Los Productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlcarrito);
    })
}

let productosEncarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEncarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito(); 
} else {
    productosEncarrito = [];
}

function agregarAlcarrito (e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEncarrito.some(producto => producto.id === idBoton)) {
        const index = productosEncarrito.findIndex(producto => producto.id === idBoton);
        productosEncarrito[index].cantidad++;
    } else {
        const productoConCantidad = {...productoAgregado}; 
        productoConCantidad.cantidad = 1; 
        productosEncarrito.push(productoConCantidad);
    }
    
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEncarrito));
}

function actualizarNumerito () {
    let nuevoNumerito = productosEncarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}