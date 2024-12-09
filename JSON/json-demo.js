// const curso = require('./curso.json'); // Para leer archivo JSON, y se recibe un objeto

// Pasamos de un objeto a formato JSON 
let infoCurso = {  
    "titulo": "Aprende NodeJS",
    "numVistas": 6465,
    "numLikes": 4454, 
    "temas": [
        "JavaScript",
        "Nod.JS"
    ],
    "publico": true
}

// Para pasar de objeto, a cadena de caracteres en formato JSON
let infoCursoJson = JSON.stringify(infoCurso);

//Cadena de caracteres --> Objeto JS = .parse
let infoCursoObjeto  = JSON.parse(infoCursoJson); 

console.log(infoCursoObjeto.titulo)
