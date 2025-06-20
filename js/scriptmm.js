document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const sidebar = document.querySelector(".sidebar");
  const sectionButtons = document.querySelectorAll(".section-btn");
  const links = document.querySelectorAll(".submenu li a");

  // Mostrar/ocultar menú lateral en móvil y animar botón
  if (btnMenu && sidebar) {
    btnMenu.addEventListener("click", () => {
      sidebar.classList.toggle("mostrar");
      btnMenu.classList.toggle("active");
    });
  }

  // Desplegar/ocultar secciones del menú
  sectionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.parentElement;
      parent.classList.toggle("open");
    });
  });

  // Resaltar módulo activo y abrir su sección
  const currentPath = window.location.pathname.split("/").pop();
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
      const section = link.closest(".menu-section");
      if (section) section.classList.add("open");
    }
  });

  // Manejar formulario de búsqueda en contenido principal
  const mainSearchForm = document.querySelector(".main-search");
  if (mainSearchForm) {
    mainSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = mainSearchForm.q.value.trim();
      if (query) {
        alert("Buscaste: " + query);
      }
    });
  }
});
