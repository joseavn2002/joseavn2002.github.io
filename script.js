
document.querySelectorAll('.provincia').forEach(menu => {
    menu.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// Funcionalidad del buscador para filtrar banderas azules
document.querySelector('.barra-busqueda input').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const banderas = document.querySelectorAll('.banderaAzul');

    banderas.forEach(bandera => {
        const banderaText = bandera.innerText.toLowerCase();
        if (banderaText.includes(filter)) {
            bandera.style.display = "block";
        } else {
            bandera.style.display = "none";
        }
    });
});