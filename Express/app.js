const express = require('express');
const app = express(); 

const {infoCursos} = require('./Datos/curso.js') // {} Para importar solo un modulo en especifico

// Router
const {routerProgramacion} = require('./Routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion); // Se le coloca la ruta a usar, se coloca la ruta donde se usa

const {routerMatematicas} = require('./Routers/matematicas.js')
app.use('/api/cursos/matematicas',routerMatematicas); 

// Routing = Direccionamineto o Enrutamiento

app.get('/', (req, res) => {
    res.end('Mi primer servidor. Cursos.')
})

app.get('/api/cursos', (req,res) => {
    res.send(JSON.stringify(infoCursos));
})

/** Puerto */

const PUERTO = process.env.PORT || 3000;  // Aplica el valor del puerto que se asigna en el ambiente si no el que se le asigna por defecto

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})