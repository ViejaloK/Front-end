/*MENUBAR */

const menubar = document.getElementById("menubar");
const nav = document.getElementById("nav-inactive");

menubar.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    menubar.classList.toggle("hamburguesa-ico-active");
});

const ico_carro = document.getElementById('ico_carro');
let carrito = JSON.parse(localStorage.getItem('carritoDeCompras'))
if (carrito.length > 0) {
    ico_carro.innerHTML = " !"
}