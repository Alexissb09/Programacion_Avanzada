let lenguajes = ['js', 'php', 'java', 'C#', 'NodeJS']
let frameworks = ['React', 'Vue', 'Angular', 'Bootstrap']

/* let combinaciones = lenguajes.concat(frameworks) */

/* let combinaciones = [...lenguajes, ...frameworks] */

let [ultimo] = [...lenguajes].reverse()

console.log(ultimo);