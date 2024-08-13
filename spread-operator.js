let lenguajes = ['javascript', 'PHP', 'Python', 'JAVA']
let frameworks= ['React', 'Laravel', 'Django', 'Sprint']

// Unir los arreglos en uno solo
    // Concat
let combinacion = lenguajes.concat(frameworks);
console.log(combinacion);

    // spread operator
let combinator = [...lenguajes,...frameworks ]
console.log(combinator);

    // que muestre el ultimo       
let [ultimo] = [...lenguajes].reverse()
console.log(ultimo);