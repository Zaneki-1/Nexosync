// ===== CARRITO DESDE LOCALSTORAGE =====
const carrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

// ===== MESAS DISPONIBLES =====
const mesas = JSON.parse(localStorage.getItem("nexo-mesas")) || [];
const selectMesa = document.getElementById("cliente-mesa");

mesas.forEach(mesa => {
    const opt = document.createElement("option");
    opt.value = mesa.id;
    opt.textContent = `Mesa ${mesa.id} — ${capitalize(mesa.estado)} (${mesa.capacidad} personas)`;
    if (mesa.estado !== "libre") opt.disabled = true;
    selectMesa.appendChild(opt);
});

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// ===== RESUMEN DEL CARRITO =====
const resumenVacio  = document.getElementById("resumen-vacio");
const resumenItems  = document.getElementById("resumen-items");
const resumenTotales = document.getElementById("resumen-totales");

function formatCOP(n) { return "$" + n.toLocaleString("es-CO"); }

function renderResumen() {
    if (carrito.length === 0) {
        resumenVacio.style.display = "flex";
        resumenItems.style.display = "none";
        resumenTotales.style.display = "none";
        return;
    }

    resumenVacio.style.display  = "none";
    resumenItems.style.display  = "flex";
    resumenTotales.style.display = "flex";

    resumenItems.innerHTML = "";
    carrito.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("resumen-item");
        div.innerHTML = `
            <span class="resumen-item-nombre">${p.titulo}</span>
            <span class="resumen-item-cant">x${p.cantidad}</span>
            <span class="resumen-item-precio">${formatCOP(p.precio * p.cantidad)}</span>
        `;
        resumenItems.appendChild(div);
    });

    const subtotal = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    const iva      = Math.round(subtotal * 0.19);
    const total    = subtotal + iva;

    document.getElementById("r-subtotal").textContent = formatCOP(subtotal);
    document.getElementById("r-iva").textContent      = formatCOP(iva);
    document.getElementById("r-total").textContent    = formatCOP(total);
}

renderResumen();

// ===== ESTRELLAS =====
const estrellasEl    = document.getElementById("estrellas");
const estrellasLabel = document.getElementById("estrellas-label");
const iconosEstrella = estrellasEl.querySelectorAll("i");
let calificacion     = 0;

const labels = ["", "Muy malo 😞", "Regular 😕", "Bueno 🙂", "Muy bueno 😊", "Excelente 🤩"];

iconosEstrella.forEach(icon => {
    icon.addEventListener("mouseenter", () => destacar(icon.dataset.val));
    icon.addEventListener("mouseleave", () => destacar(calificacion));
    icon.addEventListener("click", () => {
        calificacion = parseInt(icon.dataset.val);
        destacar(calificacion);
        estrellasLabel.textContent = labels[calificacion];
    });
});

function destacar(val) {
    val = parseInt(val) || 0;
    iconosEstrella.forEach(i => {
        const v = parseInt(i.dataset.val);
        i.classList.toggle("activa", v <= val);
        i.classList.toggle("bi-star-fill", v <= val);
        i.classList.toggle("bi-star", v > val);
    });
}

// ===== GENERAR FACTURA =====
let facturaCount = parseInt(localStorage.getItem("nexo-factura-count") || "0");

document.getElementById("btn-generar").addEventListener("click", () => {
    const nombre   = document.getElementById("cliente-nombre").value.trim();
    const doc      = document.getElementById("cliente-doc").value.trim();
    const tel      = document.getElementById("cliente-tel").value.trim();
    const email    = document.getElementById("cliente-email").value.trim();
    const mesa     = document.getElementById("cliente-mesa").value;
    const personas = document.getElementById("cliente-personas").value.trim();
    const metodo   = document.querySelector("input[name='pago']:checked")?.value || "efectivo";
    const comentario = document.getElementById("cliente-comentario").value.trim();

    // Validación mínima
    if (!nombre || !doc) {
        alert("Por favor ingresa al menos el nombre y documento del cliente.");
        return;
    }

    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos primero desde 'Todos los Productos'.");
        return;
    }

    // Número de factura
    facturaCount++;
    localStorage.setItem("nexo-factura-count", facturaCount);

    const numFactura = "#" + String(facturaCount).padStart(4, "0");
    const ahora = new Date().toLocaleString("es-CO", {
        dateStyle: "medium", timeStyle: "short"
    });

    // Llenar factura
    document.getElementById("f-numero").textContent   = "Factura " + numFactura;
    document.getElementById("f-fecha").textContent    = ahora;
    document.getElementById("f-nombre").textContent   = nombre;
    document.getElementById("f-doc").textContent      = doc;
    document.getElementById("f-tel").textContent      = tel || "—";
    document.getElementById("f-email").textContent    = email || "—";
    document.getElementById("f-mesa").textContent     = mesa ? `Mesa ${mesa}` : "—";
    document.getElementById("f-personas").textContent = personas || "—";
    document.getElementById("f-metodo").textContent   = capitalize(metodo);
    document.getElementById("f-estrellas").textContent =
        calificacion > 0 ? `${calificacion}/5 — ${labels[calificacion]}` : "Sin calificar";

    // Productos en factura
    const listaEl = document.getElementById("f-productos-lista");
    listaEl.innerHTML = "";

    const subtotal = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    const iva      = Math.round(subtotal * 0.19);
    const total    = subtotal + iva;

    carrito.forEach(p => {
        const fila = document.createElement("div");
        fila.classList.add("f-producto-fila");
        fila.innerHTML = `
            <span>${p.titulo}</span>
            <span>x${p.cantidad}</span>
            <span>${formatCOP(p.precio * p.cantidad)}</span>
        `;
        listaEl.appendChild(fila);
    });

    document.getElementById("f-subtotal").textContent = formatCOP(subtotal);
    document.getElementById("f-iva").textContent      = formatCOP(iva);
    document.getElementById("f-total").textContent    = formatCOP(total);

    // Mostrar factura
    document.getElementById("factura-generada").style.display = "flex";
    document.getElementById("factura-generada").scrollIntoView({ behavior: "smooth" });

    // Ocultar resumen previo
    resumenVacio.style.display  = "none";
    resumenItems.style.display  = "none";
    resumenTotales.style.display = "none";
});

// ===== NUEVA FACTURA =====
document.getElementById("btn-nueva-factura").addEventListener("click", () => {
    // Limpiar carrito
    localStorage.removeItem("productos-en-carrito");

    // Limpiar formulario
    document.getElementById("cliente-nombre").value = "";
    document.getElementById("cliente-doc").value = "";
    document.getElementById("cliente-tel").value = "";
    document.getElementById("cliente-email").value = "";
    document.getElementById("cliente-mesa").value = "";
    document.getElementById("cliente-personas").value = "";
    document.getElementById("cliente-comentario").value = "";
    document.querySelector("input[name='pago'][value='efectivo']").checked = true;
    calificacion = 0;
    destacar(0);
    estrellasLabel.textContent = "Sin calificación";

    document.getElementById("factura-generada").style.display = "none";
    resumenVacio.style.display = "flex";
    resumenItems.style.display = "none";
    resumenTotales.style.display = "none";
    resumenItems.innerHTML = "";

    window.scrollTo({ top: 0, behavior: "smooth" });
});
