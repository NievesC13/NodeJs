//metodos built-in = metodos que ya estan implementados en el leguaje nativamente

//console

console.log('Hola mundo') // Para mostrar en pantalla 
console.warn('Ocuerrio un error') //Para advertir de posible error
console.error('Ocurrio un error!!!') // Para mostrar error

console.error(new Error('Ocurrio un error!!!')); // si pasamos un objeto de error vamos a obtener mucha mas informacion del error 

//process = para ver todo el proceso que se esta ejecutando en el momento
// console.log(process.env);   // para ver el ambiente de ejecucion 

console.log(process.argv); // para aceptar todo lo que entre por la consola, como un arreglo, ejem:
// [node, app.js, 6, 7]
// [  0     1     2  3]

console.log(process.argv[2])
console.log(process.argv[3])

for( let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]); 
}

console.log(process.memoryUsage());

// Modulo OS

const os = require('os'); 

console.log(os.type());  // para acceder al tipo del sistima operativo de la aplicacion
console.log(os.homedir()); // PAra ver el directorio principal
console.log(os.uptime()); // Segundos desde que se inicio el sistema operatvo
console.log(os.userInfo()); // objeto con informacion del usuario


// setTimeout

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 2000, 'Node js');// para hacer un retraso en un proceso 

function sumar(a , b) { 
    console.log(a + b); 
}

setTimeout(sumar, 2000, 5, 6); 
// primero se agrega la funcion, luego el tiempo de espera, 
//y luego los argumentos necesarios que la funcion solicita


// setImmediate() para ejecutar codigo asincrono en la proxima iteracion 
// del ciclo de eventos de node lo mas pronto posible 
// se va a ejecutar despues del codigo sync

function mostrarTema(tema) { 
    console.log(`Estoy aprendiendo ${tema}`)
}

console.log('Antes de setImmediate()'); 

setImmediate(mostrarTema, 'Node js'); // para que se ejecute despues del todo codigo sincrono

console.log('Despues de setImmediate()'); 

// setInterval() para ejecutar codigo un numero infinito de veces con un retraso especifico de milisegundos


function mostrarTema(tema) { 
    console.log(`Estoy aprendiendo ${tema}`)
}

setInterval(mostrarTema, 1500, 'Node js'); //funcion, intervalo, arg1, arg2

function sumar(a , b){ 
    console.log( a + b ); 
}

setInterval(sumar, 2000, 1 , 2); 


