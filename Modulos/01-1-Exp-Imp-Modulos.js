const saludos = require ("./01-Modulo.js"); // requiere para importar o incluir Aqui se importa todo el contenido de la funcion que se exporta en el archivo Modulo
const { saludoHolaMundo } = require ("./01-Modulo.js"); // Solo se toma una de las funciones en especifico de todas la que exportamos de Modulo.js
// Para llamar modulos en especificos se utiliza {}

// Para llamar a todos se le agrega a una variable constante
// const saludos = require ( "./saludos.js" ); 

console.log(saludos.saludar('Cesar')); 

console.log(saludoHolaMundo()); 

