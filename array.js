const carrito = ['Producto1','Producto2', 'Producto3']

console.log(carrito);

const cart = carrito.map(producto => {
    return 'El producto es ' + producto
})

console.log(cart);