const express = require('express'); 
const {programacion} = require('../Datos/curso.js').infoCursos // {} Para importar solo un modulo en especifico


const routerProgramacion = express.Router(); //Para asignar un router especifico y no repetir codigo

//Middleware
routerProgramacion.use(express.json()) // Para poder procesar solicitudes en formato json

/** Programacion */

routerProgramacion.get('/', (req, res) => { 
    res.send(JSON.stringify(programacion))
})


routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje        //Para filtrar la infromacioon 
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje); 
    
    if(resultados.length === 0){ 
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`) //return para terminar la ejecucion 
    }
    
    /** Parametros QUERY  URL ... ? */
    if(req.query.ordenar === 'vistas'){ 
        return res.status(200).send(Ordenar(resultados, req.query.ordenar))
    }
    res.send(JSON.stringify(resultados))
})

/* Ejemplo para 2 parametros */

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel 
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados.length === 0) { 
       return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
    //    return res.status(404).end() // Nos permite enviar una respuesta vacia en lugar de cadena de caracteres
    }

    /** Parametros QUERY  URL ... ? */
    if(req.query.ordenar === 'vistas'){ 
        return res.status(200).send(Ordenar(resultados, req.query.ordenar))
    }

    res.send(JSON.stringify(resultados))
})

routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo); 
    res.send(JSON.stringify(programacion)); 
})

routerProgramacion.put('/:id', (req,res) => { // Se envia a travez del url y se pasa todo un objeto a actualizar
    const cursoActualizado = req.body; 
    const id = req.params.id; 

    const indice = programacion.findIndex(curso => curso.id == id)  //Para encontrar el indice de un elemento 

    if(indice >= 0){
        programacion[indice] = cursoActualizado; 

    }
    res.send(JSON.stringify(programacion))

})

routerProgramacion.patch('/:id', (req,res) => { 
    const infoActualizada = req.body; 
    const id = req.params.id; 

    const indice = programacion.findIndex(curso => curso.id == id)

    if(indice >= 0){ 
        const cursoAModificar = programacion[indice]; 
        Object.assign(cursoAModificar, infoActualizada) // Para modificar objetos... 
    }
    res.send(JSON.stringify(programacion))
})

routerProgramacion.delete('/:id', (req,res) => {
    const id = req.params.id; 

    const indice = programacion.findIndex(curso => curso.id == id)
    if(indice >= 0 ){ 
        programacion.splice(indice, 1) //Indice del elemento a eliminar , los elementos a eliminar 
    }
    res.send(JSON.stringify(programacion))
})

function Ordenar(resultado, opcion){ 
    if(opcion === 'vistas'){ 
        return JSON.stringify(resultado.sort((a, b) => b.vistas - a.vistas)) //Para ordenar de mayor a menor 
    }
}

// res.send devuelve formato JSON por defecto
// res.json objiga que se envie el formato JSON 

module.exports.routerProgramacion = routerProgramacion; 