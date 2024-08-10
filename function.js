// function declaration

function saludar(nombre) {
    console.log('Bienvenido ' + nombre);
}

saludar('Mocchi');

// fuction expression

const cliente = function(nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

cliente('Mocchi');

function actividad(nombre, actividad) {
    console.log(`La persona ${nombre}, esta aprendiendo la actividad ${actividad}`);
}

actividad('Mocchi', 'Aprendiendo JavaScript');