function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto}`); 
        setTimeout(() => {
            if(producto == `taza`){ 
                resolve(`Se ha ordenado una taza!!`); //Regresa en el caso de que sea exitosa
            }else{
                reject(`Este producto no esta disponible...`); //Regresa en el caso de que sea fallida 
            }
        }, 2000);
    }); 
}

function procesarPedido(respuesta) { 
    return new Promise((resolve) => { //Ya que no se rechaza la promeza, se puede omitir el reject, el resolve siempre es obligatorio
        console.log(`Procesando respuesta...`); 
        console.log(`La respuesta fue "${respuesta}"`); 
        setTimeout(() => {
            resolve(`Gracias por su compra. Disfruta tu producto.`); 
        }, 4000);
    })
}

// ordenarProducto(`lapiz`) //Se envia el parametro del pedido
//     .then(respuesta => { //Respuesta del ordenar producto, sea rechazada o aprobada 
//         console.log(`Respuesta recibida.`); 
//         console.log(respuesta) //Se muestra la respuesta que se recibio 
//         return procesarPedido(respuesta); //regresa el pedido procesado  
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada); 
//     })
//     .catch(err => { //Aqui se muestra el "error" en el caso de que se rechace la primera promesa
//         console.log(err); 
//     })

async function realizarPedido(producto) { 
    try{
        const respuesta = await ordenarProducto(producto); //await para algo asincrono se ejecuto de manera async 
        console.log(`Respuesta recibida`) 
        const respuestaProcesada = await procesarPedido(respuesta); 
        console.log(respuestaProcesada); 
    }catch(error) {
        console.log(error) // se muestra el error
    }
}

realizarPedido(`lapiz`); 