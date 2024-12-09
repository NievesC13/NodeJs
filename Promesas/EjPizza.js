const statusPedido = () => {
  //Genera numero aleatorio entre 0 - 1
   return Math.random() < 0.8; 
}

const miPedidoPizza = new Promise((resolve, reject) => { 
    setTimeout(() => {
        if(statusPedido){
            resolve(`Pedido exitoso, su pizza esta en camino.`); 
        }else{
            reject(`Ocurrio un error. Por favor intente nuevamente`);
        }
    }, 3000);
});

// const manejarPedido = (mensajeDeConfirmacion) => { 
//     console.log(mensajeDeConfirmacion);
// }

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError); 
// }

// miPedidoPizza.then(manejarPedido, rechazarPedido); 

/** Manejar promesa exitosa y el fallo en un solo bloque de codigo */
miPedidoPizza
    .then((mensajeDeConfirmacion) => { //Promesa exitosa
        console.log(mensajeDeConfirmacion);
    })
    // .then(null, (mensajeDeError) => { // Promesa fallida
    //     console.log(mensajeDeError); 
    // })
    .catch((mensajeDeError) => { // Promesa fallida con catch y evitar utilizar el then y null 
        console.log(mensajeDeError); 
    });


/** Tambien es valido de la siguiente manera */

const manejarPedido = (mensajeDeConfirmacion) => { 
    console.log(mensajeDeConfirmacion);
}

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError); 
}

miPedidoPizza.then(manejarPedido).catch(rechazarPedido); 