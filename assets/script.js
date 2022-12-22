const menubar = document.getElementById('menubar');
const nav = document.getElementById('nav-inactive');

menubar.addEventListener('click',() => {
    nav.classList.toggle("nav-active");
    menubar.classList.toggle("hamburguesa-ico-active");
});

