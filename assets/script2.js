/*MENUBAR */

const menubar = document.getElementById("menubar");
const nav = document.getElementById("nav-inactive");

menubar.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    menubar.classList.toggle("hamburguesa-ico-active");
});

const borrar_carro = document.getElementById("limpiar");
const carro_container = document.getElementById("carro-container");
let hayElementos = false;

function showcaseCreate(array, contenedor) {
    
    contenedor.innerHTML = "";
    contenedor.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"



    for (const elemento of array) {
        let divCardProduct = document.createElement("div");
        divCardProduct.className = "col";
        divCardProduct.innerHTML += `
        <div class="card shadow-sm">
            <img class="rounded-top" src="${elemento.imagen}" alt="camperas Meti">
            <div class="card-body">
                <p class="card-text">${elemento.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">${elemento.talle} <b>Proximamente talle</b></small>
                    <p class="tienda-online-precio">${elemento.precio}</p>
                </div>
            </div>
        </div> `;

        contenedor.append(divCardProduct);
        hayElementos = true;
    }

}

window.onload = () => {
    carrito = JSON.parse(localStorage.getItem('carritoDeCompras'))
    if (carrito != null) {
        showcaseCreate(carrito, carro_container);
    } else {
        carrito = [];
    }
} 

borrar_carro.onclick = () => {
    (localStorage.removeItem('carritoDeCompras'));
    location.reload();
    hayElementos = false;
}

