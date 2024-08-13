// metodos para arreglos

const personas = [
    {nombre:'Mocchi', edad: 21, puesto: 'Frontend'},
    {nombre:'Lisi', edad: 25, puesto: 'UXUI'},
    {nombre:'Sofi', edad: 22, puesto: 'Backend'},
    {nombre:'Miki', edad: 21, puesto: 'Devops'}
]
console.log(personas);

    // Filtrar 
        // persona con edad +22
const mayores = personas.filter(persona => {
    return persona.edad > 22 
})
console.log(mayores);

        // mostrar una sola persona
const Sofi = personas.find(persona => {
    return persona.nombre === 'Sofi'
})
console.log(Sofi);