/* Creamos una promesa, esta es un objeto de JS */
const promesaCumplida = false; 

const miPromesa = new Promise((resolve,  reject) => { //Esta reciba una funcion para saber si fue exitosa o rechazada
    setTimeout(() => {
        if(promesaCumplida){ //si la promesa fue resulta cumplida
            resolve(`Promesa Cumplida!!`); 
        }else{
            reject(`Promesa rechazada...`);
        }
    }, 3000);
});

/** La funcion flecha recibe como parametro lo que sea que seceda si la promesa fue exitosa = resolve */
// miPromesa.then((valor) => { //.then se ultiliza para cuando la promesa fue cumplida y cuando es rechazada
// });

const manejarPromesaCumplida = (valor) => {
    console.log(valor) 
}

const manejarPromesaRechazada = (razonRechazo) => { // Como parametro se pasa el por que la promesa no se cumplio
    console.log(razonRechazo)
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada); // Se le pasa en el caso de que sea exitosa y en el que sea fallida