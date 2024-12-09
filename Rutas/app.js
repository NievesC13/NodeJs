const http = require(`http`); 
const cursos = require("./cursos"); //Para asignar todo el contenido del archivo a una constante 
const {infoCursos} = require("./cursos"); //Paramtro de desestructuracion para acceder a uno de los parametros en especificos del archivo
// y en este caso del objeto

const PUERTO = 3000; 
function manejarSolicitudGET(req,res){
    const Path = req.url; //Obtener el camino principal de la url 

    if(Path === `/`){ // Pagina web principal
        res.writeHead(200, {'Content-Type': 'aplication/json'}) // Para modificar la cabecera
        return res.end(`Bienvenidos a mi primer servidor y API creados con Node.js`)
    }else if(Path === `/cursos`){
        res.statusCode = 200; 
        return res.end(JSON.stringify(infoCursos)); //Para presentar la informacion en formato JSON
    }else if(Path === '/cursos/programacion'){
        res.statusCode = 200; 
        return res.end(JSON.stringify(infoCursos.programacion));
    }else if(Path === '/cursos/matematicas'){
        res.statusCode = 200; 
        return res.end(JSON.stringify(infoCursos.matematicas));
    }else{
        res.statusCode = 404;
        return res.end(`Recurso solicitado no encontrado...`)
    }
}

function manejarSolicitudPOST(req,res){
    const Path = req.url;

    if(Path === '/cursos/programacion'){ 
        let cuerpo = ''; //Cuerpo de la solicitud 

        req.on('data', contenido => { //Evento data y contenido de la solicitud 
            cuerpo += contenido.toString(); 
        })// Cuando hay un evento que se recibe cualquier dato .on()

        req.on('end', () => {
            console.log(cuerpo); 
            console.log(typeof cuerpo); //String
            
            cuerpo = JSON.parse(cuerpo); // Como se recibe como un string lo convertimos a Objeto de JS

            console.log(typeof cuerpo);  //Object
            console.log(cuerpo.titulo); 
            return res.end('El servidor esta recibiendo solicitud POST para /cursos/programacion ')

        }); //Cuando ocurra evento end, que se termine de recibir la informacion
    }else{ 

    }
}

function manejarSolicitudPUT(req,res) {
    const Path = req.url; 

    if(Path === '/cursos/programacion') {
        res.statusCode = 200; 
        return res.end('El servidor esta recibiendo solicitud PUT para /cursos/programacion ')
    }
}

function manejarSolicitudDELETE(req,res) {
    const Path = req.url; 

    if(Path === '/cursos/programacion') {
        res.statusCode = 200; 
        return res.end('El servidor esta recibiendo solicitud DELETE para /cursos/programacion ')
    }
}
const servidor = http.createServer((req, res) => { //Para crear el servidor 
    // const {method} = req; //Se solicita el metodo de la solicitud (GET, PUT, POST, DELETE...)
    const Metodo = req.method; //Otra forma de solicitar el metodo de la solicitud
    switch(Metodo) { 
        case 'GET':
            return manejarSolicitudGET(req,res); 
        case 'POST':
            return manejarSolicitudPOST(req,res); 
        case 'PUT':
            return manejarSolicitudPUT(req,res); 
        case 'DELETE':
            return manejarSolicitudDELETE(req,res); 
        default: 
            res.statusCode = 501; 
            res.end(`El metodo no puede ser manejado por el servidor: ${Metodo}`)
    }
});

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`); 
})

/** NODEMON */
/**
 * Para actualizar el servidor de manera automatica 
 * cuando se detecta algun cambio en los archivos
 * sin reiniciar el servidor
 * 
 * npm install -g nodemon para instalar de manera global
 */