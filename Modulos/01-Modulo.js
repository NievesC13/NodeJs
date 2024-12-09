// para exportar 
function saludar(nombre) {
    return `Hola ${nombre}`; 
}
function saludoHolaMundo() {
    return 'Hola mundo'; 
}

// module.exports.saludar = saludar; 
// module.exports.saludoHolaMundo = saludoHolaMundo; 

module.exports = {
    saludar : saludar,
    saludoHolaMundo :  saludoHolaMundo,
}


