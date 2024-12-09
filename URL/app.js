/** Creamos una URL que el constructor ya esta por defecto */

const miURl = new URL(`https://www.ejemplo.org/curso/progrmacion?ordenar=vistas&nivel=1`); 

console.log(miURl.hostname); //el nombre del url www.ejemplo.org
console.log(miURl.hostname); //nombre del camino que se recorre /curso/progrmacion

console.log(miURl.searchParams.get(`ordenar`)); 
console.log(miURl.searchParams.get(`nivel`)); //get para extraer el valor de los query 
console.log(miURl.protocol); 