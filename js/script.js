let carrito = [];
let total = 0;

const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");

function agregarProducto(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto.nombre + " - $" + producto.precio;
        listaCarrito.appendChild(li);
    });

    totalElemento.textContent = total;
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}
