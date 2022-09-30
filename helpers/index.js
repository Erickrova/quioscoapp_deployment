
const formatearDinero = cantidad =>{
    return cantidad.toLocaleString("es-US",{
        style: "currency",
        currency: "USD"
    })
}

export {
    formatearDinero
}