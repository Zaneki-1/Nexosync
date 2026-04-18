// ===== DATOS INICIALES DE MESAS =====
const mesasIniciales = [
    { id: 1, capacidad: 2, estado: "libre" },
    { id: 2, capacidad: 4, estado: "libre" },
    { id: 3, capacidad: 4, estado: "libre" },
    { id: 4, capacidad: 6, estado: "libre" },
    { id: 5, capacidad: 2, estado: "libre" },
    { id: 6, capacidad: 4, estado: "libre" },
    { id: 7, capacidad: 6, estado: "libre" },
    { id: 8, capacidad: 4, estado: "libre" },
    { id: 9, capacidad: 2, estado: "libre" },
    { id: 10, capacidad: 8, estado: "libre" },
    { id: 11, capacidad: 4, estado: "libre" },
    { id: 12, capacidad: 6, estado: "libre" },
];

// Cargar mesas desde localStorage o usar iniciales
let mesas = JSON.parse(localStorage.getItem("nexo-mesas")) || mesasIniciales;

const mesasGrid      = document.getElementById("mesas-grid");
const modalOverlay   = document.getElementById("modal-overlay");
const modalTitulo    = document.getElementById("modal-titulo");
const modalCerrar    = document.getElementById("modal-cerrar");
const modalCapacidad = document.getElementById("modal-capacidad");
const btnEstados     = document.querySelectorAll(".btn-estado");

let mesaSeleccionada = null;

// Iconos por estado
const iconoEstado = {
    libre:         "bi-check-circle-fill",
    ocupado:       "bi-person-fill",
    mantenimiento: "bi-wrench-adjustable",
};

const labelEstado = {
    libre:         "Libre",
    ocupado:       "Ocupado",
    mantenimiento: "Mantenimiento",
};

// ===== RENDER =====
function renderMesas() {
    mesasGrid.innerHTML = "";

    mesas.forEach(mesa => {
        const card = document.createElement("div");
        card.classList.add("mesa-card", mesa.estado);
        card.innerHTML = `
            <div class="mesa-glow"></div>
            <p class="mesa-numero">Mesa ${mesa.id}</p>
            <i class="bi ${iconoEstado[mesa.estado]} mesa-icono"></i>
            <span class="mesa-estado-badge">${labelEstado[mesa.estado]}</span>
            <p class="mesa-capacidad">
                <i class="bi bi-people-fill"></i> ${mesa.capacidad} personas
            </p>
        `;
        card.addEventListener("click", () => abrirModal(mesa));
        mesasGrid.appendChild(card);
    });

    actualizarResumen();
}

// ===== RESUMEN =====
function actualizarResumen() {
    document.getElementById("total-num").textContent    = mesas.length;
    document.getElementById("libres-num").textContent   = mesas.filter(m => m.estado === "libre").length;
    document.getElementById("ocupadas-num").textContent = mesas.filter(m => m.estado === "ocupado").length;
    document.getElementById("mant-num").textContent     = mesas.filter(m => m.estado === "mantenimiento").length;
}

// ===== MODAL =====
function abrirModal(mesa) {
    mesaSeleccionada = mesa;
    modalTitulo.textContent    = `Mesa ${mesa.id}`;
    modalCapacidad.textContent = `${mesa.capacidad} personas`;

    // Marcar el botón del estado actual
    btnEstados.forEach(btn => {
        btn.classList.toggle("seleccionado", btn.dataset.estado === mesa.estado);
    });

    modalOverlay.classList.add("visible");
}

function cerrarModal() {
    modalOverlay.classList.remove("visible");
    mesaSeleccionada = null;
}

modalCerrar.addEventListener("click", cerrarModal);
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) cerrarModal();
});

btnEstados.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!mesaSeleccionada) return;

        // Actualizar estado
        const index = mesas.findIndex(m => m.id === mesaSeleccionada.id);
        mesas[index].estado = btn.dataset.estado;

        // Guardar en localStorage
        localStorage.setItem("nexo-mesas", JSON.stringify(mesas));

        cerrarModal();
        renderMesas();
    });
});

// ===== INIT =====
renderMesas();
