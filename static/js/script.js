// Funcion para inicializar el menu y el header DESPUES
function inicializarMenu() {
    const header = document.getElementById('header');
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    // Efecto del Header al hacer scroll
    if (header) {
        window.addEventListener('scroll', function() {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Menu de Hamburguesa para Celulares
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            // Alternar clase para mostrar menu
            navLinks.classList.toggle('nav-active');
            
            // Animacion de enlaces
            navLinksLi.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Animacion del icono burger (X)
            burger.classList.toggle('toggle');
        });

        // Cerrar menu al hacer clic en un enlace
        navLinks.addEventListener('click', () => {
             if(navLinks.classList.contains('nav-active')){
                 navLinks.classList.remove('nav-active');
                 burger.classList.remove('toggle');
                 navLinksLi.forEach((link) => {
                     link.style.animation = '';
                 });
             }
        });
    }
}

// Animaciones de Aparicion
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();

// ==========================================================================
// LIGHTBOX DE IMAGENES
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const images = document.querySelectorAll(".galeria-grid img");
    const closeBtn = document.querySelector(".modal-close");

    if (!modal) return;

    // Abrir el modal al hacer clic en cualquier imagen
    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.classList.add("active");
            modalImg.src = this.src;
        });
    });

    // Cerrar el modal al hacer clic en la X
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    // Cerrar el modal al clic en el fondo oscuro
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});