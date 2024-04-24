document.addEventListener('DOMContentLoaded', function () {
    const botonMenu = document.querySelector('.navegacion__boton');
    const menuDesplegable = document.querySelector('.navegacion__menu');

    botonMenu.addEventListener('click', function () {
        menuDesplegable.classList.toggle('activo');
    });
});
