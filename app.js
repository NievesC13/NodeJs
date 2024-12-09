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
                                        // contenido del archivo
// fs.readFile('index.html', 'utf-8', (err, contenido) => { //Cuando se finalice el proceso que se quiere hacer :
//                         // Mostrar(Error o contenido)
//     if (err){
//         console.log(err);
//     }else{ 
//         console.log(contenido);  
//     }

//     console.log("Mensaje..."); 

    
// }); //Para leer archivos

// fs.rename('index.html', 'main.html', (err) => {
//     if(err){ 
//         throw(err)
//     }
//     console.log('Nombre cambiado exitosamente. '); 
// }); // para cambiar el nombre de un archivo 

console.log(Date.now()); 