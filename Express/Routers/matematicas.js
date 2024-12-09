const express = require('express'); 
const {matematicas} = require('../Datos/curso.js').infoCursos // {} Para importar solo un modulo en especifico

const routerMatematicas = express.Router(); 

/**middleware */
routerMatematicas.use(express.json()) // Para poder procesar solicitudes en formato json

/** Matematicas */

routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas))
})

routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema
    const resultados = matematicas.filter(curso => curso.tema === tema); 
    
    if(resultados.length === 0){ 
        return res.status(404).send(`No se encontro ningun curso de ${tema}`)
    }
    if(req.query.ordenar === 'vistas'){ 
        return res.status(200).send(Ordenar(resultados, req.query.ordenar))
    }
    res.send(JSON.stringify(resultados)); 
})

routerMatematicas.post('/', (req, res) => { // Para agregar elementos
    let temaNuevo = req.body; 
    matematicas.push(temaNuevo); 
    res.send(matematicas)
})

routerMatematicas.put('/:id',(req, res) => {  // Para actualizar un parametro 
    const id = req.params.id; 
    const cursoActualizado = req.body; 

    const indice = matematicas.findIndex(curso => curso.id == id)

    if(indice >= 0){
        matematicas[indice] = cursoActualizado; 
    }
    res.status(200).send(matematicas); 
})

routerMatematicas.patch('/:id', (req, res) => {
    const id = req.params.id
    const infoActualizada = req.body 

    const indice = matematicas.findIndex(curso => curso.id == id)
    
    if(indice >= 0){ 
        const cursoAActualizar = matematicas[indice]; 
        Object.assign(cursoAActualizar, infoActualizada)
    }
    res.send(matematicas)
})

routerMatematicas.delete('/:id', (req, res) => {
    const { id } = req.params
    const indice = matematicas.findIndex(curso => curso.id == id); 

    if(indice >= 0){ 
        matematicas.splice(indice, 1) // Indice del elemento a borar, cantidad a borrar
    }
    res.send(matematicas)
})

function Ordenar(resultado, opcion){ 
    if(opcion === 'vistas'){ 
        return JSON.stringify(resultado.sort((a, b) => b.vistas - a.vistas)) //Para ordenar de mayor a menor 
    }
}

module.exports.routerMatematicas = routerMatematicas; 