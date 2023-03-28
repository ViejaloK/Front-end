/*MENUBAR */

const menubar = document.getElementById("menubar");
const nav = document.getElementById("nav-inactive");

menubar.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    menubar.classList.toggle("hamburguesa-ico-active");
});

/*Carrito*/

    const campera_1_b = document.getElementById("1-b");
    const campera_2_b = document.getElementById("2-b");
    const campera_3_b = document.getElementById("3-b");
    const campera_4_b = document.getElementById("4-b");
    const campera_5_b = document.getElementById("5-b");
    const campera_6_b = document.getElementById("6-b");
    const campera_7_b = document.getElementById("7-b");
    const campera_8_b = document.getElementById("8-b");
    const campera_9_b = document.getElementById("9-b");

    let carrito = [];

    window.onload = () => {
        if (localStorage.getItem('carritoDeCompras') != null) {
        carrito = JSON.parse(localStorage.getItem('carritoDeCompras'))
        }
    } 

    class Product {
        constructor(imagen, precio, descripcion) {
            this.imagen = imagen;
            this.precio = precio;
            this.descripcion = descripcion;
        }
    }
    
    function saveInStorage(carrito) {
        localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
    }

    function tomarValores (boton) {
        switch (boton) {
            case campera_1_b:
                    
                const campera_1_i = document.getElementById("1-i");
                
                const campera_1_d = document.getElementById("1-d");
                
                const campera_1_p = document.getElementById("1-p");

                let producto1 = new Product(
                    campera_1_i.src,
                    campera_1_p.innerHTML,
                    campera_1_d.innerHTML,
                );
                carrito.push(producto1);
                saveInStorage(carrito);
                break

            case campera_2_b:
                    
                const campera_2_i = document.getElementById("2-i");
                
                const campera_2_d = document.getElementById("2-d");
                
                const campera_2_p = document.getElementById("2-p");

                let producto2 = new Product(
                    campera_2_i.src,
                    campera_2_p.innerHTML,
                    campera_2_d.innerHTML,
                );
                carrito.push(producto2);
                saveInStorage(carrito);
                break

            case campera_3_b:
                    
                const campera_3_i = document.getElementById("3-i");
                
                const campera_3_d = document.getElementById("3-d");
                
                const campera_3_p = document.getElementById("3-p");

                let producto3 = new Product(
                    campera_3_i.src,
                    campera_3_p.innerHTML,
                    campera_3_d.innerHTML,
                );
                carrito.push(producto3);
                saveInStorage(carrito);
                break

            case campera_4_b:
                    
                const campera_4_i = document.getElementById("4-i");
                
                const campera_4_d = document.getElementById("4-d");
                
                const campera_4_p = document.getElementById("4-p");

                let producto4 = new Product(
                    campera_4_i.src,
                    campera_4_p.innerHTML,
                    campera_4_d.innerHTML,
                );
                carrito.push(producto4);
                saveInStorage(carrito);
                break

            case campera_5_b:
                    
                const campera_5_i = document.getElementById("5-i");
                
                const campera_5_d = document.getElementById("5-d");
                
                const campera_5_p = document.getElementById("5-p");

                let producto5 = new Product(
                    campera_5_i.src,
                    campera_5_p.innerHTML,
                    campera_5_d.innerHTML,
                );
                carrito.push(producto5);
                saveInStorage(carrito);
                break

            case campera_6_b:
                    
                const campera_6_i = document.getElementById("6-i");
                
                const campera_6_d = document.getElementById("6-d");
                
                const campera_6_p = document.getElementById("6-p");

                let producto6 = new Product(
                    campera_6_i.src,
                    campera_6_p.innerHTML,
                    campera_6_d.innerHTML,
                );
                carrito.push(producto6);
                saveInStorage(carrito);
                break

            case campera_7_b:
                    
                const campera_7_i = document.getElementById("7-i");
            
                const campera_7_d = document.getElementById("7-d");
                
                const campera_7_p = document.getElementById("7-p");

                let producto7 = new Product(
                    campera_7_i.src,
                    campera_7_p.innerHTML,
                    campera_7_d.innerHTML,
                );
                carrito.push(producto7);
                saveInStorage(carrito);
                break

            case campera_8_b:
                    
                const campera_8_i = document.getElementById("8-i");
            
                const campera_8_d = document.getElementById("8-d");
                
                const campera_8_p = document.getElementById("8-p");

                let producto8 = new Product(
                    campera_8_i.src,
                    campera_8_p.innerHTML,
                    campera_8_d.innerHTML,
                );
                carrito.push(producto8);
                saveInStorage(carrito);
                break

            case campera_9_b:
                    
                const campera_9_i = document.getElementById("9-i");
            
                const campera_9_d = document.getElementById("9-d");
                
                const campera_9_p = document.getElementById("9-p");

                let producto9 = new Product(
                    campera_9_i.src,
                    campera_9_p.innerHTML,
                    campera_9_d.innerHTML,
                );
                carrito.push(producto9);
                saveInStorage(carrito);
                break

            default:
                break;
        }
    }
    
campera_1_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_1_b);
});

campera_2_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_2_b);
});
campera_3_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_3_b);
});
campera_4_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_4_b);
});
campera_5_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_5_b);
});
campera_6_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_6_b);
});
campera_7_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_7_b);
});
campera_8_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_8_b);
});
campera_9_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_9_b);
});




