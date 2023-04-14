
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
        constructor(imagen, precio, descripcion, talle) {
            this.imagen = imagen;
            this.precio = precio;
            this.descripcion = descripcion;
            this.talle = talle
        }
    }
    
    function saveInStorage(carrito) {
        localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
    }

    /*Esta funcion es la que toma los valores de la tarjeta en la que se clickea
    supongo habra una forma mas eficiente de hacerlo. de todas formas la idea es 
    que las tarjetas que existen hardcodeadas en el html desaparescan y que se 
    generen con un script dependiendo lo que el vendedor quiera y sean un archivo
    de formato JSON.*/
    function tomarValores (boton) {
        switch (boton) {
            case campera_1_b:
                    
                const campera_1_i = document.getElementById("1-i");
                
                const campera_1_d = document.getElementById("1-d");
                
                const campera_1_p = document.getElementById("1-p");
                
                const campera_1_t = document.getElementById("1-t");
                
                /*Esta fue la forma que encontre para dar un valor al precio que no tenga
                 el siblo de pesos y poder usarlo para operaciones matematicas */

                const valor_1 = campera_1_p.dataset.valor;

                let producto1 = new Product(
                    campera_1_i.src,
                    valor_1,
                    campera_1_d.innerHTML,
                    campera_1_t.innerHTML,
                );
                carrito.push(producto1);
                saveInStorage(carrito);
                break

            case campera_2_b:
                    
                const campera_2_i = document.getElementById("2-i");
                
                const campera_2_d = document.getElementById("2-d");
                
                const campera_2_p = document.getElementById("2-p");

                const campera_2_t = document.getElementById("2-t");

                const valor_2 = campera_2_p.dataset.valor;


                let producto2 = new Product(
                    campera_2_i.src,
                    valor_2,
                    campera_2_d.innerHTML,
                    campera_2_t.innerHTML,
                );
                carrito.push(producto2);
                saveInStorage(carrito);
                break

            case campera_3_b:
                    
                const campera_3_i = document.getElementById("3-i");
                
                const campera_3_d = document.getElementById("3-d");
                
                const campera_3_p = document.getElementById("3-p");
                
                const campera_3_t = document.getElementById("3-t");

                const valor_3 = campera_3_p.dataset.valor;

                let producto3 = new Product(
                    campera_3_i.src,
                    valor_3,
                    campera_3_d.innerHTML,
                    campera_3_t.innerHTML,
                );
                carrito.push(producto3);
                saveInStorage(carrito);
                break

            case campera_4_b:
                    
                const campera_4_i = document.getElementById("4-i");
                
                const campera_4_d = document.getElementById("4-d");
                
                const campera_4_p = document.getElementById("4-p");
                
                const campera_4_t = document.getElementById("4-t");

                const valor_4 = campera_4_p.dataset.valor;

                let producto4 = new Product(
                    campera_4_i.src,
                    valor_4,
                    campera_4_d.innerHTML,
                    campera_4_t.innerHTML,
                );
                carrito.push(producto4);
                saveInStorage(carrito);
                break

            case campera_5_b:
                    
                const campera_5_i = document.getElementById("5-i");
                
                const campera_5_d = document.getElementById("5-d");
                
                const campera_5_p = document.getElementById("5-p");

                const campera_5_t = document.getElementById("5-t");

                const valor_5 = campera_5_p.dataset.valor;

                let producto5 = new Product(
                    campera_5_i.src,
                    valor_5,
                    campera_5_d.innerHTML,
                    campera_5_t.innerHTML,
                );
                carrito.push(producto5);
                saveInStorage(carrito);
                break

            case campera_6_b:
                    
                const campera_6_i = document.getElementById("6-i");
                
                const campera_6_d = document.getElementById("6-d");
                
                const campera_6_p = document.getElementById("6-p");

                const campera_6_t = document.getElementById("6-t");

                const valor_6 = campera_6_p.dataset.valor;

                let producto6 = new Product(
                    campera_6_i.src,
                    valor_6,
                    campera_6_d.innerHTML,
                    campera_6_t.innerHTML,
                );
                carrito.push(producto6);
                saveInStorage(carrito);
                break

            case campera_7_b:
                    
                const campera_7_i = document.getElementById("7-i");
            
                const campera_7_d = document.getElementById("7-d");
                
                const campera_7_p = document.getElementById("7-p");

                const campera_7_t = document.getElementById("7-t");

                const valor_7 = campera_7_p.dataset.valor;

                let producto7 = new Product(
                    campera_7_i.src,
                    valor_7,
                    campera_7_d.innerHTML,
                    campera_7_t.innerHTML,
                );
                carrito.push(producto7);
                saveInStorage(carrito);
                break

            case campera_8_b:
                    
                const campera_8_i = document.getElementById("8-i");
            
                const campera_8_d = document.getElementById("8-d");
                
                const campera_8_p = document.getElementById("8-p");

                const campera_8_t = document.getElementById("8-t");

                const valor_8 = campera_8_p.dataset.valor;

                let producto8 = new Product(
                    campera_8_i.src,
                    valor_8,
                    campera_8_d.innerHTML,
                    campera_8_t.innerHTML,
                );
                carrito.push(producto8);
                saveInStorage(carrito);
                break

            case campera_9_b:
                    
                const campera_9_i = document.getElementById("9-i");
            
                const campera_9_d = document.getElementById("9-d");
                
                const campera_9_p = document.getElementById("9-p");

                const campera_9_t = document.getElementById("9-t");

                const valor_9 = campera_9_p.dataset.valor;

                let producto9 = new Product(
                    campera_9_i.src,
                    valor_9,
                    campera_9_d.innerHTML,
                    campera_9_t.innerHTML,
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
    Swal.fire(
        'Agregada con exito',
        'visita tu carrito para finalizar la compra',
        'success'
      )
});

campera_2_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_2_b);
    Swal.fire(
        'Agregada con exito',
        'visita tu carrito para finalizar la compra',
        'success'
      )
});
campera_3_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_3_b);
        Swal.fire(
        'Agregada con exito',
        'visita tu carrito para finalizar la compra',
        'success'
      )
});
campera_4_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_4_b);
        Swal.fire(
        'Agregada con exito',
        'visita tu carrito para finalizar la compra',
        'success'
      )
});
campera_5_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_5_b);
        Swal.fire(
        'Agregada con exito',
        'visita tu carrito para finalizar la compra',
        'success'
      )
});
campera_6_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_6_b);
        Swal.fire(
        'Agregada con exito',
        'visita tu carrito para finalizar la compra',
        'success'
      )
});
campera_7_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_7_b);
        Swal.fire(
        'Agregada con exito',
        'visita tu carrito para finalizar la compra',
        'success'
      )
});
campera_8_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_8_b);
        Swal.fire(
        'Agregada con exito',
        'visita tu carrito para finalizar la compra',
        'success'
      )
});
campera_9_b.addEventListener("click", (e) => {
    e.preventDefault();
    tomarValores(campera_9_b);
        Swal.fire(
        'Agregada con exito',
        'visita tu carrito para finalizar la compra',
        'success'
      )
});





