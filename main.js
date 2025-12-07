// ===============================
// SCRIPT GENERAL DEL SITIO
// ===============================

//Mensaje de confrimación del formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita recargar la p+agina

            alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.");

            form.reset(); // Limpia el formulario
        });
    }
});

// Navbar: cerrar menú en móvil al hacer clic
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbarCollapse.classList,contains("show")) {
            new bootstrap.Collapse(navbarCollapse).toggle();
        }
    });
});