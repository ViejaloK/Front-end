/*MENUBAR */

const menubar = document.getElementById("menubar");
const nav = document.getElementById("nav-inactive");

menubar.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    menubar.classList.toggle("hamburguesa-ico-active");
});

const cart_main = document.getElementById("cart-main");
const clear_cart = document.getElementById("limpiar");
const confirm_buy = document.getElementById("comprar");
const carro_container = document.getElementById("cart-container");
const buttons_zone = document.getElementById("buttons");
let hayElementos = false;

/*Esta funcion es la que toma los valores del storage y los convierte nuevamente en tarjetas */


function showcaseCreate(array, contenedor) {

    contenedor.innerHTML = "";
    contenedor.className = "row row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3"
    let total = 0;
    const text_total = document.getElementById("total")

    for (const elemento of array) {
        let divCardProduct = document.createElement("div");
        divCardProduct.className = "col";
        divCardProduct.innerHTML += `
        <div class="card shadow-sm">
            <img class="rounded-top" src="${elemento.imagen}" alt="camperas Meti">
            <div class="card-body">
                <p class="card-text">${elemento.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted"> <b>${elemento.talle}</b></small>
                    <p class="tienda-online-precio">$${elemento.precio}</p>
                    <a href=""><button class="colecciones-encargo">Borrar</button></a>
                </div>
            </div>
        </div> `;

        let numero = parseInt(elemento.precio);
        total += numero;

        contenedor.append(divCardProduct);
        hayElementos = true;
    }

    text_total.innerHTML = ` Total $${total}`;
    
}

/*Este condicional es parte de los estilos */
if (window.innerWidth < 1024) {
    cart_main.classList.toggle('row');
}

window.onload = () => {
    carrito = JSON.parse(localStorage.getItem('carritoDeCompras'))
    if (carrito != null) {
        showcaseCreate(carrito, carro_container);
        clear_cart.hidden = false;
        confirm_buy.hidden = false;
    } else {
        carrito = [];
    }

    if (carrito.length > 0) {
        ico_carro.innerHTML = " !"
    }
}



clear_cart.onclick = () => {
    Swal.fire({
        title: '¿Estas seguro limpiar el carrito?',
        text: "Esta accion es irreversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(210, 190, 170)',
        cancelButtonColor: 'rgb(70, 70, 70)',
        confirmButtonText: 'Si estoy seguro'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '¡Finalizado!',
                'Los elementos fueron removidos con exito',
                'success',
                (localStorage.removeItem('carritoDeCompras')),
                hayElementos = false,
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            )
        }
    })
}


/*Confirmacion de compra */
confirm_buy.onclick = () => {

    Swal.fire({
        title: '¿Estas seguro de realizar esta compra?',
        text: "Esta accion es irreversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(210, 190, 170)',
        cancelButtonColor: 'rgb(70, 70, 70)',
        confirmButtonText: 'Si estoy seguro'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '¡Finalizado!',
                'Tu compra fue realizada con exito seras redirigido al inicio',
                'success',
                (localStorage.removeItem('carritoDeCompras')),
                hayElementos = false,
                setTimeout(() => {
                    window.location.href = "./tienda-online.html";
                }, 3000)
            )
        }
    })
}





