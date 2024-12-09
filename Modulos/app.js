// modulo fs = file system, funiona para trabajar con el sistema de archivos
// se puede realizar
/**
 * leer
 * modificar
 * copiar 
 * eliminar
 * cambiar nombre 
 * 
 * de archivos 
 * 
 * todos los metodos son async
 * 
 * si se quieren usar los metodos sync, se le colocar el Sync al final 
 * 
 */

const fs = require('fs'); 

console.log("Antes de leer el archivo")
     // contenido del archivo           Cuando se finalice el proceso, err y contenido 
// fs.readFile('index.html', 'utf-8', (err, contenido) => { //Cuando se finalice el proceso que se quiere hacer :  
//                         // Mostrar(Error o contenido)
//     if (err){
//         console.log(err);
//     }
//     console.log(contenido);
//     console.log("Mensaje..."); 

    
// }); // .readfile Para leer archivos de forma async


const archivo = fs.readFileSync('index.html', 'utf-8'); // Sync al final de la funcion para hacerlo sync

console.log(archivo)

console.log("Despues de leer archivo")

                                      //Funion a llamar cuando se finalice el proceso
fs.rename('index.html', 'main.html', (err) => { 
    if(err){ //Si el error existio!
        throw(err)
    }
    console.log('Nombre cambiado exitosamente.'); 
}); // para cambiar el nombre de un archivo 

console.log("Despues de cambiar el nombre")


// console.log(Date.now()); // Para ver el tiempo transcurrido desde enero 1, 1970, UTC.

//Agregar contenido al final de un archivo. 

fs.appendFile('main.html', '<p>Hola</p>', (err) => {
    if(err){
        throw(err)
    }
    console.log('Archivo actualizado')
}) // Se agrega en la ultima posicion y cra el archivo si este no existe

console.log("Despues de agregar contenido al archivo")

// Reemplazar todo el contenido del archivo.

            //Ubicacion del arvico   //Contenido a agregar
fs.writeFile('main.html', 'Contenido Nuevo', (err) => {
    if(err) { 
        throw err; 
    }
    console.log('Contenido reemplazado')
}) // Se reemplaza todo el contenido del archivo

console.log("Despues de reemplazar el contenido del archivo")


/** Eliminar archivos */

fs.unlink('main.html', (err) => {
    if(err) { 
        throw err; 
    }
    console.log("Archivo eliminado")
})// Se elimia el archivo completo

console.log("Despues de eliminar el archivo")

/** Si se quieren hacer las funciones sincronas
 *  Se coloca el Sync al final del metodo 
 *  Ejem: fs.renameSync y no se necesita a funcion flecha para buscar el error
 */