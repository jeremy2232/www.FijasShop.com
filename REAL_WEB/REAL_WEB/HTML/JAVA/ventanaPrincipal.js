// Obtener los elementos
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Mostrar la ventana emergente automáticamente al cargar la página
window.onload = function() {
    modal.style.display = 'block';
}

// Cerrar la ventana emergente
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar la ventana emergente si el usuario hace clic fuera del contenido de la ventana
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
