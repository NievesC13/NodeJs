const { Console } = require('console');
const http = require('http'); 

const PUERTO = 3000; 

const servidor = http.createServer((req, res) => {
    res.end('Estoy aprendiendo node js');
})

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`); 
})

