const personas = [
    {
        nombre: 'Ale',
        apellido: 'Re puto',
        edad: 27,
        puesto: 'En la galarza'
    },
    {
        nombre: 'Gonzalo',
        apellido: 'Gonorrea',
        edad: 22,
        puesto: 'blindProgrammer'
    },
    {
        nombre: 'Alexis',
        apellido: 'Brunetti',
        edad: 21,
        puesto: 'Novio de tu vieja'
    }
]

console.log(personas);

const mayores = personas.filter(persona => {
    return persona.edad >= 26
}) // FILTRA POR EDAD

console.log(mayores)

const ciegos = personas.find(persona => {
    return persona.nombre === 'Gonzalo'
}) // BUSCA POR NOMBRE

console.log(`El ciego es ${ciegos.nombre}`)

