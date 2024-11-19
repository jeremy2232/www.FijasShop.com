//lAS REALES VARIABLES
let cart = [];
let total = 0;

// LA FUNCTION PARA LA AGRAGACION DE PRODUCTOS
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // AGREGAR LOS PRODUCTOS
        cart.push({ name: productName, price: productPrice });

        // AQUI ACTUALIZAMOS EL CARRITO JUNTO AL TOTAL
        updateCart();
    });
});

//FUNCTION PARA ACTUALIZAR EL CARRITO
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalSpan = document.getElementById('total');

    //AQUI SU REAL LIMPIEZA DEL CARRITO
    cartList.innerHTML = '';

    //LA VISIVILIDAD DEL CARRITO 
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    //AQUI CALCULAMOS EL TOTAL DEL CARRITO
    total = cart.reduce((sum, item) => sum + item.price, 0);
    totalSpan.textContent = total.toFixed(2);
}

// Función para vaciar el carrito
document.getElementById('clear-cart').addEventListener('click', function() {
    cart = [];
    updateCart();
});
