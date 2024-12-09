const http = require('http');
const puerto = 3000;

//asignamos la creacion del servidor a una constante
const servidor = http.createServer((req, res) => {//Creamos el servidor, este recibe el req y envia la respuesta 
    /** Atributos de req Request*/
    console.log(`==> req (Solicitud)`);
    console.log(req.url); 
    console.log(req.method); //Muestra el tipo de metodo que se realiza
    //console.log(req.headers); //Muestra las cabezeras 
    if (req.url === '/') { //.url muestra el path luego del dominio de la pagina
        
    }

    /** Atributos de res Response */
    console.log(`==> res (Respuesta)`);
    console.log(res.statusCode); // 200: todo ok
    res.setHeader(`content-type`, `application/json`); //Para configurar un elemento de la cabezera desde el backend (clave : valor)
    console.log(res.getHeaders()); 

    res.end(`Hola, mundo!!`); //Respuesta al cliente, finaliza todo el proceso y envia. 
}); 

//liste par que el servidor comience a escuchar las req, y se asigna el puerto + la funcion que el servidor va a realizar
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en http://localhost:${puerto}...`);
})