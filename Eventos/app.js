const EventEmitter = require(`events`); //Exportar el modulo "events" este devuelve al clase "EventEmitter"

const emisorProductos = new EventEmitter(); //Creamos un objeto del emisor del evento desde el constructor "EventEmitter"

/** Si se realiza una compra, se hace algo */
emisorProductos.on('compra', (total, numProductos) => { //Funciones que manejan eventos se llaman Event handdlers
    console.log(`Total de la compra: $${total}`); 
    console.log(`Numero de productos: $${numProductos}`); 
}); 


/** Si se emite una compra se busca al que se le asigno el modulo on */
emisorProductos.emit(`compra`, 500, 6); 

