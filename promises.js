const applyDescount = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false

        if (descuento) {
            resolve('Discount applied')
        } else {
            reject('Discount not applied')
        }
    }, 3000)
})

applyDescount.then(result => {
    console.log(result)
}).catch(error => {
    console.log('Tiro error perro mal ahi')
})

console.log(applyDescount)

/* Resolve ejecuta el llamado al promise cuando sea exitoso */
/* Reject se ejecuta cuando es un incorrecto */