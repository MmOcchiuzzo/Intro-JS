// Asincronismo
    // Resolve -> ejecuta el llamado a la Promise cuando es correcto y
    // Reject cuando hubo un error

const aplicarDescuento = new Promise ((resolve, reject)=> {
    setTimeout(() => {
        let descuento = false
    if(descuento) {
        resolve('Descuento aplicado')
    } else {
        reject('No se pudo aplicar el descuento')
    }
    }, 3000);
})
aplicarDescuento.then(resultado => {
    console.log(aplicarDescuento)
}).catch(error => {
    console.log('Hubo un error al aplicar el descuento', error)
})

// Aplicamos el metodo .then a la promise que es lo que pasamos como una funcion
//true es para resolve y false para el reject