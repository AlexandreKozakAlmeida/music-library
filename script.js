const btnMobile = document.getElementById('btn-mobile');
const closeMenu = document.getElementById('closeMenu');


function toggleMenu() {
    const nav = document.getElementById('nav');
nav.classList.toggle('active');




}

btnMobile.addEventListener('click', toggleMenu);

closeMenu.addEventListener('click', toggleMenu);